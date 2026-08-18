import type { Metadata } from "next";
import { headers } from "next/headers";
import DetailPage from "../../components/DetailPage";
import { siteContent } from "../../generated-content";

export function generateStaticParams() {
  return siteContent.zh.work.projects.map(project=>({ slug:project.slug }));
}

export async function generateMetadata({ params }:{ params:Promise<{slug:string}> }):Promise<Metadata> {
  const { slug }=await params;
  const project=siteContent.zh.work.projects.find(entry=>entry.slug===slug);
  if(!project)return { title:"项目不存在", description:"未找到该项目。", openGraph:{title:"项目不存在",description:"未找到该项目。",images:[]}, twitter:{title:"项目不存在",description:"未找到该项目。",images:[]} };
  const requestHeaders=await headers();
  const host=requestHeaders.get("host")??"localhost:3000";
  const protocol=host.includes("localhost")?"http":"https";
  const image=new URL(project.cover,protocol+"://"+host).toString();
  return {
    title:project.title,
    description:project.summary,
    openGraph:{title:project.title,description:project.summary,type:"article",images:[{url:image}]},
    twitter:{card:"summary_large_image",title:project.title,description:project.summary,images:[image]},
  };
}

export default async function Page({ params }:{ params:Promise<{slug:string}> }) {
  const { slug }=await params;
  return <DetailPage kind="project" slug={slug}/>;
}
