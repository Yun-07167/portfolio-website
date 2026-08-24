import type { Metadata } from "next";
import DetailPage from "../../components/DetailPage";
import { siteContent } from "../../generated-content";

function description(body:string) {
  return body.replace(/^#{1,6}\s+/gm,"").replace(/!\[[^\]]*\]\([^)]+\)/g,"").replace(/:::[\s\S]*?:::/g,"").replace(/\s+/g," ").trim().slice(0,160);
}

export function generateStaticParams() {
  return [...new Set([
    ...siteContent.zh.notes.entries.map(note=>note.slug),
    ...siteContent.en.notes.entries.map(note=>note.slug),
  ])].map(slug=>({ slug }));
}

export async function generateMetadata({ params }:{ params:Promise<{slug:string}> }):Promise<Metadata> {
  const { slug }=await params;
  const note=siteContent.zh.notes.entries.find(entry=>entry.slug===slug)
    ?? siteContent.en.notes.entries.find(entry=>entry.slug===slug);
  if(!note)return { title:"笔记不存在", description:"未找到该笔记。", openGraph:{title:"笔记不存在",description:"未找到该笔记。",images:[]}, twitter:{title:"笔记不存在",description:"未找到该笔记。",images:[]} };
  const summary=description(note.body);
  return {
    title:note.title,
    description:summary,
    openGraph:{title:note.title,description:summary,type:"article",images:[]},
    twitter:{card:"summary",title:note.title,description:summary,images:[]},
  };
}

export default async function Page({ params }:{ params:Promise<{slug:string}> }) {
  const { slug }=await params;
  return <DetailPage kind="note" slug={slug}/>;
}
