"use client";

import { useMemo, useState } from "react";
import { siteContent } from "../generated-content";
import SiteHeader, { type ContactOption } from "../components/SiteHeader";
import useSitePreferences from "../components/useSitePreferences";

export default function NotesPage() {
  const { language, setLanguage, theme, setTheme } = useSitePreferences();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [dialogOption, setDialogOption] = useState<ContactOption | null>(null);

  const content=siteContent[language]; const notes=content.notes;
  const years=useMemo(()=>[...new Set(notes.entries.map(note=>note.year))].sort((a,b)=>b-a),[notes.entries]);
  const tags=useMemo(()=>[...new Set(notes.entries.flatMap(note=>note.tags))],[notes.entries]);
  const entries=notes.entries.filter(note=>(selectedYear===null||note.year===selectedYear)&&(selectedTag===null||note.tags.some(tag=>tag===selectedTag)));
  const hasFilters=selectedYear!==null||selectedTag!==null;

  return <main className="subpage-shell notes-shell">
    <SiteHeader language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} content={content} onDialog={setDialogOption} activePage="notes"/>
    <div className="notes-page"><h1>{notes.page_title}</h1><div className="notes-layout">
      <section className="notes-list" aria-live="polite">
        {entries.map(note=><article className="note-card" key={note.slug}><div className="note-card-title"><h2>{note.title}</h2></div><div className="note-card-meta"><time dateTime={note.published_at}>{note.published_at.replaceAll("-",".")}</time><ul>{note.tags.map(tag=><li key={tag}>{notes.tag_labels[tag]}</li>)}</ul></div></article>)}
        {entries.length===0&&<div className="notes-empty"><p>{notes.filters.empty}</p>{hasFilters&&<button type="button" onClick={()=>{setSelectedYear(null);setSelectedTag(null);}}>{notes.filters.clear}</button>}</div>}
      </section>
      <aside className="works-filters notes-filters" aria-label={language==="zh"?"笔记筛选":"Note filters"}>
        <section className="filter-group filter-years"><h2># {notes.filters.year}</h2><div className="year-options"><button className={selectedYear===null?"is-active":""} type="button" onClick={()=>setSelectedYear(null)} aria-pressed={selectedYear===null}>{notes.filters.all}</button>{years.map(year=><button className={selectedYear===year?"is-active":""} type="button" key={year} onClick={()=>setSelectedYear(current=>current===year?null:year)} aria-pressed={selectedYear===year}>{year}</button>)}</div></section>
        <section className="filter-group filter-tags"><h2># {notes.filters.tag}</h2><div className="tag-options"><button className={selectedTag===null?"is-active":""} type="button" onClick={()=>setSelectedTag(null)} aria-pressed={selectedTag===null}>{notes.filters.all}</button>{tags.map(tag=><button className={selectedTag===tag?"is-active":""} type="button" key={tag} onClick={()=>setSelectedTag(current=>current===tag?null:tag)} aria-pressed={selectedTag===tag}>{notes.tag_labels[tag]}</button>)}</div></section>
        {hasFilters&&<button className="clear-filters" type="button" onClick={()=>{setSelectedYear(null);setSelectedTag(null);}}>{notes.filters.clear}</button>}
      </aside>
    </div></div>
    <footer className="subpage-footer"><p>{content.global.footer.copyright}</p><button type="button" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label={content.global.controls.back_to_top}><img src="/assets/arrow.svg" alt=""/></button></footer>
    {dialogOption&&<div className="modal-backdrop"><button className="modal-dismiss" type="button" onClick={()=>setDialogOption(null)} aria-label={content.global.controls.close_dialog}/><section className="qr-modal" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title"><button className="modal-close" onClick={()=>setDialogOption(null)} aria-label={content.global.controls.close_dialog}>×</button>{dialogOption.dialog_image?<img className="qr-image" src={dialogOption.dialog_image} alt={dialogOption.dialog_title}/>:<div className="qr-missing" aria-hidden="true">QR</div>}<h2 id="contact-dialog-title">{dialogOption.dialog_title}</h2><p>{dialogOption.dialog_body}</p></section></div>}
  </main>;
}
