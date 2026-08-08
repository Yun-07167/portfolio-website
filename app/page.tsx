"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Language = "zh" | "en";
type NavId = "home" | "projects" | "connect" | "resume" | "about";
type Card = { id: string; src: string; alt: string; x: number; y: number; w: number; rot: number; decorative?: boolean };

const copy = {
  zh: {
    projects: "我的作品", connect: "联系我", resume: "查看简历", about: "关于我",
    greeting: "你好，我叫杨天韵",
    intro: "我是一名游戏交互设计师。拥有完整的独立游戏落地UI和交互设计经验，同时也拥有本地化游戏运营视角。具备出海手游UI设计经验，熟悉Figma和Unity UGUI.",
    email: "邮件联系", wechat: "微信", backTop: "返回顶部", switchLanguage: "切换至英文", switchTheme: "切换明暗模式",
  },
  en: {
    projects: "Projects", connect: "Connect", resume: "Resume", about: "About me",
    greeting: "Hi, I’m Tianyun Yang",
    intro: "I’m a game interaction designer with end-to-end UI and interaction experience, a localization operations perspective, and hands-on knowledge of Figma and Unity UGUI.",
    email: "Email", wechat: "WeChat", backTop: "Back to top", switchLanguage: "切换至中文", switchTheme: "Toggle light or dark mode",
  },
} as const;

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

function Header({ language, setLanguage, theme, setTheme, onWechat }: { language: Language; setLanguage: (v: Language) => void; theme: "light" | "dark"; setTheme: (v: "light" | "dark") => void; onWechat: () => void }) {
  const [hovered, setHovered] = useState<NavId | null>(null);
  const t = copy[language];
  const nav = [
    { id: "projects" as const, label: t.projects, href: "/work", art: "/assets/projects-illustration.svg" },
    { id: "connect" as const, label: t.connect, href: "#contact", art: "/assets/icon-wechat.svg" },
    { id: "resume" as const, label: t.resume, href: "/resume", art: "/assets/resume-illustration.svg" },
    { id: "about" as const, label: t.about, href: "/about", art: "/assets/about-illustration.svg" },
  ];
  return <header className={`site-header state-${hovered ?? "default"}`} onMouseLeave={() => setHovered(null)}>
    <nav className="nav-scene" aria-label="主导航">
      <div className="home-zone" onMouseEnter={() => setHovered("home")}>
        <a className="home-link" href="/" aria-current="page" aria-label="首页">
          <span className="home-default"><img src="/assets/home-face.svg" alt=""/></span>
          <span className="home-hover"><img src="/assets/home-hover.png" alt=""/></span>
        </a>
      </div>
      {nav.map(item => <div className={`nav-zone nav-${item.id}`} key={item.id} onMouseEnter={() => setHovered(item.id)}>
        <div className="nav-reveal">
          <img className="nav-illustration" src={item.art} alt=""/>
          {item.id === "connect" && <div className="social-actions">
            <button type="button" onClick={onWechat}><img className="social-icon social-icon-wechat" src="/assets/icon-wechat.svg" alt=""/><span>{t.wechat}</span></button>
            <a href="mailto:hello@example.com"><img className="social-icon social-icon-email" src="/assets/icon-email.svg" alt=""/><span>{t.email}</span></a>
          </div>}
        </div>
        <a className="nav-label" href={item.href} onFocus={() => setHovered(item.id)} onClick={item.id === "connect" ? e => e.preventDefault() : undefined}><span className="drawn-ring">{hovered === item.id && <img src={item.id === "about" ? "/assets/connects-circle.svg" : "/assets/projects-circle.svg"} alt=""/>}</span>{item.label}<img className="drawn-underline" src="/assets/projects-underline.svg" alt=""/></a>
      </div>)}
    </nav>
    <div className="mode-switcher">
      <button type="button" onClick={() => setLanguage(language === "zh" ? "en" : "zh")} aria-label={t.switchLanguage}><img src="/assets/icon-language.svg" alt=""/></button>
      <button type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={t.switchTheme}><img src="/assets/icon-light.svg" alt=""/></button>
    </div>
  </header>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [qrOpen, setQrOpen] = useState(false);
  const stage = useRef<HTMLElement>(null);
  const t = copy[language];
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
      <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} onWechat={() => setQrOpen(true)}/>
      <section className="hero" aria-labelledby="home-title"><div className="hero-title-row"><img className="avatar" src="/assets/avatar.png" alt="杨天韵的头像"/><h1 id="home-title">{t.greeting}</h1></div><p>{t.intro}</p></section>
      <section className="portfolio-stage" ref={stage} aria-label="可拖拽作品画布"><div className="canvas">{cards.map((card, i) => <DraggableCard key={card.id} card={card} order={i + 1}/>)}</div></section>
      <footer><p>© 杨天韵 2026</p><button type="button" className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={t.backTop}><img src="/assets/arrow.svg" alt=""/></button></footer>
    </div>
    {qrOpen && <div className="modal-backdrop" onMouseDown={() => setQrOpen(false)}><section className="qr-modal" role="dialog" aria-modal="true" onMouseDown={e => e.stopPropagation()}><button className="modal-close" onClick={() => setQrOpen(false)}>×</button><div className="qr-placeholder"><span>YY</span></div><h2>微信二维码</h2><p>请在这里替换正式二维码</p></section></div>}
  </main>;
}
