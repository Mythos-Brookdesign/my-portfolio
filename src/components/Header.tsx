const links = [
  { href: "#ueber", label: "Über mich" },
  { href: "#stack", label: "Stack" },
  { href: "#projekte", label: "Projekte" },
  { href: "#erfahrung", label: "Erfahrung" },
  { href: "#blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="border-b border-[#23262d]">
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-5"
      >
        <a href="#top" className="font-display text-[22px] font-bold">
          marco<span className="text-accent">.</span>dev
        </a>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-text-soft hover:text-white">
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-lg bg-accent px-[18px] py-2.5 font-medium text-[#111214]"
          >
            Kontakt
          </a>
          {/* TODO: Sprachumschaltung (z. B. next-intl) */}
          <button
            type="button"
            aria-label="Sprache wechseln"
            className="min-h-11 cursor-pointer rounded-md border border-[#343842] px-3 font-mono text-[13px] text-text-soft"
          >
            DE / EN
          </button>
        </div>
      </nav>
    </header>
  );
}
