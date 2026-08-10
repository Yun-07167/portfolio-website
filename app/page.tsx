"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "./generated-content";

type Language = "zh" | "en";
type NavId = "home" | "projects" | "notes" | "connect" | "resume" | "about";
type Card = { id: string; src: string; alt: string; x: number; y: number; w: number; rot: number; decorative?: boolean };
type LocaleContent = (typeof siteContent)[Language];
type ContactOption = LocaleContent["global"]["contact_options"][number];

const cards: Card[] = [
  { id: "skill", src: "/assets/raw/raw-13.png", alt: "游戏技能界面设计", x: 7, y: 3, w: 31, rot: -8.6 },
  { id: "art", src: "/assets/raw/raw-05.png", alt: "游戏美术作品展示", x: 57, y: 5, w: 31, rot: 9.1 },
  { id: "map", src: "/assets/raw/raw-01.png", alt: "地图界面重构设计案例", x: 15, y: 27, w: 47, rot: 0 },
  { id: "illustration", src: "/assets/raw/raw-11.png", alt: "游戏叙事插画", x: 52, y: 28, w: 38, rot: 0 },
  { id: "icons", src: "/assets/raw/raw-06.png", alt: "角色头像图标设计", x: 5, y: 54, w: 31, rot: -8.8 },
  { id: "wireframe", src: "/assets/raw/raw-15.png", alt: "拆解与背包界面线框图", x: 54, y: 55, w: 31, rot: 9.9 },
  { id: "shovel", src: "/assets/raw/raw-16.png", alt: "", x: 0, y: 74, w: 14, rot: 0, decorative: true },
  { id: "tools", src: "/assets/raw/raw-04.png", alt: "", x: 82, y: 78, w: 13, rot: 0, decorative: true },
];

function DraggableCard({ card, order }: { card: Card; order: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || !ref.current) return;
    const node = ref.current;
    const parent = node.parentElement;
    if (!parent) return;
    node.setPointerCapture(event.pointerId);
    node.dataset.dragging = "true";
    node.style.zIndex = String(Date.now());
    const origin = { x: event.clientX, y: event.clientY, ...offset.current };
    const move = (e: PointerEvent) => {
      const bounds = parent.getBoundingClientRect();
      const rect = node.getBoundingClientRect();
      const x = Math.max(-rect.width + 32, Math.min(bounds.width - node.offsetLeft - 32, origin.x + e.clientX - event.clientX));
      const y = Math.max(-rect.height + 32, Math.min(bounds.height - node.offsetTop - 32, origin.y + e.clientY - event.clientY));
      offset.current = { x, y };
      node.style.setProperty("--drag-x", `${x}px`);
      node.style.setProperty("--drag-y", `${y}px`);
    };
    const stop = () => {
      node.dataset.dragging = "false";
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop, { once: true });
  };
  return <div className="card-scroll-wrapper" data-card={card.id} style={{ "--x": `${card.x}%`, "--y": `${card.y}%`, "--w": `${card.w}%`, "--rot": `${card.rot}deg`, "--order": order } as React.CSSProperties}>
    <div ref={ref} className={`draggable-card${card.decorative ? " decorative-card" : ""}`} onPointerDown={onPointerDown} role={card.decorative ? undefined : "img"} aria-label={card.alt || undefined}>
      <img src={card.src} alt="" draggable={false} />
    </div>
  </div>;
}

