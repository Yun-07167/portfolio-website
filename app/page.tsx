"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "./generated-content";

type Language = "zh" | "en";
type NavId = "home" | "projects" | "notes" | "connect" | "resume" | "about";
type StagePhase = "default" | "transitioning" | "assembled";
type CardKind = "project" | "snapshot" | "decorative";
type CardLayout = { x: number; y: number; w: number; h: number; rot: number };
type Card = {
  id: string;
  src: string;
  alt: string;
  kind: CardKind;
  href?: string;
  initial: CardLayout;
  assembled: CardLayout;
};
type LocaleContent = (typeof siteContent)[Language];
type ContactOption = LocaleContent["global"]["contact_options"][number];

const cards: Card[] = [
  { id: "map", src: "/assets/raw/raw-01.png", alt: "地图界面重构设计案例", kind: "project", href: "/work?project=undying-map", initial: { x: 377.5, y: 175.7, w: 250.934, h: 145.247, rot: 0 }, assembled: { x: 21.5, y: 0, w: 425, h: 246, rot: 0 } },
  { id: "art", src: "/assets/raw/raw-05.png", alt: "游戏美术作品展示", kind: "project", href: "/work?project=undying-art", initial: { x: 595.542, y: 79.739, w: 269.935, h: 182.617, rot: 9.13 }, assembled: { x: 458.5, y: 133, w: 425, h: 246, rot: 0 } },
  { id: "skill", src: "/assets/raw/raw-13.png", alt: "游戏技能界面设计", kind: "snapshot", initial: { x: 299.5, y: 91.392, w: 277.747, h: 186.317, rot: -8.61 }, assembled: { x: 107.5, y: 256, w: 339, h: 196, rot: 0 } },
  { id: "wireframe", src: "/assets/raw/raw-15.png", alt: "拆解与背包界面线框图", kind: "snapshot", initial: { x: 513.424, y: 233.739, w: 280.13, h: 191.514, rot: 9.9 }, assembled: { x: 107.5, y: 469, w: 339, h: 196, rot: 0 } },
  { id: "illustration", src: "/assets/raw/raw-11.png", alt: "游戏叙事插画", kind: "snapshot", initial: { x: 530.351, y: 171.067, w: 258.308, h: 149.346, rot: 0 }, assembled: { x: 458.5, y: 379, w: 339, h: 196, rot: 0 } },
  { id: "icons", src: "/assets/raw/raw-06.png", alt: "角色头像图标设计", kind: "snapshot", initial: { x: 334.5, y: 276.246, w: 278.086, h: 187.043, rot: -8.78 }, assembled: { x: 458.5, y: 585, w: 339, h: 196, rot: 0 } },
  { id: "shovel", src: "/assets/raw/raw-16.png", alt: "", kind: "decorative", initial: { x: 270.005, y: 330.12, w: 97.628, h: 97.532, rot: 0 }, assembled: { x: 446.5, y: -5, w: 128, h: 128, rot: 0 } },
  { id: "tools", src: "/assets/raw/raw-04.png", alt: "", kind: "decorative", initial: { x: 691.788, y: 414.135, w: 86.95, h: 86.865, rot: 0 }, assembled: { x: 323.5, y: 659, w: 114, h: 114, rot: 0 } },
];

