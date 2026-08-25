"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- full document navigation is intentional for Vinext route reliability */

import { useState, type Dispatch, type SetStateAction } from "react";
import { siteContent } from "../generated-content";
import ModeSwitcher from "./ModeSwitcher";
import MobileNavigation from "./MobileNavigation";
import HeaderHoverRing from "./HeaderHoverRing";

export type Language = "zh" | "en";
export type Theme = "light" | "dark";
export type ActivePage = "home" | "projects" | "notes" | "resume" | "about";
type NavId = "home" | "projects" | "notes" | "connect" | "resume" | "about";
type LocaleContent = (typeof siteContent)[Language];
export type ContactOption = LocaleContent["global"]["contact_options"][number];

export default function SiteHeader({ language, setLanguage, theme, setTheme, content, onDialog, activePage }: { language: Language; setLanguage: Dispatch<SetStateAction<Language>>; theme: Theme; setTheme: (theme: Theme) => void; content: LocaleContent; onDialog: (option: ContactOption) => void; activePage: ActivePage }) {
  const [hovered, setHovered] = useState<NavId | null>(null);
  const t = content.global;
  const nav = [
    { id: "projects" as const, label: t.navigation.works, href: "/work", art: "/assets/projects-illustration.svg" },
    { id: "notes" as const, label: t.navigation.notes, href: "/notes", art: "/assets/notes-illustration.svg" },
    { id: "connect" as const, label: t.navigation.contact, href: "#contact", art: "/assets/icon-wechat.svg" },
    { id: "resume" as const, label: t.navigation.resume, href: "/resume", art: "/assets/resume-illustration.svg" },
    { id: "about" as const, label: t.navigation.about, href: "/about", art: "/assets/about-illustration.svg" },
  ];
  return <header className={`site-header state-${hovered ?? "default"}`} onMouseLeave={() => setHovered(null)}>
    <MobileNavigation language={language} content={t} activePage={activePage} onDialog={onDialog} controlsId="mobile-site-navigation"/>
    <nav className="nav-scene desktop-nav-scene" aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
      <div className="home-zone" onMouseEnter={() => setHovered("home")}>
        <a className="home-link" href="/" aria-current={activePage === "home" ? "page" : undefined} aria-label={t.controls.home_label}>
          <span className="home-default"><img src="/assets/home-face.svg" alt=""/></span>
          <span className="home-hover"><img src="/assets/home-hover-transparent.png" alt=""/></span>
        </a>
      </div>
      {nav.map(item => {
        const isActive = item.id === activePage;
        return <div className={`nav-zone nav-${item.id}${isActive ? " is-active" : ""}`} key={item.id} onMouseLeave={() => setHovered(current => current === item.id ? null : current)}>
          <div className="nav-reveal">
            {item.id === "notes" ? <span className="nav-notes-illustration-frame" aria-hidden="true"><img className="nav-illustration" src={item.art} alt=""/></span> : <img className="nav-illustration" src={item.art} alt=""/>}
            {item.id === "connect" && <div className="social-actions">
              {t.contact_options.map(option => option.action === "dialog" ? <button className="social-action" type="button" key={option.id} onClick={() => onDialog(option)} aria-label={option.label}><span className="social-icon-frame"><img className={`social-icon social-icon-${option.id}`} src={option.icon} alt=""/></span><span className="social-label" aria-hidden="true">{option.label}</span></button> : <a className="social-action" key={option.id} href={option.href ?? undefined} aria-label={option.label}><span className="social-icon-frame"><img className={`social-icon social-icon-${option.id}`} src={option.icon} alt=""/></span><span className="social-label" aria-hidden="true">{option.label}</span></a>)}
            </div>}
          </div>
          <a className="nav-label" href={item.href} aria-current={isActive ? "page" : undefined} onMouseEnter={() => setHovered(item.id)} onFocus={() => setHovered(item.id)} onBlur={() => setHovered(current => current === item.id ? null : current)} onClick={item.id === "connect" ? event => event.preventDefault() : undefined}>
            <HeaderHoverRing navId={item.id}/>{item.label}
            {isActive && item.id !== "connect" && <span className="active-underline" aria-hidden="true"><img src={item.id === "resume" ? "/assets/resume-active-underline.svg" : item.id === "about" ? "/assets/about-active-underline.svg" : "/assets/projects-active-underline.svg"} alt=""/></span>}
          </a>
        </div>;
      })}
    </nav>
    <ModeSwitcher language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} languageLabel={t.controls.switch_to_other_language} themeLabel={t.controls.switch_theme}/>
  </header>;
}
