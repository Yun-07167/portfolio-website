"use client";

import { useEffect, useId, useState } from "react";

function labels() {
  const zh=document.documentElement.lang.startsWith("zh");
  return zh
    ? { open:"放大查看流程图", close:"关闭", zoomIn:"放大", zoomOut:"缩小", reset:"复位", loading:"正在绘制流程图…", error:"流程图暂时无法显示" }
    : { open:"Open enlarged diagram", close:"Close", zoomIn:"Zoom in", zoomOut:"Zoom out", reset:"Reset", loading:"Rendering diagram…", error:"The diagram could not be rendered" };
}

export default function MermaidDiagram({ code }:{ code:string }) {
  const reactId=useId().replace(/:/g,"");
  const [svg,setSvg]=useState("");
  const [error,setError]=useState(false);
  const [open,setOpen]=useState(false);
  const [scale,setScale]=useState(1);
  const [themeRevision,setThemeRevision]=useState(0);
  const copy=typeof document==="undefined"?{open:"Open enlarged diagram",close:"Close",zoomIn:"Zoom in",zoomOut:"Zoom out",reset:"Reset",loading:"Rendering diagram…",error:"The diagram could not be rendered"}:labels();

  useEffect(()=>{
    const observer=new MutationObserver(()=>setThemeRevision(value=>value+1));
    observer.observe(document.documentElement,{attributes:true,attributeFilter:["data-theme","lang"]});
    return ()=>observer.disconnect();
  },[]);

  useEffect(()=>{
    let cancelled=false;
    void import("mermaid").then(async ({default:mermaid})=>{
      const styles=getComputedStyle(document.documentElement);
      const color=(name:string)=>styles.getPropertyValue(name).trim();
      mermaid.initialize({
        startOnLoad:false,
        securityLevel:"strict",
        theme:"base",
        flowchart:{htmlLabels:false,curve:"basis"},
        themeVariables:{
          background:"transparent",
          primaryColor:color("--primary-50"),
          primaryBorderColor:color("--neutral-700"),
          primaryTextColor:color("--neutral-900"),
          lineColor:color("--neutral-700"),
          secondaryColor:color("--surface"),
          tertiaryColor:color("--primary-100"),
          fontFamily:color("--font-ui")||"sans-serif",
        },
      });
      try{
        const result=await mermaid.render(`mermaid-${reactId}-${themeRevision}`,code);
        if(!cancelled){setError(false);setSvg(result.svg);}
      }catch{
        if(!cancelled)setError(true);
      }
    }).catch(()=>{if(!cancelled)setError(true);});
    return ()=>{cancelled=true;};
  },[code,reactId,themeRevision]);

  useEffect(()=>{
    if(!open)return;
    const onKeyDown=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false);};
    document.addEventListener("keydown",onKeyDown);
    return ()=>document.removeEventListener("keydown",onKeyDown);
  },[open]);

  const diagram=error
    ? <div className="mermaid-error"><p>{copy.error}</p><pre><code>{code}</code></pre></div>
    : svg
      ? <div className="mermaid-svg" dangerouslySetInnerHTML={{__html:svg}}/>
      : <p className="mermaid-loading">{copy.loading}</p>;

  return <figure className="content-mermaid">
    <button className="mermaid-preview" type="button" onClick={()=>{setScale(1);setOpen(true);}} aria-label={copy.open} disabled={!svg}>{diagram}</button>
    {open&&<div className="mermaid-lightbox" role="dialog" aria-modal="true" aria-label={copy.open}>
      <button className="mermaid-lightbox-dismiss" type="button" onClick={()=>setOpen(false)} aria-label={copy.close}/>
      <div className="mermaid-toolbar">
        <button type="button" onClick={()=>setScale(value=>Math.max(.5,value-.25))} aria-label={copy.zoomOut}>−</button>
        <output aria-live="polite">{Math.round(scale*100)}%</output>
        <button type="button" onClick={()=>setScale(value=>Math.min(2.5,value+.25))} aria-label={copy.zoomIn}>＋</button>
        <button type="button" onClick={()=>setScale(1)}>{copy.reset}</button>
        <button type="button" onClick={()=>setOpen(false)}>{copy.close}</button>
      </div>
      <div className="mermaid-lightbox-viewport"><div className="mermaid-lightbox-canvas" style={{transform:`scale(${scale})`}} dangerouslySetInnerHTML={{__html:svg}}/></div>
    </div>}
  </figure>;
}
