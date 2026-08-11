"use client";

import { useEffect, useState, type ReactNode } from "react";
import { siteContent } from "../generated-content";
import SiteHeader, { type ContactOption, type Language, type Theme } from "./SiteHeader";

type PageKind = "resume" | "about";
const LANGUAGE_STORAGE_KEY = "portfolio-language";

function Paragraphs({ text }: { text: string }) {
  return text.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>);
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
    {section.id === "about-me" && <div className="about-links"><a href="/resume">{about.resume_link_text}<span aria-hidden="true">↗</span></a><a href="mailto:yangtianyun7@foxmail.com">{about.contact_link_text}<span aria-hidden="true">↗</span></a></div>}
  </section>)}</div>;
}

export default function ContentPage({ page }: { page: PageKind }) {
  const [language, setLanguage] = useState<Language>("zh");
  const [theme, setTheme] = useState<Theme>("light");
  const [dialogOption, setDialogOption] = useState<ContactOption | null>(null);
  useEffect(() => { queueMicrotask(() => { const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY); if (saved === "zh" || saved === "en") setLanguage(saved); if (document.documentElement.dataset.theme === "dark") setTheme("dark"); }); }, []);
  useEffect(() => { document.documentElement.lang = language === "zh" ? "zh-CN" : "en"; document.documentElement.dataset.theme = theme; window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language); }, [language, theme]);
  const body: ReactNode = page === "resume" ? <Resume language={language}/> : <About language={language}/>;
  const content = siteContent[language];
  return <main className="subpage-shell"><SiteHeader language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} content={content} onDialog={setDialogOption} activePage={page}/>{body}<footer className="subpage-footer"><p>{content.global.footer.copyright}</p><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={content.global.controls.back_to_top}><img src="/assets/arrow.svg" alt=""/></button></footer>{dialogOption && <div className="modal-backdrop"><button className="modal-dismiss" type="button" onClick={() => setDialogOption(null)} aria-label={content.global.controls.close_dialog}/><section className="qr-modal" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title"><button className="modal-close" onClick={() => setDialogOption(null)} aria-label={content.global.controls.close_dialog}>×</button>{dialogOption.dialog_image ? <img className="qr-image" src={dialogOption.dialog_image} alt={dialogOption.dialog_title}/> : <div className="qr-missing" aria-hidden="true">QR</div>}<h2 id="contact-dialog-title">{dialogOption.dialog_title}</h2><p>{dialogOption.dialog_body}</p></section></div>}</main>;
}
