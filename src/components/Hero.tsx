import { profile } from "@/data/profile";

const S = ({ children }: { children: React.ReactNode }) => (
  <span className="text-code-string">{children}</span>
);

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-6 pt-24 pb-20"
    >
      <div className="min-w-0 flex-[999_1_560px]">
        <p className="mb-5 font-mono text-sm tracking-wide text-accent">
          {profile.role} · {profile.location} · Remote
        </p>
        <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-tight md:text-[64px]">
          Ich baue Web-, App- und Desktop-Lösungen – von der API bis zum Pixel.
        </h1>
        <p className="mt-7 max-w-[620px] text-[19px] text-muted">
          Über 14 Jahre professionelle Webentwicklung mit React, Next.js, Node.js, TypeScript und
          PHP. Headless-Architekturen, E-Commerce und KI-gestützte Entwicklung – mit dem Blick für
          saubere Prozesse von Git bis CI/CD.
        </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <a
            href="#kontakt"
            className="inline-flex min-h-12 items-center rounded-[10px] bg-accent px-6 font-medium text-on-accent"
          >
            Projekt besprechen
          </a>
          <a
            href={profile.cvUrl}
            className="inline-flex min-h-12 items-center gap-2.5 rounded-[10px] border border-line-strong px-6"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Lebenslauf (PDF)
          </a>
        </div>
        <dl className="mt-14 flex flex-wrap gap-10">
          {[
            { v: "14+", l: "Jahre Webentwicklung" },
            { v: "2001", l: "erste Webprojekte" },
            { v: "sofort", l: "verfügbar", accent: true },
          ].map((s) => (
            <div key={s.l} className="flex flex-col-reverse">
              <dt className="text-sm text-subtle">{s.l}</dt>
              <dd className={`font-display text-4xl font-bold ${s.accent ? "text-accent" : ""}`}>
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="min-w-0 flex-[1_1_380px] overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="flex gap-2 border-b border-line px-[18px] py-3.5">
          <span className="size-3 rounded-full bg-line-strong" />
          <span className="size-3 rounded-full bg-line-strong" />
          <span className="size-3 rounded-full bg-line-strong" />
          <span className="ml-2 font-mono text-xs text-faint">marco.ts</span>
        </div>
        <pre className="overflow-x-auto p-6 font-mono text-sm leading-[1.75] whitespace-pre-wrap text-text-soft">
          <span className="text-faint">{"// Profil"}</span>
          {"\n"}
          <span className="text-accent">const</span> marco = {"{"}
          {"\n  rolle: "}<S>&quot;Senior Fullstack Dev&quot;</S>,
          {"\n  frontend: ["}<S>&quot;React&quot;</S>, <S>&quot;Next.js&quot;</S>, <S>&quot;TypeScript&quot;</S>],
          {"\n  backend: ["}<S>&quot;Node.js&quot;</S>, <S>&quot;PHP&quot;</S>, <S>&quot;Spryker&quot;</S>],
          {"\n  apps: ["}<S>&quot;React Native&quot;</S>, <S>&quot;Electron&quot;</S>],
          {"\n  devops: ["}<S>&quot;GitHub Actions&quot;</S>, <S>&quot;CI/CD&quot;</S>],
          {"\n  ki: ["}<S>&quot;Copilot&quot;</S>, <S>&quot;Claude&quot;</S>],
          {"\n  remote: "}<span className="text-accent">true</span>,
          {"\n};"}
        </pre>
      </div>
    </section>
  );
}
