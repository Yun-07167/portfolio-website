"use client";

import { useState } from "react";
import { siteContent } from "../generated-content";

type Language = "zh" | "en";

export default function NotesPage() {
  const [language, setLanguage] = useState<Language>("zh");
  const content = siteContent[language];

  return <main className="notes-placeholder-page">
    <header className="notes-placeholder-header">
      <a href="/" aria-label={content.global.controls.home_label}><img src="/assets/home-face.svg" alt=""/></a>
      <nav aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
        <a href="/work">{content.global.navigation.works}</a>
        <a href="/notes" aria-current="page">{content.global.navigation.notes}</a>
        <a href="/resume">{content.global.navigation.resume}</a>
        <a href="/about">{content.global.navigation.about}</a>
      </nav>
      <button type="button" onClick={() => setLanguage(language === "zh" ? "en" : "zh")} aria-label={content.global.controls.switch_to_other_language}>{language === "zh" ? "En" : "文"}</button>
    </header>
    <section>
      <h1>{content.notes.page_title}</h1>
      <p>{content.notes.work_in_progress_text}</p>
    </section>
  </main>;
}
