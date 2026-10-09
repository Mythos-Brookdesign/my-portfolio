"use client";

import { THEME_STORAGE_KEY } from "@/lib/theme";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  }

  // Beide Icons werden gerendert, CSS zeigt das passende – so gibt es keinen Hydration-Mismatch
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Farbschema wechseln (hell / dunkel)"
      title="Farbschema wechseln"
      className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md border border-line-strong text-text-soft hover:text-strong"
    >
      {/* Sonne: im Dark Mode sichtbar → wechselt zu hell */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-5 light:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      {/* Mond: im Light Mode sichtbar → wechselt zu dunkel */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="hidden size-5 light:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
