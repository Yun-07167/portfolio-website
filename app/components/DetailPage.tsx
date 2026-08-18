"use client";

import { useState } from "react";
import { siteContent } from "../generated-content";
import SiteHeader, { type ContactOption } from "./SiteHeader";
import useSitePreferences from "./useSitePreferences";
import MarkdownContent from "./MarkdownContent";

type ProjectItem={slug:string;title:string;summary:string;cover:string;cover_alt:string;year:number;tags:readonly string[];body:string};
type NoteItem={slug:string;title:string;published_at:string;tags:readonly string[];body:string};

export default function DetailPage({ kind, slug }:{ kind:"project"|"note"; slug:string }) {
  const { language,setLanguage,theme,setTheme }=useSitePreferences();
  const [dialogOption,setDialogOption]=useState<ContactOption|null>(null);
  const content=siteContent[language];
  const activePage=kind==="project"?"projects":"notes";
  const project=kind==="project"?content.work.projects.find(entry=>entry.slug===slug) as ProjectItem|undefined:undefined;
  const note=kind==="note"?content.notes.entries.find(entry=>entry.slug===slug) as NoteItem|undefined:undefined;
  const item=project??note;
  if(!item)return <main className="subpage-shell detail-shell"><SiteHeader language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} content={content} onDialog={setDialogOption} activePage={activePage}/><section className="detail-page"><h1>{language==="zh"?"内容不存在":"Content not found"}</h1></section></main>;
  const isProject=Boolean(project);
  const labels=(isProject?content.work.tag_labels:content.notes.tag_labels) as Record<string,string>;
  const date=project?String(project.year):(note?.published_at??"");
  const body=item.body||(project?.summary??"");
  return <main className="subpage-shell detail-shell">
    <SiteHeader language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} content={content} onDialog={setDialogOption} activePage={activePage}/>
    <article className={`detail-page detail-${kind}`}>
      <a className="detail-back" href={isProject?"/work":"/notes"}>{language==="zh"?"← 返回列表":"← Back to list"}</a>
      <header className="detail-hero"><h1>{item.title}</h1><div className="detail-meta"><time>{date}</time><ul>{item.tags.map(tag=><li key={tag}>{labels[tag]}</li>)}</ul></div>{project&&<p>{project.summary}</p>}</header>
      {project&&<figure className="detail-cover"><img src={project.cover} alt={project.cover_alt} decoding="async"/></figure>}
      <MarkdownContent markdown={body}/>
    </article>
    <footer className="subpage-footer"><p>{content.global.footer.copyright}</p><button type="button" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label={content.global.controls.back_to_top}><img src="/assets/arrow.svg" alt=""/></button></footer>
    {dialogOption&&<div className="modal-backdrop"><button className="modal-dismiss" type="button" onClick={()=>setDialogOption(null)} aria-label={content.global.controls.close_dialog}/><section className="qr-modal" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title"><button className="modal-close" onClick={()=>setDialogOption(null)} aria-label={content.global.controls.close_dialog}>×</button>{dialogOption.dialog_image?<img className="qr-image" src={dialogOption.dialog_image} alt={dialogOption.dialog_title??""}/>:<div className="qr-missing" aria-hidden="true">QR</div>}<h2 id="contact-dialog-title">{dialogOption.dialog_title}</h2><p>{dialogOption.dialog_body}</p></section></div>}
  </main>;
}
