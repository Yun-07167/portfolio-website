"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { siteContent } from "../generated-content";

type Language = "zh" | "en";
type Theme = "light" | "dark";
type PageKind = "resume" | "about";
const LANGUAGE_STORAGE_KEY = "portfolio-language";

function Paragraphs({ text }: { text: string }) {
  return text.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>);
}

function SubpageHeader({ language, setLanguage, theme, setTheme, active }: { language: Language; setLanguage: (language: Language) => void; theme: Theme; setTheme: (theme: Theme) => void; active: PageKind }) {
  const global = siteContent[language].global;
  const links = [["works", global.navigation.works, "/work"], ["notes", global.navigation.notes, "/notes"], ["resume", global.navigation.resume, "/resume"], ["about", global.navigation.about, "/about"]] as const;
  return <header className="subpage-header">
    <Link className="subpage-home" href="/" aria-label={global.controls.home_label}><img src="/assets/home-face.svg" alt=""/></Link>
    <nav aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
      {links.map(([id, label, href]) => <Link key={id} href={href} aria-current={active === id ? "page" : undefined}>{label}</Link>)}
      <a href="mailto:yangtianyun7@foxmail.com">{global.navigation.contact}</a>
    </nav>
    <div className="subpage-switchers">
      <button type="button" onClick={() => setLanguage(language === "zh" ? "en" : "zh")} aria-label={global.controls.switch_to_other_language}>{language === "zh" ? "EN" : "中"}</button>
      <button type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={global.controls.switch_theme}><img src={theme === "light" ? "/assets/icon-theme-moon.svg" : "/assets/icon-theme-sun.svg"} alt=""/></button>
    </div>
  </header>;
}

function Resume({ language }: { language: Language }) {
  const resume = siteContent[language].resume;
  const entries = (section: { items: readonly { id: string; heading: string; date: string; body: string; labels?: readonly string[] }[] }) => section.items.map(item => <article className="resume-entry" key={item.id}>
    <div className="resume-entry-heading"><h3>{item.heading}</h3><time>{item.date}</time></div>
    {item.labels && item.labels.length > 0 && <ul className="resume-labels" aria-label={language === "zh" ? "关键词" : "Keywords"}>{item.labels.map(label => <li key={label}>{label}</li>)}</ul>}
    {item.body && <div className="resume-entry-body"><Paragraphs text={item.body}/></div>}
  </article>);
  return <div className="content-page resume-page">
    <div className="content-page-title"><p>{language === "zh" ? "游戏交互设计师 / UI·UX" : "Game Interaction Designer / UI·UX"}</p><h1>{resume.name}</h1></div>
    <section className="resume-section resume-profile"><h2>{resume.profile.title}</h2><Paragraphs text={resume.profile.body}/></section>
    <section className="resume-section"><h2>{resume.education.title}</h2>{entries(resume.education)}</section>
    <section className="resume-section"><h2>{resume.skills.title}</h2><div className="skill-groups">{resume.skills.groups.map(group => <div key={group.id}><h3>{group.label}</h3><p>{group.body}</p></div>)}</div></section>
    <section className="resume-section"><h2>{resume.experience.title}</h2>{entries(resume.experience)}</section>
    <section className="resume-section"><h2>{resume.other_experience.title}</h2>{entries(resume.other_experience)}</section>
    <section className="resume-section resume-gaming"><h2>{resume.gaming_experience.title}</h2><Paragraphs text={resume.gaming_experience.body}/></section>
  </div>;
}

function About({ language }: { language: Language }) {
  const about = siteContent[language].about;
  return <div className="content-page about-page">{about.sections.map((section, index) => <section key={section.id} className="about-section">
    <p className="section-index">0{index + 1}</p><h1>{section.title}</h1><div className="about-copy"><Paragraphs text={section.body}/></div>
    {section.id === "about-me" && <div className="about-links"><Link href="/resume">{about.resume_link_text}<span aria-hidden="true">↗</span></Link><a href="mailto:yangtianyun7@foxmail.com">{about.contact_link_text}<span aria-hidden="true">↗</span></a></div>}
  </section>)}</div>;
}

export default function ContentPage({ page }: { page: PageKind }) {
  const [language, setLanguage] = useState<Language>("zh");
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => { queueMicrotask(() => { const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY); if (saved === "zh" || saved === "en") setLanguage(saved); if (document.documentElement.dataset.theme === "dark") setTheme("dark"); }); }, []);
  useEffect(() => { document.documentElement.lang = language === "zh" ? "zh-CN" : "en"; document.documentElement.dataset.theme = theme; window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language); }, [language, theme]);
  const body: ReactNode = page === "resume" ? <Resume language={language}/> : <About language={language}/>;
  return <main className="subpage-shell"><SubpageHeader language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} active={page}/>{body}<footer className="subpage-footer"><p>{siteContent[language].global.footer.copyright}</p><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={siteContent[language].global.controls.back_to_top}><img src="/assets/arrow.svg" alt=""/></button></footer></main>;
}
