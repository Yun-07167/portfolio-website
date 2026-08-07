"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Language = "zh" | "en";
type HoveredItem = "home" | "projects" | "connect" | "resume" | "about" | null;
type CardData = { id: string; src: string; alt: string; x: number; y: number; w: number; rot: number; decorative?: boolean };

const copy = {
  zh: {
    projects: "我的作品",
    connect: "联系我",
    resume: "查看简历",
    about: "关于我",
    greeting: "你好，我叫杨天韵",
    intro:
      "我是一名游戏交互设计师。拥有完整的独立游戏落地 UI 和交互设计经验，同时也拥有本地化游戏运营视角。具备出海手游 UI 设计经验，熟悉 Figma 和 Unity UGUI。",
    dragHint: "向下滚动，让作品展开。然后试着拖动它们。",
    email: "邮件联系",
    wechat: "微信",
    qr: "微信二维码占位",
    qrHint: "后续可替换为正式二维码",
    close: "关闭",
    backTop: "返回顶部",
    switchLanguage: "切换至英文",
    switchTheme: "切换明暗模式",
  },
  en: {
    projects: "Projects",
    connect: "Connect",
    resume: "Resume",
    about: "About me",
    greeting: "Hi, I’m Tianyun Yang",
    intro:
      "I’m a game interaction designer with end-to-end UI and interaction experience, a localization operations perspective, and hands-on knowledge of Figma and Unity UGUI.",
    dragHint: "Scroll to unfold the work, then drag the cards around.",
    email: "Email me",
    wechat: "WeChat",
    qr: "WeChat QR placeholder",
    qrHint: "Replace with the final QR code later",
    close: "Close",
    backTop: "Back to top",
    switchLanguage: "切换至中文",
    switchTheme: "Toggle light or dark mode",
  },
} as const;

const cards: CardData[] = [
  { id: "map", src: "/assets/raw/raw-01.png", alt: "地图界面重构设计案例", x: 5, y: 2, w: 47, rot: -1.5 },
  { id: "art", src: "/assets/raw/raw-05.png", alt: "游戏美术部分作品展示", x: 50, y: 17, w: 45, rot: 1.3 },
  { id: "skill", src: "/assets/raw/raw-13.png", alt: "游戏技能界面设计", x: 12, y: 36, w: 38, rot: 0.8 },
  { id: "illustration", src: "/assets/raw/raw-11.png", alt: "游戏叙事插画", x: 54, y: 43, w: 36, rot: -0.7 },
  { id: "wireframe", src: "/assets/raw/raw-15.png", alt: "拆解与背包界面线框图", x: 12, y: 66, w: 37, rot: -0.3 },
  { id: "icons", src: "/assets/raw/raw-06.png", alt: "角色头像图标设计", x: 54, y: 69, w: 36, rot: 0.4 },
  { id: "shovel", src: "/assets/raw/raw-16.png", alt: "铲子装饰图标", x: 44, y: 5, w: 10, rot: 8, decorative: true },
  { id: "tools", src: "/assets/raw/raw-04.png", alt: "工具装饰图标", x: 41, y: 84, w: 13, rot: -5, decorative: true },
];

function DraggableCard({ card, order, bringToFront }: {
  card: CardData;
  order: number;
  bringToFront: (id: string) => number;
}) {
  const node = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || !node.current) return;
    const element = node.current;
    const parent = element.parentElement;
    if (!parent) return;
    element.setPointerCapture(event.pointerId);
    element.dataset.dragging = "true";
    element.style.zIndex = String(bringToFront(card.id));
    const startPointer = { x: event.clientX, y: event.clientY };
    const startPosition = { ...position.current };

    const move = (moveEvent: PointerEvent) => {
      const parentRect = parent.getBoundingClientRect();
      const cardRect = element.getBoundingClientRect();
      const minVisible = 30;
      const nextX = startPosition.x + moveEvent.clientX - startPointer.x;
      const nextY = startPosition.y + moveEvent.clientY - startPointer.y;
      const minX = -cardRect.width + minVisible;
      const maxX = parentRect.width - element.offsetLeft - minVisible;
      const minY = -cardRect.height + minVisible;
      const maxY = parentRect.height - element.offsetTop - minVisible;
      position.current = {
        x: Math.max(minX, Math.min(maxX, nextX)),
        y: Math.max(minY, Math.min(maxY, nextY)),
      };
      element.style.setProperty("--drag-x", `${position.current.x}px`);
      element.style.setProperty("--drag-y", `${position.current.y}px`);
    };

    const stop = () => {
      element.dataset.dragging = "false";
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop, { once: true });
    window.addEventListener("pointercancel", stop, { once: true });
  };

  const style = {
    "--x": `${card.x}%`,
    "--y": `${card.y}%`,
    "--w": `${card.w}%`,
    "--rot": `${card.rot}deg`,
    "--order": order,
    "--drag-x": "0px",
    "--drag-y": "0px",
  } as React.CSSProperties;

  return (
    <div className="card-scroll-wrapper" data-card={card.id} style={style}>
      <div
        ref={node}
        className={`draggable-card${card.decorative ? " decorative-card" : ""}`}
        onPointerDown={onPointerDown}
        role="img"
        aria-label={card.alt}
        tabIndex={card.decorative ? -1 : 0}
      >
        <img src={card.src} alt={card.decorative ? "" : card.alt} draggable={false} />
      </div>
    </div>
  );
}

