"use client";

import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { siteContent } from "./generated-content";
import ModeSwitcher from "./components/ModeSwitcher";

type Language = "zh" | "en";
const LANGUAGE_STORAGE_KEY = "portfolio-language";
type NavId = "home" | "projects" | "notes" | "connect" | "resume" | "about";
type StagePhase = "default" | "transitioning" | "assembled";
type CardKind = "project" | "snapshot" | "decorative";
type CardLayout = { x: number; y: number; w: number; h: number; rot: number };
type Card = {
  id: string;
  src: string;
  alt: Record<Language, string>;
  kind: CardKind;
  href?: string;
  initial: CardLayout;
  assembled: CardLayout;
};
type LocaleContent = (typeof siteContent)[Language];
type ContactOption = LocaleContent["global"]["contact_options"][number];

const ASSEMBLED_HEIGHT = 824;
const STAGE_SAFE_GUTTER = 48;
const MIN_ASSEMBLED_SCALE = 0.75;
const CARD_PLANE_HALF_WIDTH = 453;

function centeredStageX(x: number) {
  return `calc(50% - ${CARD_PLANE_HALF_WIDTH}px + ${x}px)`;
}

function getAssembledScale() {
  return Math.min(1, Math.max(MIN_ASSEMBLED_SCALE, (window.innerHeight - STAGE_SAFE_GUTTER * 2) / ASSEMBLED_HEIGHT));
}

const slotLayouts: Record<string, { initial: CardLayout; assembled: CardLayout }> = {
  "featured-left": { initial: { x: 377.5, y: 175.7, w: 250.934, h: 145.247, rot: 0 }, assembled: { x: 15.5, y: 0, w: 425, h: 246, rot: -2.2 } },
  "featured-right": { initial: { x: 595.542, y: 79.739, w: 269.935, h: 182.617, rot: 9.13 }, assembled: { x: 464.5, y: 133, w: 425, h: 246, rot: 2.1 } },
  "snapshot-left-01": { initial: { x: 299.5, y: 91.392, w: 277.747, h: 186.317, rot: -8.61 }, assembled: { x: 101.5, y: 270, w: 339, h: 196, rot: 1.2 } },
  "snapshot-left-02": { initial: { x: 513.424, y: 233.739, w: 280.13, h: 191.514, rot: 9.9 }, assembled: { x: 101.5, y: 490, w: 339, h: 196, rot: -1.5 } },
  "snapshot-right-01": { initial: { x: 530.351, y: 171.067, w: 258.308, h: 149.346, rot: 0 }, assembled: { x: 464.5, y: 403, w: 339, h: 196, rot: -1.1 } },
  "snapshot-right-02": { initial: { x: 334.5, y: 276.246, w: 278.086, h: 187.043, rot: -8.78 }, assembled: { x: 464.5, y: 623, w: 339, h: 196, rot: 1.8 } },
  "decoration-top": { initial: { x: 270.005, y: 330.12, w: 97.628, h: 97.532, rot: 0 }, assembled: { x: 446.5, y: -5, w: 128, h: 128, rot: 2.7 } },
  "decoration-bottom": { initial: { x: 691.788, y: 414.135, w: 86.95, h: 86.865, rot: 0 }, assembled: { x: 323.5, y: 710, w: 114, h: 114, rot: -2.4 } },
};

const cards: Card[] = siteContent.homeShowcase.items.map(item => ({
  id: item.id,
  src: item.image,
  alt: { zh: item.alt.zh, en: item.alt.en },
  kind: item.type as CardKind,
  href: "href" in item ? item.href : undefined,
  ...slotLayouts[item.slot],
}));

function PortfolioCard({ card, order, phase, language }: { card: Card; order: number; phase: StagePhase; language: Language }) {
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
      const renderedBounds = boundsNode.getBoundingClientRect();
      const scale = renderedBounds.width / boundsNode.offsetWidth || 1;
      const baseLeft = wrapper.offsetLeft;
      const baseTop = wrapper.offsetTop;
      const x = Math.max(-baseLeft, Math.min(boundsNode.offsetWidth - baseLeft - wrapper.offsetWidth, startOffset.x + (e.clientX - startPointer.x) / scale));
      const y = Math.max(-baseTop, Math.min(boundsNode.offsetHeight - baseTop - wrapper.offsetHeight, startOffset.y + (e.clientY - startPointer.y) / scale));
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

  const onDragKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!canDrag || !dragRef.current) return;
    const step = event.shiftKey ? 40 : 12;
    const movement = {
      ArrowLeft: { x: -step, y: 0 },
      ArrowRight: { x: step, y: 0 },
      ArrowUp: { x: 0, y: -step },
      ArrowDown: { x: 0, y: step },
    }[event.key];
    if (!movement) return;
    event.preventDefault();
    offset.current = { x: offset.current.x + movement.x, y: offset.current.y + movement.y };
    dragRef.current.style.setProperty("--drag-x", `${offset.current.x}px`);
    dragRef.current.style.setProperty("--drag-y", `${offset.current.y}px`);
  };

  const image = <img src={card.src} alt="" draggable={false} />;
  const media = card.kind === "project"
    ? <a ref={tiltRef} className="card-media project-card" href={card.href} aria-label={card.alt[language]} aria-disabled={phase !== "assembled"} tabIndex={phase === "assembled" ? 0 : -1} onClick={event => { if (phase !== "assembled") event.preventDefault(); }} onPointerMove={onTiltMove} onPointerLeave={resetTilt} onBlur={resetTilt}>{image}</a>
    : <div className={`card-media ${card.kind === "decorative" ? "decorative-card" : "snapshot-card"}`} role={card.kind === "snapshot" ? "img" : undefined} aria-label={card.kind === "snapshot" ? card.alt[language] : undefined} aria-hidden={card.kind === "decorative" ? "true" : undefined}>{image}</div>;

  return <div className={`card-layout card-${card.kind}`} data-card={card.id} style={{ left: centeredStageX(card.initial.x), top: card.initial.y, width: card.initial.w, height: card.initial.h, zIndex: order } as React.CSSProperties}>
    <div ref={dragRef} className={`card-drag${canDrag ? " is-draggable" : ""}`} role={canDrag ? "button" : undefined} tabIndex={canDrag ? 0 : undefined} aria-label={canDrag ? card.alt[language] : undefined} onKeyDown={onDragKeyDown} onPointerDown={onPointerDown}>{media}</div>
  </div>;
}

