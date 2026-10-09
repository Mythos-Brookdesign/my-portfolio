import Image from "next/image";
import { jobs, posts, profile, projects, stack } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

const container = "mx-auto max-w-[1200px] px-6 pb-24";
const card = "rounded-2xl border border-line bg-surface";

export function About() {
  return (
    <section id="ueber" className={`${container} flex flex-wrap gap-12`}>
      <div className="min-w-0 flex-[1_1_280px]">
        <p className="mb-3 font-mono text-[13px] text-accent">01 / Über mich</p>
        <h2 className="font-display text-[40px] leading-[1.1] font-bold">
          Entwickler mit Blick über den Code hinaus
        </h2>
      </div>
      <div className="flex min-w-0 flex-[2_1_480px] flex-col gap-[18px] text-muted">
        <p>
          Meine ersten Webprojekte habe ich 2001 gebaut. Seitdem hat sich der Stack mehrfach
          gewandelt – von PHP und jQuery über WordPress und OXID bis zu React, Next.js und
          Headless-Architekturen. Geblieben ist die Freude daran, Lösungen zu bauen, die im Alltag
          wirklich funktionieren.
        </p>
        <p>
          Heute arbeite ich als Senior Fullstack-Entwickler an Web-, App- und Desktop-Projekten und
          setze KI-Tools wie GitHub Copilot und Claude gezielt für mehr Effizienz und Codequalität
          ein.
        </p>
        <p>
          Nebenbei studiere ich Kulturwissenschaften mit Schwerpunkt Philosophie an der
          FernUniversität in Hagen. Als Ausbilder (AEVO) begleite ich außerdem gern
          Nachwuchsentwickler.
        </p>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className={container}>
      <SectionHeading number="02" label="Stack" title="Womit ich arbeite" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {stack.map((g) => (
          <div key={g.title} className="rounded-[14px] border border-line bg-surface p-6">
            <h3 className="mb-4 font-display text-lg font-bold">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((t) => (
                <li key={t} className="rounded-md bg-chip px-2.5 py-1.5 font-mono text-[13px] text-text-soft">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projekte" className={container}>
      <SectionHeading number="03" label="Projekte" title="Ausgewählte Arbeiten" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
        {projects.map((p) => (
          <article key={p.title} className={`${card} flex flex-col overflow-hidden`}>
            {p.image ? (
              <div className="relative h-[220px] border-b border-line bg-surface-2">
                <Image
                  src={p.image}
                  alt={`Screenshot: ${p.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div className="flex h-[220px] items-center justify-center border-b border-line bg-surface-2 font-mono text-[13px] text-faint">
                [Screenshot: {p.title}]
              </div>
            )}
            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="font-mono text-xs text-accent">{p.kind}</p>
              <h3 className="font-display text-[22px] font-bold">{p.title}</h3>
              <p className="text-base text-muted">{p.text}</p>
              <p className="font-mono text-[13px] text-subtle">{p.stack}</p>
              <div className="mt-auto flex gap-5 pt-2 text-[15px]">
                <a href={p.liveUrl ?? "#"} className="hover:text-strong">Live ansehen →</a>
                <a href={p.githubUrl ?? "#"} className="hover:text-strong">GitHub →</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="erfahrung" className={container}>
      <SectionHeading number="04" label="Erfahrung" title="Stationen" />
      <ol className="flex flex-col border-t border-line">
        {jobs.map((j) => (
          <li key={j.time} className="flex flex-wrap gap-x-8 gap-y-2 border-b border-line py-7">
            <div className="flex-[0_0_200px] font-mono text-sm text-subtle">{j.time}</div>
            <div className="min-w-0 flex-[1_1_400px]">
              <h3 className="font-display text-[22px] font-bold">{j.role}</h3>
              <p className="mt-1 mb-2 text-[15px] text-accent">{j.company}</p>
              <p className="text-base text-muted">{j.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <a href={profile.cvUrl} className="mt-7 inline-block text-base hover:text-strong">
        Vollständiger Lebenslauf als PDF →
      </a>
    </section>
  );
}

export function Blog() {
  return (
    <section id="blog" className={container}>
      <SectionHeading number="05" label="Blog" title="Code trifft Philosophie" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {posts.map((b) => (
          <a key={b.title} href={b.href} className={`${card} flex flex-col gap-2.5 p-7 hover:border-line-strong`}>
            <span className="font-mono text-xs text-subtle">{b.meta}</span>
            <span className="font-display text-[21px] leading-[1.3] font-medium">{b.title}</span>
            <span className="text-[15px] text-muted">{b.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

const inputClass =
  "min-h-12 rounded-[10px] border border-line-strong bg-bg px-3.5 text-base text-text outline-none focus:border-accent";

export function Contact() {
  return (
    <section id="kontakt" className={container}>
      <div className="flex flex-wrap gap-12 rounded-[20px] border border-line bg-surface p-8 md:p-12">
        <div className="min-w-0 flex-[1_1_320px]">
          <p className="mb-3 font-mono text-[13px] text-accent">06 / Kontakt</p>
          <h2 className="font-display text-[40px] leading-[1.1] font-bold">Lassen Sie uns sprechen.</h2>
          <p className="mt-4 mb-7 text-muted">
            Offen für Festanstellung – hybrid im Raum Ingolstadt / München oder 100 % remote
            bundesweit. Verfügbar ab sofort.
          </p>
          <div className="flex flex-col gap-3 text-base">
            <a href={`mailto:${profile.email}`} className="hover:text-strong">{profile.email}</a>
            <a href={profile.linkedin} className="hover:text-strong">LinkedIn</a>
            <a href={profile.github} className="hover:text-strong">GitHub</a>
          </div>
        </div>
        {/* TODO: Formular an eine Server Action oder einen Mail-Dienst anbinden */}
        <form className="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
          <label className="flex flex-col gap-1.5 text-sm text-text-soft">
            Name
            <input name="name" type="text" required className={inputClass} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-text-soft">
            E-Mail
            <input name="email" type="email" required className={inputClass} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-text-soft">
            Nachricht
            <textarea name="message" rows={5} required className={`${inputClass} resize-y py-3`} />
          </label>
          <button
            type="submit"
            className="min-h-12 cursor-pointer self-start rounded-[10px] bg-accent px-7 font-medium text-on-accent"
          >
            Nachricht senden
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 px-6 py-7 text-sm text-subtle">
        <span>© 2026 {profile.name}</span>
        <div className="flex gap-6">
          <a href="/impressum" className="hover:text-strong">Impressum</a>
          <a href="/datenschutz" className="hover:text-strong">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
