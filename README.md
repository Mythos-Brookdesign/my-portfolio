# Portfolio – Marco Hinkelmann

Next.js (App Router) · TypeScript · Tailwind CSS v4

## Starten

Voraussetzung: Node.js 20 oder neuer (`node -v`).

```bash
npm install
npm run dev
```

Dann im Browser http://localhost:3000 öffnen. Änderungen werden sofort neu geladen.

## Wo was liegt

| Datei | Inhalt |
| --- | --- |
| `src/data/profile.ts` | **Alle Inhalte**: Kontaktdaten, Stack, Projekte, Stationen, Blogartikel |
| `src/app/globals.css` | Farben und Schriften (Akzentfarbe: `--color-accent`) |
| `src/app/layout.tsx` | Schriften, Seitentitel, SEO-Beschreibung |
| `src/app/page.tsx` | Reihenfolge der Abschnitte |
| `src/components/` | Header, Hero, KI-Chat (`AskCv.tsx`), restliche Abschnitte (`Sections.tsx`) |

## Offene Punkte (TODO)

- [ ] LinkedIn-, GitHub- und Lebenslauf-Links in `src/data/profile.ts`
- [ ] Lebenslauf als PDF in `public/` ablegen
- [ ] Projektnamen, Texte und Screenshots für App- und Desktop-Projekt
- [ ] „Frag meinen Lebenslauf“ an die Claude API anbinden (API-Route `src/app/api/ask/route.ts`)
- [ ] Kontaktformular anbinden (Server Action oder Mail-Dienst)
- [ ] Seiten `/impressum` und `/datenschutz` anlegen (Pflicht in Deutschland)
- [ ] Sprachumschaltung DE/EN
- [ ] Headless-WordPress für Projekte und Blog anbinden
- [ ] Deployment über GitHub Actions bzw. Vercel

## Befehle

```bash
npm run dev     # Entwicklungsserver
npm run build   # Produktions-Build
npm run start   # Produktions-Build starten
npm run lint    # ESLint
```
