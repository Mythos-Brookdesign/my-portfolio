"use client";

import { useState } from "react";

type Message = { from: "user" | "bot"; text: string };

// Beispiel-Dialog, der beim Laden angezeigt wird
const intro: Message[] = [
  { from: "user", text: "Hat Marco Erfahrung mit großen E-Commerce-Projekten?" },
  {
    from: "bot",
    text: "Ja. Bei diva-e hat er Backend-Module für große E-Commerce-Plattformen auf Basis von Spryker entwickelt, davor OXID-eShops und WooCommerce-Shops umgesetzt.",
  },
];

// Die API-Route nimmt die letzten 12 Nachrichten; die erste muss eine Nutzerfrage sein
function toApiMessages(messages: Message[]) {
  const recent = messages.slice(-12);
  const start = recent.findIndex((m) => m.from === "user");
  return recent.slice(start).map((m) => ({
    role: m.from === "user" ? "user" : "assistant",
    content: m.text,
  }));
}

export function AskCv() {
  const [messages, setMessages] = useState<Message[]>(intro);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = question.trim();
    if (!q || loading) return;

    const history: Message[] = [...messages, { from: "user", text: q }];
    setMessages([...history, { from: "bot", text: "…" }]);
    setQuestion("");
    setLoading(true);

    const showAnswer = (text: string) =>
      setMessages((m) => [...m.slice(0, -1), { from: "bot", text }]);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: toApiMessages(history) }),
      });
      if (!res.ok || !res.body) {
        showAnswer(res.status === 429 ? await res.text() : "Das hat leider nicht geklappt – bitte erneut versuchen.");
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        showAnswer(answer);
      }
    } catch {
      showAnswer("Der Assistent ist gerade nicht erreichbar – bitte später erneut versuchen.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section aria-labelledby="ki-titel" className="mx-auto max-w-[1200px] px-6 pb-24">
      <div className="flex flex-wrap gap-10 rounded-[20px] border border-line bg-surface p-10">
        <div className="min-w-0 flex-[1_1_320px]">
          <p className="mb-3 font-mono text-[13px] text-accent">KI-Feature</p>
          <h2 id="ki-titel" className="font-display text-[34px] leading-[1.15] font-bold">
            Frag meinen Lebenslauf
          </h2>
          <p className="mt-4 text-muted">
            Stellen Sie Fragen zu meiner Erfahrung – ein KI-Assistent antwortet auf Basis meines
            Profils. Gebaut mit Next.js und der Claude API.
          </p>
        </div>
        <div className="flex min-w-0 flex-[2_1_480px] flex-col gap-3.5">
          <div aria-live="polite" className="flex flex-col gap-3.5">
            {messages.map((m, i) =>
              m.from === "user" ? (
                <div key={i} className="max-w-[80%] self-end rounded-[14px_14px_4px_14px] bg-line px-4 py-3">
                  {m.text}
                </div>
              ) : (
                <div key={i} className="max-w-[85%] self-start rounded-[14px_14px_14px_4px] border border-line bg-surface-2 px-4 py-3 text-text-soft">
                  {m.text}
                </div>
              ),
            )}
          </div>
          <form onSubmit={handleSubmit} className="mt-2 flex gap-2.5">
            <label htmlFor="frage" className="sr-only">
              Ihre Frage
            </label>
            <input
              id="frage"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ihre Frage an meinen Lebenslauf …"
              maxLength={1000}
              className="min-h-12 min-w-0 flex-1 rounded-[10px] border border-line-strong bg-bg px-4 text-base outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={loading}
              className="min-h-12 cursor-pointer rounded-[10px] bg-accent disabled:cursor-wait disabled:opacity-60 px-[22px] font-medium text-on-accent"
            >
              {loading ? "Antwortet …" : "Fragen"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