function Header({ language, setLanguage, theme, setTheme, content, onDialog }: { language: Language; setLanguage: (v: Language) => void; theme: "light" | "dark"; setTheme: (v: "light" | "dark") => void; content: LocaleContent; onDialog: (option: ContactOption) => void }) {
  const [hovered, setHovered] = useState<NavId | null>(null);
  const t = content.global;
  const nav = [
    { id: "projects" as const, label: t.navigation.works, href: "/work", art: "/assets/projects-illustration.svg" },
    { id: "notes" as const, label: t.navigation.notes, href: "/notes", art: "/assets/about-illustration.svg" },
    { id: "connect" as const, label: t.navigation.contact, href: "#contact", art: "/assets/icon-wechat.svg" },
    { id: "resume" as const, label: t.navigation.resume, href: "/resume", art: "/assets/resume-illustration.svg" },
    { id: "about" as const, label: t.navigation.about, href: "/about", art: "/assets/about-illustration.svg" },
  ];
  return <header className={`site-header state-${hovered ?? "default"}`} onMouseLeave={() => setHovered(null)}>
    <nav className="nav-scene" aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
      <div className="home-zone" onMouseEnter={() => setHovered("home")}>
        <a className="home-link" href="/" aria-current="page" aria-label={t.controls.home_label}>
          <span className="home-default"><img src="/assets/home-face.svg" alt=""/></span>
          <span className="home-hover"><img src="/assets/home-hover.png" alt=""/></span>
        </a>
      </div>
      {nav.map(item => <div className={`nav-zone nav-${item.id}`} key={item.id} onMouseEnter={() => setHovered(item.id)}>
        <div className="nav-reveal">
          <img className="nav-illustration" src={item.art} alt=""/>
          {item.id === "connect" && <div className="social-actions">
            {t.contact_options.map(option => option.action === "dialog" ?
              <button className="social-action" type="button" key={option.id} onClick={() => onDialog(option)} aria-label={option.label}>
                <span className="social-icon-frame"><img className={`social-icon social-icon-${option.id}`} src={option.icon} alt=""/></span>
                <span className="social-label" aria-hidden="true">{option.label}</span>
              </button> :
              <a className="social-action" key={option.id} href={option.href ?? undefined} aria-label={option.label}>
                <span className="social-icon-frame"><img className={`social-icon social-icon-${option.id}`} src={option.icon} alt=""/></span>
                <span className="social-label" aria-hidden="true">{option.label}</span>
              </a>)}
          </div>}
        </div>
        <a className="nav-label" href={item.href} onFocus={() => setHovered(item.id)} onClick={item.id === "connect" ? e => e.preventDefault() : undefined}><span className="drawn-ring">{hovered === item.id && <img src={item.id === "about" ? "/assets/connects-circle.svg" : "/assets/projects-circle.svg"} alt=""/>}</span>{item.label}</a>
      </div>)}
    </nav>
    <div className="mode-switcher">
      <button className="mode-language" type="button" onClick={() => setLanguage(language === "zh" ? "en" : "zh")} aria-label={t.controls.switch_to_other_language}>
        {language === "zh"
          ? <span className="switch-icon-language-en"><img src="/assets/icon-language-en.svg" alt=""/></span>
          : <span className="switch-icon-language-sc"><img src="/assets/icon-language-sc.svg" alt=""/></span>}
      </button>
      <button className="mode-theme" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={t.controls.switch_theme}>
        {theme === "light"
          ? <span className="switch-icon-theme-moon"><img src="/assets/icon-theme-moon.svg" alt=""/></span>
          : <span className="switch-icon-theme-sun"><img src="/assets/icon-theme-sun.svg" alt=""/></span>}
      </button>
    </div>
  </header>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [dialogOption, setDialogOption] = useState<ContactOption | null>(null);
  const stage = useRef<HTMLElement>(null);
  const content = siteContent[language];
  useEffect(() => { document.documentElement.dataset.theme = theme; document.documentElement.lang = language === "zh" ? "zh-CN" : "en"; }, [theme, language]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const wrappers = gsap.utils.toArray<HTMLElement>(".card-scroll-wrapper");
      wrappers.forEach((node, i) => gsap.fromTo(node,
        { x: (i % 2 ? -1 : 1) * (120 - i * 8), y: -90 + i * 7, scale: .7, opacity: .68 },
        { x: 0, y: 0, scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: stage.current, start: "top 70%", end: "top 18%", scrub: .6, invalidateOnRefresh: true } }
      ));
      gsap.to(".site-header", { y: -38, scale: .94, transformOrigin: "top center", scrollTrigger: { trigger: stage.current, start: "top 55%", end: "top 10%", scrub: true } });
    }, stage);
    return () => ctx.revert();
  }, []);
  return <main>
    <div className="page-shell">
      <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} content={content} onDialog={setDialogOption}/>
      <section className="hero" aria-labelledby="home-title"><div className="hero-title-row"><span className="avatar" role="img" aria-label={language === "zh" ? "杨天韵的头像" : "Portrait of Tianyun Yang"} tabIndex={0}><span className="avatar-art"><img className="avatar-base" src="/assets/avatar.png" alt=""/><span className="avatar-hover-layer"><img src="/assets/avatar-hover.png" alt=""/></span></span></span><h1 id="home-title">{content.home.hero_title}</h1></div><p>{content.home.short_description}</p></section>
      <section className="portfolio-stage" ref={stage} aria-label="可拖拽作品画布"><div className="canvas">{cards.map((card, i) => <DraggableCard key={card.id} card={card} order={i + 1}/>)}</div></section>
      <footer><p>{content.global.footer.copyright}</p><button type="button" className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={content.global.controls.back_to_top}><img src="/assets/arrow.svg" alt=""/></button></footer>
    </div>
    {dialogOption && <div className="modal-backdrop" onMouseDown={() => setDialogOption(null)}><section className="qr-modal" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" onMouseDown={e => e.stopPropagation()}><button className="modal-close" onClick={() => setDialogOption(null)} aria-label={content.global.controls.close_dialog}>×</button>{dialogOption.dialog_image ? <img className="qr-image" src={dialogOption.dialog_image} alt={dialogOption.dialog_title}/> : <div className="qr-missing" aria-hidden="true">QR</div>}<h2 id="contact-dialog-title">{dialogOption.dialog_title}</h2><p>{dialogOption.dialog_body}</p></section></div>}
  </main>;
}