function Header({ language, setLanguage, theme, setTheme, content, onDialog }: { language: Language; setLanguage: Dispatch<SetStateAction<Language>>; theme: "light" | "dark"; setTheme: (v: "light" | "dark") => void; content: LocaleContent; onDialog: (option: ContactOption) => void }) {
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
    <nav className="nav-scene" aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
      <div className="home-zone" onMouseEnter={() => setHovered("home")}>
        <Link className="home-link" href="/" aria-current="page" aria-label={t.controls.home_label}>
          <span className="home-default"><img src="/assets/home-face.svg" alt=""/></span>
          <span className="home-hover"><img src="/assets/home-hover.png" alt=""/></span>
        </Link>
      </div>
      {nav.map(item => <div className={`nav-zone nav-${item.id}`} key={item.id} onMouseEnter={() => setHovered(item.id)}>
        <div className="nav-reveal">
          {item.id === "notes" ? (
            <span className="nav-notes-illustration-frame" aria-hidden="true">
              <img className="nav-illustration" src={item.art} alt="" />
            </span>
          ) : (
            <img className="nav-illustration" src={item.art} alt="" />
          )}
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
        {item.id === "notes" && <span className="nav-status-caption" aria-hidden="true">{language === "zh" ? "施工中" : "in progress"}</span>}
      </div>)}
    </nav>
    <ModeSwitcher language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} languageLabel={t.controls.switch_to_other_language} themeLabel={t.controls.switch_theme}/>
  </header>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const [languagePreferenceLoaded, setLanguagePreferenceLoaded] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [dialogOption, setDialogOption] = useState<ContactOption | null>(null);
  const [stagePhase, setStagePhase] = useState<StagePhase>("default");
  const stage = useRef<HTMLElement>(null);
  const phaseRef = useRef<StagePhase>("default");
  const content = siteContent[language];

  useEffect(() => {
    queueMicrotask(() => {
      const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLanguage === "zh" || savedLanguage === "en") setLanguage(savedLanguage);
      setLanguagePreferenceLoaded(true);
    });
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    if (languagePreferenceLoaded) window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [theme, language, languagePreferenceLoaded]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(max-width: 600px)").matches) {
      phaseRef.current = "assembled";
      queueMicrotask(() => setStagePhase("assembled"));
      return;
    }
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: stage.current,
          start: "top top+=465",
          end: `top top+=${STAGE_SAFE_GUTTER}`,
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
          { left: centeredStageX(card.initial.x), top: card.initial.y, width: card.initial.w, height: card.initial.h, rotation: card.initial.rot },
          { left: centeredStageX(card.assembled.x), top: card.assembled.y, width: card.assembled.w, height: card.assembled.h, rotation: card.assembled.rot },
          0
        );
      });
      const canvas = stage.current?.querySelector<HTMLElement>(".canvas");
      if (canvas) {
        timeline.fromTo(canvas,
          { scale: 1 },
          { scale: () => getAssembledScale(), transformOrigin: "top center" },
          0
        );
      }
      gsap.to(".site-header", { y: -38, scale: .94, transformOrigin: "top center", scrollTrigger: { trigger: stage.current, start: "top 55%", end: "top 10%", scrub: true } });
    }, stage);
    return () => ctx.revert();
  }, []);

  return <main>
    <div className="page-shell">
      <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} content={content} onDialog={setDialogOption}/>
      <section className="hero" aria-labelledby="home-title"><div className="hero-title-row"><span className="avatar" role="img" aria-label={language === "zh" ? "杨天韵的头像" : "Portrait of Tianyun Yang"}><span className="avatar-art"><img className="avatar-base" src="/assets/avatar.png" alt=""/><span className="avatar-hover-layer"><img src="/assets/avatar-hover.png" alt=""/></span></span></span><h1 id="home-title">{content.home.hero_title}</h1></div><p>{content.home.short_description}</p></section>
      <section className={`portfolio-stage stage-${stagePhase}`} ref={stage} aria-label={language === "zh" ? "作品展示画布" : "Portfolio canvas"}><div className="canvas">{cards.map((card, i) => <PortfolioCard key={card.id} card={card} order={i + 1} phase={stagePhase} language={language}/>)}</div></section>
      <footer><p>{content.global.footer.copyright}</p><button type="button" className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={content.global.controls.back_to_top}><img src="/assets/arrow.svg" alt=""/></button></footer>
    </div>
    {dialogOption && <div className="modal-backdrop"><button className="modal-dismiss" type="button" onClick={() => setDialogOption(null)} aria-label={content.global.controls.close_dialog}/><section className="qr-modal" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title"><button className="modal-close" onClick={() => setDialogOption(null)} aria-label={content.global.controls.close_dialog}>×</button>{dialogOption.dialog_image ? <img className="qr-image" src={dialogOption.dialog_image} alt={dialogOption.dialog_title}/> : <div className="qr-missing" aria-hidden="true">QR</div>}<h2 id="contact-dialog-title">{dialogOption.dialog_title}</h2><p>{dialogOption.dialog_body}</p></section></div>}
  </main>;
}
