"use client";

import { useEffect, useRef, useState } from "react";
import type { ActivePage, ContactOption, Language } from "./SiteHeader";

type NavigationContent = {
  navigation: {
    works: string;
    notes: string;
    contact: string;
    resume: string;
    about: string;
  };
  controls: { home_label: string; close_dialog: string };
  contact_options: readonly ContactOption[];
};

export default function MobileNavigation({ language, content, activePage, onDialog, controlsId }: { language: Language; content: NavigationContent; activePage: ActivePage; onDialog: (option: ContactOption) => void; controlsId: string }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);
  const closeLabel = language === "zh" ? "关闭导航菜单" : "Close navigation menu";
  const openLabel = language === "zh" ? "打开导航菜单" : "Open navigation menu";
  const navItems = [
    { id: "home" as const, label: content.controls.home_label, href: "/" },
    { id: "projects" as const, label: content.navigation.works, href: "/work" },
    { id: "notes" as const, label: content.navigation.notes, href: "/notes" },
    { id: "resume" as const, label: content.navigation.resume, href: "/resume" },
    { id: "about" as const, label: content.navigation.about, href: "/about" },
  ];

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) toggleRef.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return <div className="mobile-nav-shell">
    <button ref={toggleRef} className="mobile-menu-toggle" type="button" aria-expanded={open} aria-controls={controlsId} aria-label={open ? closeLabel : openLabel} onClick={() => setOpen(current => !current)}>
      <span/><span/><span/>
    </button>
    <div className={`mobile-nav-layer${open ? " is-open" : ""}`} aria-hidden={!open}>
      <button className="mobile-nav-backdrop" type="button" tabIndex={open ? 0 : -1} aria-label={closeLabel} onClick={close}/>
      <div ref={drawerRef} className="mobile-nav-drawer">
        <nav id={controlsId} aria-label={language === "zh" ? "移动端主导航" : "Mobile primary navigation"}>
          {navItems.map(item => {
            const isActive = activePage === item.id;
            return <a key={item.id} className={isActive ? "is-active" : undefined} href={item.href} aria-current={isActive ? "page" : undefined} tabIndex={open ? 0 : -1} onClick={close}>{item.label}</a>;
          })}
          <div className="mobile-contact-group">
            <p>{content.navigation.contact}</p>
            {content.contact_options.map(option => option.action === "dialog"
              ? <button type="button" key={option.id} tabIndex={open ? 0 : -1} onClick={() => { close(); onDialog(option); }}><img src={option.icon} alt=""/>{option.label}</button>
              : <a key={option.id} href={option.href ?? undefined} tabIndex={open ? 0 : -1} onClick={close}><img src={option.icon} alt=""/>{option.label}</a>)}
          </div>
        </nav>
      </div>
    </div>
  </div>;
}