function Header({ language, setLanguage, theme, setTheme, onWechat }: {
  language: Language;
  setLanguage: (value: Language) => void;
  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
  onWechat: () => void;
}) {
  const [hovered, setHovered] = useState<HoveredItem>(null);
  const t = copy[language];
  const nav = [
    { id: "projects" as const, label: t.projects, href: "/work", image: "/assets/projects-illustration.svg" },
    { id: "connect" as const, label: t.connect, image: "/assets/icon-wechat.svg" },
    { id: "resume" as const, label: t.resume, href: "/resume", image: "/assets/resume-illustration.svg" },
    { id: "about" as const, label: t.about, href: "/about", image: "/assets/about-illustration.svg" },
  ];

  return (
    <header className={`site-header state-${hovered ?? "default"}`} onMouseLeave={() => setHovered(null)}>
      <nav className="nav-scene" aria-label="主导航">
        <a className="home-link" href="/" aria-current="page" onMouseEnter={() => setHovered("home")}>
          <span className="home-ring" aria-hidden="true" />
          <img src="/assets/home-face.svg" alt="首页" />
        </a>
        {nav.map((item) => (
          <div
            className={`nav-zone nav-${item.id}`}
            key={item.id}
            onMouseEnter={() => setHovered(item.id)}
          >
            <img className="nav-illustration" src={item.image} alt="" aria-hidden="true" />
            {item.id === "connect" && (
              <div className="social-actions" aria-hidden={hovered !== "connect"}>
                <button type="button" onClick={onWechat}>
                  <img src="/assets/icon-wechat.svg" alt="" />{t.wechat}
                </button>
                <a href="mailto:hello@example.com">
                  <img src="/assets/icon-email.svg" alt="" />{t.email}
                </a>
              </div>
            )}
            <a className="nav-label" href={item.href ?? "#connect"} onClick={item.id === "connect" ? (e) => e.preventDefault() : undefined}>
              <span className="drawn-ring" aria-hidden="true" />
              {item.label}
            </a>
          </div>
        ))}
      </nav>
      <div className="mode-switcher">
        <button type="button" onClick={() => setLanguage(language === "zh" ? "en" : "zh")} aria-label={t.switchLanguage}>
          <img src="/assets/icon-language.svg" alt="" />
        </button>
        <button type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={t.switchTheme}>
          <img src="/assets/icon-light.svg" alt="" />
        </button>
      </div>
    </header>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [qrOpen, setQrOpen] = useState(false);
  const stage = useRef<HTMLElement>(null);
  const zIndex = useRef(cards.length + 2);
  const t = copy[language];

  const bringToFront = useMemo(() => () => ++zIndex.current, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [theme, language]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const wrappers = gsap.utils.toArray<HTMLElement>(".card-scroll-wrapper");
      wrappers.forEach((wrapper, index) => {
        const side = index % 2 ? 1 : -1;
        gsap.fromTo(
          wrapper,
          { x: side * 140, y: -80 + index * -12, scale: 0.56, rotation: side * 5, opacity: 0.38 },
          {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stage.current,
              start: "top 62%",
              end: "top 4%",
              scrub: 0.55,
              invalidateOnRefresh: true,
            },
          },
        );
      });
      gsap.to(".site-header", {
        boxShadow: "0 10px 28px rgba(39, 38, 38, .08)",
        backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
        scrollTrigger: { trigger: stage.current, start: "top 35%", end: "top 5%", scrub: true },
      });
    }, stage);
    return () => context.revert();
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setQrOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <main>
      <div className="page-shell">
        <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} onWechat={() => setQrOpen(true)} />

        <section className="hero" aria-labelledby="home-title">
          <div className="hero-title-row">
            <img className="avatar" src="/assets/avatar.png" alt="杨天韵的头像" />
            <h1 id="home-title">{t.greeting}</h1>
          </div>
          <p>{t.intro}</p>
        </section>

        <section className="portfolio-stage" ref={stage} aria-label="可拖拽作品画布">
          <p className="drag-hint">{t.dragHint}</p>
          <div className="canvas">
            {cards.map((card, index) => (
              <DraggableCard card={card} order={index + 1} key={card.id} bringToFront={bringToFront} />
            ))}
          </div>
        </section>

        <footer>
          <p>© 杨天韵 2026</p>
          <button type="button" className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={t.backTop}>
            <img src="/assets/arrow.svg" alt="" />
          </button>
        </footer>
      </div>

      {qrOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setQrOpen(false)}>
          <section className="qr-modal" role="dialog" aria-modal="true" aria-labelledby="qr-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setQrOpen(false)} aria-label={t.close}>×</button>
            <div className="qr-placeholder" aria-hidden="true"><span>YY</span></div>
            <h2 id="qr-title">{t.qr}</h2>
            <p>{t.qrHint}</p>
          </section>
        </div>
      )}
    </main>
  );
}
