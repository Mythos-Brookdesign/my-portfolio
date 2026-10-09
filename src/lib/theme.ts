export const THEME_STORAGE_KEY = "theme";

// Läuft vor dem ersten Paint: gespeicherte Wahl, sonst Systemeinstellung
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}})()`;
