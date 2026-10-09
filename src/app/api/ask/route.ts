import Anthropic from "@anthropic-ai/sdk";
import { buildCvSystemPrompt } from "@/lib/cv-prompt";

// Liest ANTHROPIC_API_KEY aus der Umgebung (.env.local bzw. Vercel-Umgebungsvariablen)
const client = new Anthropic();
const systemPrompt = buildCvSystemPrompt();

const MAX_MESSAGES = 12;
const MAX_CHARS = 1000;

// Einfaches Rate-Limit pro IP. Gilt nur pro Server-Instanz – zusätzlich ein
// Ausgabenlimit in der Anthropic Console setzen.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 20;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}

function parseMessages(body: unknown): Anthropic.Beta.BetaMessageParam[] | null {
  if (typeof body !== "object" || body === null || !("messages" in body)) return null;
  const { messages } = body;
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) return null;

  const parsed: Anthropic.Beta.BetaMessageParam[] = [];
  for (const m of messages) {
    if (
      typeof m !== "object" ||
      m === null ||
      (m.role !== "user" && m.role !== "assistant") ||
      typeof m.content !== "string" ||
      m.content.trim() === "" ||
      m.content.length > MAX_CHARS
    ) {
      return null;
    }
    parsed.push({ role: m.role, content: m.content });
  }
  if (parsed[0].role !== "user" || parsed.at(-1)?.role !== "user") return null;
  return parsed;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return new Response("Zu viele Anfragen – bitte versuchen Sie es später erneut.", { status: 429 });
  }

  const messages = parseMessages(await request.json().catch(() => null));
  if (!messages) {
    return new Response("Ungültige Anfrage.", { status: 400 });
  }

  const stream = client.beta.messages.stream({
    model: "claude-opus-5-5",
    max_tokens: 4000,
    output_config: { effort: "low" },
    // Lehnt das Modell ab, springt serverseitig automatisch ein passendes Ersatzmodell ein
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    system: [{ type: "text", text: systemPrompt, cache_control: { type: "ephemeral" } }],
    messages,
  });

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      let wroteText = false;
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            wroteText = true;
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        const final = await stream.finalMessage();
        if (!wroteText || final.stop_reason === "refusal") {
          controller.enqueue(
            encoder.encode("Dazu kann ich leider nichts sagen. Fragen Sie mich gern etwas zu Marcos Erfahrung."),
          );
        }
      } catch (error) {
        if (error instanceof Anthropic.RateLimitError) {
          console.error("Claude API: Rate-Limit erreicht");
        } else if (error instanceof Anthropic.AuthenticationError) {
          console.error("Claude API: ANTHROPIC_API_KEY fehlt oder ist ungültig");
        } else if (error instanceof Anthropic.APIError) {
          console.error(`Claude API-Fehler ${error.status}:`, error.message);
        } else {
          console.error("Claude API:", error);
        }
        controller.enqueue(
          encoder.encode(
            `${wroteText ? "\n\n" : ""}Der Assistent ist gerade nicht erreichbar – bitte später erneut versuchen.`,
          ),
        );
      } finally {
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
