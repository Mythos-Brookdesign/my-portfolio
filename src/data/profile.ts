// Alle Inhalte der Seite an einem Ort – hier anpassen.
// Später können Projekte und Blogartikel aus WordPress (Headless, REST-API) kommen.

export const profile = {
  name: "Marco Hinkelmann",
  role: "Senior Fullstack-Entwickler",
  location: "Pfaffenhofen a. d. Ilm",
  email: "marco.hinkelmann@brookdesign.de",
  linkedin: "#", // TODO: LinkedIn-URL eintragen
  github: "#", // TODO: GitHub-URL eintragen
  cvUrl: "#", // TODO: PDF in /public ablegen, z. B. "/lebenslauf.pdf"
};

// Zusätzliches Wissen nur für "Frag meinen Lebenslauf" (wird nicht auf der Seite angezeigt).
// Je mehr hier steht, desto besser antwortet der Assistent.
// TODO: Ausbildung/Studium, Zertifikate, Sprachkenntnisse, Branchen, Teamgrößen,
// Projektdetails, Arbeitsweise, Verfügbarkeit.
export const cvNotes = `
`.trim();

export const stack = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { title: "Backend & Daten", items: ["Node.js", "PHP", "REST-APIs", "MySQL", "MongoDB"] },
  { title: "Apps & Desktop", items: ["React Native", "Electron"] },
  { title: "CMS & E-Commerce", items: ["WordPress", "Headless CMS", "WooCommerce", "Spryker", "OXID eShop", "Shopware"] },
  { title: "DevOps & Qualität", items: ["Git", "GitHub Actions", "CI/CD", "PHPUnit", "npm-Packages"] },
  { title: "KI & Integrationen", items: ["GitHub Copilot", "Claude", "HubSpot", "Docuware"] },
];

export type Project = {
  kind: string;
  title: string;
  text: string;
  stack: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string; // Pfad in /public, z. B. "/projects/portfolio.png"
};

export const projects: Project[] = [
  {
    kind: "Web · Headless",
    title: "Dieses Portfolio",
    text: "Next.js-Frontend mit WordPress als Headless-CMS, automatisiertes Deployment über GitHub Actions.",
    stack: "Next.js · TypeScript · WordPress · GitHub Actions",
  },
  {
    kind: "KI",
    title: "Frag meinen Lebenslauf",
    text: "Chat-Assistent, der Fragen zu meinem Profil beantwortet – angebunden an die Claude API.",
    stack: "Next.js · Node.js · Claude API",
  },
  {
    kind: "Mobile App",
    title: "[Projektname App]",
    text: "[Kurzbeschreibung: welches Problem die App löst und für wen.]",
    stack: "React Native · TypeScript",
  },
  {
    kind: "Desktop",
    title: "[Projektname Desktop-Tool]",
    text: "[Kurzbeschreibung des Electron-Tools und seines Nutzens.]",
    stack: "Electron · React · Node.js",
  },
];

export const jobs = [
  {
    time: "05/2023 – heute",
    role: "Senior Fullstack-Entwickler",
    company: "Region10Group GmbH · Ingolstadt",
    text: "Web-, App- und Desktop-Projekte mit React, Next.js, Node.js und TypeScript, Headless-WordPress, HubSpot- und Docuware-Integrationen, CI/CD mit GitHub Actions.",
  },
  {
    time: "03/2022 – 05/2023",
    role: "Senior PHP Backend Developer",
    company: "diva-e Digital Value Excellence GmbH · München",
    text: "Backend-Entwicklung für große E-Commerce-Plattformen auf Basis von Spryker, OOP mit Design Patterns, Unit Testing in großen agilen Teams.",
  },
  {
    time: "11/2014 – 03/2022",
    role: "Senior Webentwickler",
    company: "INCREON GmbH · Ismaning",
    text: "Planung und Umsetzung von Webprojekten, WordPress-Plugins und -Themes, WooCommerce-Shops und Headless-CMS-Lösungen.",
  },
  {
    time: "12/2012 – 10/2014",
    role: "Webentwickler (OXID eShop)",
    company: "Biering Online GmbH",
    text: "Entwicklung und Erweiterung von OXID eShops und individuellen Modulen.",
  },
];

export const posts = [
  {
    meta: "[Datum] · 6 Min.",
    title: "KI im Entwickleralltag: was Copilot und Claude können – und was nicht",
    text: "Erfahrungen aus echten Projekten.",
    href: "#",
  },
  {
    meta: "[Datum] · 8 Min.",
    title: "Headless WordPress mit Next.js: Architektur und Stolpersteine",
    text: "Ein Praxisbericht.",
    href: "#",
  },
  {
    meta: "[Datum] · 5 Min.",
    title: "Was Philosophie mit gutem Code zu tun hat",
    text: "Über Klarheit, Begriffe und Verantwortung.",
    href: "#",
  },
];
