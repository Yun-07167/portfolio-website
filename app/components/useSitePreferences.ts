"use client";

import { useEffect, useState } from "react";
import type { Language, Theme } from "./SiteHeader";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const THEME_STORAGE_KEY = "portfolio-theme";

export default function useSitePreferences() {
  const [language, setLanguage] = useState<Language>("zh");
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (requestedLanguage === "zh" || requestedLanguage === "en") setLanguage(requestedLanguage);
    else if (savedLanguage === "zh" || savedLanguage === "en") setLanguage(savedLanguage);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.removeAttribute("data-restoring-preferences");
  }, [language, ready, theme]);

  return { language, setLanguage, theme, setTheme, ready };
}
