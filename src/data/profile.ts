// Alle Inhalte der Seite an einem Ort – hier anpassen.
// Später können Projekte und Blogartikel aus WordPress (Headless, REST-API) kommen.

export const profile = {
  name: "Marco Hinkelmann",
  role: "Senior Fullstack-Entwickler",
  location: "Pfaffenhofen a. d. Ilm",
  email: "marco.hinkelmann@brookdesign.de",
  linkedin: "#", // TODO: LinkedIn-URL eintragen
  github: "#", // TODO: GitHub-URL eintragen
  cvUrl: "", // PDF in /public ablegen, z. B. "/lebenslauf.pdf" – leer blendet die Links aus
};

export const stack = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { title: "Backend & Daten", items: ["Node.js", "PHP", "REST-APIs", "MySQL", "MongoDB"] },
  { title: "Apps & Desktop", items: ["React Native", "Electron"] },
  { title: "CMS & E-Commerce", items: ["WordPress", "Headless CMS", "WooCommerce", "Spryker", "OXID eShop", "Shopware", "Joomla"] },
  { title: "DevOps & Qualität", items: ["Git", "GitHub Actions", "CI/CD", "PHPUnit", "Code-Reviews", "npm-Pakete"] },
  { title: "KI & Integrationen", items: ["GitHub Copilot", "Claude", "HubSpot", "DocuWare"] },
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
    githubUrl: "https://github.com/Mythos-Brookdesign/my-portfolio",
    image: "/projects/portfolio.png",
  },
  {
    kind: "KI",
    title: "Frag meinen Lebenslauf",
    text: "Chat-Assistent, der Fragen zu meinem Profil beantwortet – angebunden an die Claude API.",
    stack: "Next.js · Node.js · Claude API",
    githubUrl: "https://github.com/Mythos-Brookdesign/my-portfolio",
    image: "/projects/ask-cv.png",
  },
  {
    kind: "App · iOS, Android, Web",
    title: "jobpilot",
    text: "Bewerbungs-Tracker mit Pipeline, Terminen und Erinnerungen. Ein KI-Assistent wertet Stellenanzeigen aus, prüft die Passung zum Profil und entwirft Anschreiben. Daten lokal in SQLite, über 120 Tests.",
    stack: "Expo · React Native · TypeScript · SQLite · Claude API",
    liveUrl: "https://jobpilot-demo.expo.app",
    githubUrl: "https://github.com/Mythos-Brookdesign/jobpilot",
    image: "/projects/jobpilot.jpg",
  },
  {
    kind: "Desktop · Electron",
    title: "CatalogDesk",
    text: "Lokales Werkzeug für Shop-Betreiber: prüft Lieferanten-CSVs auf Fehler, bereinigt Preise und Bestände und erzeugt einen WooCommerce-Import. Liest Produkte auch direkt per API, Zugangsdaten verschlüsselt im System-Schlüsselbund.",
    stack: "Electron · React · TypeScript · SQLite · Playwright",
    // Kommerzielles Produkt, Quellcode privat – hier später die Produktseite als liveUrl eintragen
    image: "/projects/catalogdesk.jpg",
  },
];

export const jobs = [
  {
    time: "05/2023 – 10/2026",
    role: "Senior Fullstack-Entwickler",
    company: "Region10Group GmbH · Ingolstadt",
    text: "Webanwendungen mit React, Next.js und TypeScript, Backend mit PHP, Node.js und MongoDB, Headless-WordPress, Integrationen von HubSpot und DocuWare, Desktop-Anwendungen mit Electron, CI/CD mit GitHub Actions und eigene npm-Pakete.",
  },
  {
    time: "03/2022 – 05/2023",
    role: "Senior PHP Backend Developer",
    company: "diva-e Digital Value Excellence GmbH · München",
    text: "Backend-Entwicklung für komplexe E-Commerce-Projekte auf Basis von Spryker Commerce OS, objektorientiertes PHP nach Clean-Code-Prinzipien, neue Module, PHPUnit-Tests und Code-Reviews in agilen Teams.",
  },
  {
    time: "11/2014 – 02/2022",
    role: "Web Developer, Digital Lab",
    company: "INCREON GmbH · Ismaning",
    text: "B2B-Internetauftritte von der Konzeption bis zum Betrieb, individuelle WordPress-Plugins und -Themes, WooCommerce-Shops, REST-APIs und WordPress als Headless-CMS, Optimierung für SEO und Performance.",
  },
  {
    time: "12/2012 – 10/2014",
    role: "Webentwickler (OXID eShop)",
    company: "Biering Online GmbH",
    text: "Entwicklung, Erweiterung und Anpassung von OXID eShops, individuelle OXID-Module, Websites mit Joomla.",
  },
  {
    time: "05/2001 – 07/2005",
    role: "Webentwickler und Berater für Internetdienstleistungen",
    company: "ComModus GbR",
    text: "Konzeption, Gestaltung und Pflege von Internetauftritten mit PHP, MySQL, HTML und JavaScript, Beratung und Verkauf.",
  },
];

// Stationen außerhalb der Webentwicklung – auf der Seite kompakt dargestellt
export const earlierJobs = [
  { time: "05/2007 – 10/2011", role: "Abteilungsverantwortlicher Kaufmann im Einzelhandel", company: "Medimax Kiel GmbH · Führung von 3 Mitarbeitern" },
  { time: "08/2005 – 05/2007", role: "Callcenter-Agent (Outbound)", company: "FREENET Customer Care GmbH" },
  { time: "03/2000 – 04/2001", role: "Callcenter-Agent & Coach", company: "Walter Telemedien & Vertrieb GmbH" },
];

export const education = [
  { time: "seit 10/2025", title: "Bachelor Kulturwissenschaften, Schwerpunkt Philosophie", place: "FernUniversität in Hagen · berufsbegleitend" },
  { time: "10/2024", title: "Ausbildereignung nach AEVO" },
  { time: "2013", title: "Zertifizierter OXID-Entwickler" },
  { time: "10/2011 – 2012", title: "Weiterbildung zum Webmaster", place: "Webmaster Fernakademie Nürnberg" },
  { time: "1995 – 1996", title: "Fachhochschulreife", place: "Fachoberschule Wirtschaft, Magdeburg" },
  { time: "08/1992 – 07/1995", title: "Ausbildung zum Kaufmann im Einzelhandel", place: "BAUHAUS Magdeburg" },
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
