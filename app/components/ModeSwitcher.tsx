"use client";

import type { Dispatch, SetStateAction } from "react";

type Language = "zh" | "en";
type Theme = "light" | "dark";

export default function ModeSwitcher({ language, setLanguage, theme, setTheme, languageLabel, themeLabel }: {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  languageLabel: string;
  themeLabel: string;
}) {
  return <div className="mode-switcher">
    <button className="mode-language" type="button" onClick={() => setLanguage(current => current === "zh" ? "en" : "zh")} aria-label={languageLabel}>
      {language === "zh" ? <span key="en" className="switch-icon-language-en"><img src="/assets/icon-language-en.svg" alt=""/></span> : <span key="zh" className="switch-icon-language-sc"><img src="/assets/icon-language-sc.svg" alt=""/></span>}
    </button>
    <button className="mode-theme" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={themeLabel}>
      {theme === "light" ? <span className="switch-icon-theme-moon"><img src="/assets/icon-theme-moon.svg" alt=""/></span> : <span className="switch-icon-theme-sun"><img src="/assets/icon-theme-sun.svg" alt=""/></span>}
    </button>
  </div>;
}
