import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#ueber", label: "Über mich" },
  { href: "#stack", label: "Stack" },
  { href: "#projekte", label: "Projekte" },
  { href: "#erfahrung", label: "Erfahrung" },
  { href: "#blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="border-b border-line-soft">
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-5"
      >
        <a href="#top" className="font-display text-[22px] font-bold">
          marco<span className="text-accent">.</span>dev
        </a>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-text-soft hover:text-strong">
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-lg bg-accent px-[18px] py-2.5 font-medium text-on-accent"
          >
            Kontakt
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
