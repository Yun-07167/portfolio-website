"use client";

import { useMemo, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { siteContent } from "../generated-content";
import SiteHeader, { type ContactOption } from "../components/SiteHeader";
import useSitePreferences from "../components/useSitePreferences";

function ProjectCover({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return <div className={`work-card-media is-${status}`} aria-busy={status === "loading"}>
    <div className="work-card-placeholder" aria-hidden="true">
      <img src="/assets/projects-illustration.svg" alt=""/>
    </div>
    <img
      className="work-card-cover"
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      onLoad={() => setStatus("loaded")}
      onError={() => setStatus("error")}
    />
  </div>;
}

function TiltCard({ children, href }: { children: ReactNode; href:string }) {
  const cardRef = useRef<HTMLElement>(null);
  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width - .5) * 2;
    const py = ((event.clientY - rect.top) / rect.height - .5) * 2;
    gsap.to(cardRef.current, { "--work-tilt-x": `${-py * 3.5}deg`, "--work-tilt-y": `${px * 4.5}deg`, duration: .38, ease: "power3.out", overwrite: "auto" });
  };
  const resetTilt = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { "--work-tilt-x": "0deg", "--work-tilt-y": "0deg", duration: .62, ease: "power3.out", overwrite: "auto" });
  };
  return <article ref={cardRef} className="work-card" onPointerMove={onPointerMove} onPointerLeave={resetTilt} onBlur={resetTilt}><a className="work-card-link" href={href}>{children}</a></article>;
}

export default function WorkPage() {
  const { language, setLanguage, theme, setTheme } = useSitePreferences();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [dialogOption, setDialogOption] = useState<ContactOption | null>(null);

  const content = siteContent[language];
  const work = content.work;
  const years = useMemo(() => [...new Set(work.projects.map(project => project.year))].sort((a, b) => b - a), [work.projects]);
  const tags = useMemo(() => [...new Set(work.projects.flatMap(project => project.tags))], [work.projects]);
  const projects = work.projects.filter(project =>
    (selectedYear === null || project.year === selectedYear) &&
    (selectedTag === null || project.tags.some(tag => tag === selectedTag))
  );
  const hasFilters = selectedYear !== null || selectedTag !== null;

  return <main className="subpage-shell work-shell">
    <SiteHeader language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} content={content} onDialog={setDialogOption} activePage="projects"/>
    <div className="works-page">
      <h1>{work.title}</h1>
      <div className="works-layout">
        <section className="works-list" aria-live="polite">
          {projects.map((project, index) => <TiltCard key={project.slug} href={"/work/"+project.slug}>
            <ProjectCover src={project.cover} alt={project.cover_alt} priority={index === 0}/>
            <div className="work-card-copy">
              <h2>{project.title}</h2>
              <div className="work-card-meta"><time>{project.year}</time><ul>{project.tags.map(tag => <li key={tag}>{work.tag_labels[tag]}</li>)}</ul></div>
              <p>{project.summary}</p>
            </div>
          </TiltCard>)}
          {projects.length === 0 && <div className="works-empty"><p>{work.filters.empty}</p><button type="button" onClick={() => { setSelectedYear(null); setSelectedTag(null); }}>{work.filters.clear}</button></div>}
        </section>
        <aside className="works-filters" aria-label={language === "zh" ? "项目筛选" : "Project filters"}>
          <section className="filter-group filter-years">
            <h2># {work.filters.year}</h2>
            <div className="year-options">
              <button className={selectedYear === null ? "is-active" : ""} type="button" onClick={() => setSelectedYear(null)} aria-pressed={selectedYear === null}>{work.filters.all}</button>
              {years.map(year => <button className={selectedYear === year ? "is-active" : ""} type="button" key={year} onClick={() => setSelectedYear(current => current === year ? null : year)} aria-pressed={selectedYear === year}>{year}</button>)}
            </div>
          </section>
          <section className="filter-group filter-tags">
            <h2># {work.filters.tag}</h2>
            <div className="tag-options">
              <button className={selectedTag === null ? "is-active" : ""} type="button" onClick={() => setSelectedTag(null)} aria-pressed={selectedTag === null}>{work.filters.all}</button>
              {tags.map(tag => <button className={selectedTag === tag ? "is-active" : ""} type="button" key={tag} onClick={() => setSelectedTag(current => current === tag ? null : tag)} aria-pressed={selectedTag === tag}>{work.tag_labels[tag]}</button>)}
            </div>
          </section>
          {hasFilters && <button className="clear-filters" type="button" onClick={() => { setSelectedYear(null); setSelectedTag(null); }}>{work.filters.clear}</button>}
        </aside>
      </div>
    </div>
    <footer className="subpage-footer"><p>{content.global.footer.copyright}</p><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={content.global.controls.back_to_top}><img src="/assets/arrow.svg" alt=""/></button></footer>
    {dialogOption && <div className="modal-backdrop"><button className="modal-dismiss" type="button" onClick={() => setDialogOption(null)} aria-label={content.global.controls.close_dialog}/><section className="qr-modal" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title"><button className="modal-close" onClick={() => setDialogOption(null)} aria-label={content.global.controls.close_dialog}>×</button>{dialogOption.dialog_image ? <img className="qr-image" src={dialogOption.dialog_image} alt={dialogOption.dialog_title}/> : <div className="qr-missing" aria-hidden="true">QR</div>}<h2 id="contact-dialog-title">{dialogOption.dialog_title}</h2><p>{dialogOption.dialog_body}</p></section></div>}
  </main>;
}