function PortfolioCard({ card, order, phase }: { card: Card; order: number; phase: StagePhase }) {
  const dragRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLAnchorElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  const canDrag = phase === "assembled" && card.kind !== "project";

  useEffect(() => {
    if (canDrag || !dragRef.current) return;
    offset.current = { x: 0, y: 0 };
    dragRef.current.style.setProperty("--drag-x", "0px");
    dragRef.current.style.setProperty("--drag-y", "0px");
    dragRef.current.dataset.dragging = "false";
    if (dragRef.current.parentElement) dragRef.current.parentElement.style.zIndex = String(order);
    if (tiltRef.current) {
      tiltRef.current.style.setProperty("--tilt-x", "0deg");
      tiltRef.current.style.setProperty("--tilt-y", "0deg");
    }
  }, [canDrag, order]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!canDrag || event.button !== 0 || !dragRef.current) return;
    const node = dragRef.current;
    const wrapper = node.parentElement;
    const boundsNode = wrapper?.parentElement;
    if (!wrapper || !boundsNode) return;
    event.preventDefault();
    node.setPointerCapture(event.pointerId);
    node.dataset.dragging = "true";
    wrapper.style.zIndex = String(1000 + order);
    const startPointer = { x: event.clientX, y: event.clientY };
    const startOffset = { ...offset.current };
    const move = (e: PointerEvent) => {
      const bounds = boundsNode.getBoundingClientRect();
      const baseLeft = wrapper.offsetLeft;
      const baseTop = wrapper.offsetTop;
      const x = Math.max(-baseLeft, Math.min(bounds.width - baseLeft - wrapper.offsetWidth, startOffset.x + e.clientX - startPointer.x));
      const y = Math.max(-baseTop, Math.min(bounds.height - baseTop - wrapper.offsetHeight, startOffset.y + e.clientY - startPointer.y));
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

  const onTiltMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (phase !== "assembled" || card.kind !== "project" || !tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width - .5) * 2;
    const py = ((event.clientY - rect.top) / rect.height - .5) * 2;
    gsap.to(tiltRef.current, { "--tilt-x": `${-py * 4}deg`, "--tilt-y": `${px * 5}deg`, duration: .38, ease: "power3.out", overwrite: "auto" });
  };
  const resetTilt = () => {
    if (!tiltRef.current) return;
    gsap.to(tiltRef.current, { "--tilt-x": "0deg", "--tilt-y": "0deg", duration: .62, ease: "power3.out", overwrite: "auto" });
  };

  const image = <img src={card.src} alt="" draggable={false} />;
  const media = card.kind === "project"
    ? <a ref={tiltRef} className="card-media project-card" href={phase === "assembled" ? card.href : undefined} aria-label={card.alt} aria-disabled={phase !== "assembled"} tabIndex={phase === "assembled" ? 0 : -1} onPointerMove={onTiltMove} onPointerLeave={resetTilt} onBlur={resetTilt}>{image}</a>
    : <div className={`card-media ${card.kind === "decorative" ? "decorative-card" : "snapshot-card"}`} role={card.kind === "snapshot" ? "img" : undefined} aria-label={card.kind === "snapshot" ? card.alt : undefined} aria-hidden={card.kind === "decorative" ? "true" : undefined}>{image}</div>;

  return <div className={`card-layout card-${card.kind}`} data-card={card.id} style={{ left: card.initial.x, top: card.initial.y, width: card.initial.w, height: card.initial.h, zIndex: order } as React.CSSProperties}>
    <div ref={dragRef} className={`card-drag${canDrag ? " is-draggable" : ""}`} onPointerDown={onPointerDown}>{media}</div>
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
        {language === "zh" ? <span className="switch-icon-language-en"><img src="/assets/icon-language-en.svg" alt=""/></span> : <span className="switch-icon-language-sc"><img src="/assets/icon-language-sc.svg" alt=""/></span>}
      </button>
      <button className="mode-theme" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={t.controls.switch_theme}>
        {theme === "light" ? <span className="switch-icon-theme-moon"><img src="/assets/icon-theme-moon.svg" alt=""/></span> : <span className="switch-icon-theme-sun"><img src="/assets/icon-theme-sun.svg" alt=""/></span>}
      </button>
    </div>
  </header>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [dialogOption, setDialogOption] = useState<ContactOption | null>(null);
  const [stagePhase, setStagePhase] = useState<StagePhase>("default");
  const stage = useRef<HTMLElement>(null);
  const phaseRef = useRef<StagePhase>("default");
  const content = siteContent[language];

  useEffect(() => { document.documentElement.dataset.theme = theme; document.documentElement.lang = language === "zh" ? "zh-CN" : "en"; }, [theme, language]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(max-width: 600px)").matches) {
      phaseRef.current = "assembled";
      setStagePhase("assembled");
      return;
    }
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: stage.current,
          start: "top top+=465",
          end: "top top+=120",
          scrub: .65,
          invalidateOnRefresh: true,
          onUpdate: self => {
            const next: StagePhase = self.progress >= .985 ? "assembled" : self.progress <= .015 ? "default" : "transitioning";
            if (next !== phaseRef.current) {
              phaseRef.current = next;
              setStagePhase(next);
            }
          },
        },
      });
      cards.forEach(card => {
        const node = stage.current?.querySelector<HTMLElement>(`[data-card="${card.id}"]`);
        if (!node) return;
        timeline.fromTo(node,
          { left: card.initial.x, top: card.initial.y, width: card.initial.w, height: card.initial.h, rotation: card.initial.rot },
          { left: card.assembled.x, top: card.assembled.y, width: card.assembled.w, height: card.assembled.h, rotation: card.assembled.rot },
          0
        );
      });
      gsap.to(".site-header", { y: -38, scale: .94, transformOrigin: "top center", scrollTrigger: { trigger: stage.current, start: "top 55%", end: "top 10%", scrub: true } });
    }, stage);
    return () => ctx.revert();
  }, []);

  return <main>
    <div className="page-shell">
      <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} content={content} onDialog={setDialogOption}/>
      <section className="hero" aria-labelledby="home-title"><div className="hero-title-row"><span className="avatar" role="img" aria-label={language === "zh" ? "杨天韵的头像" : "Portrait of Tianyun Yang"} tabIndex={0}><span className="avatar-art"><img className="avatar-base" src="/assets/avatar.png" alt=""/><span className="avatar-hover-layer"><img src="/assets/avatar-hover.png" alt=""/></span></span></span><h1 id="home-title">{content.home.hero_title}</h1></div><p>{content.home.short_description}</p></section>
      <section className={`portfolio-stage stage-${stagePhase}`} ref={stage} aria-label={language === "zh" ? "作品展示画布" : "Portfolio canvas"}><div className="canvas">{cards.map((card, i) => <PortfolioCard key={card.id} card={card} order={i + 1} phase={stagePhase}/>)}</div></section>
      <footer><p>{content.global.footer.copyright}</p><button type="button" className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={content.global.controls.back_to_top}><img src="/assets/arrow.svg" alt=""/></button></footer>
    </div>
    {dialogOption && <div className="modal-backdrop" onMouseDown={() => setDialogOption(null)}><section className="qr-modal" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" onMouseDown={e => e.stopPropagation()}><button className="modal-close" onClick={() => setDialogOption(null)} aria-label={content.global.controls.close_dialog}>×</button>{dialogOption.dialog_image ? <img className="qr-image" src={dialogOption.dialog_image} alt={dialogOption.dialog_title}/> : <div className="qr-missing" aria-hidden="true">QR</div>}<h2 id="contact-dialog-title">{dialogOption.dialog_title}</h2><p>{dialogOption.dialog_body}</p></section></div>}
  </main>;
}
