"use client";

import { useEffect, useState } from "react";

type Props = {
  src:string;
  darkSrc?:string;
  alt:string;
  caption?:string;
  layout?:string;
};

function labels() {
  const zh=typeof document!=="undefined"&&document.documentElement.lang.startsWith("zh");
  return zh
    ? {open:"放大查看绘图",close:"关闭",zoomIn:"放大",zoomOut:"缩小",reset:"复位"}
    : {open:"Open enlarged drawing",close:"Close",zoomIn:"Zoom in",zoomOut:"Zoom out",reset:"Reset"};
}

export default function DrawingViewer({src,darkSrc,alt,caption,layout="wide"}:Props) {
  const [open,setOpen]=useState(false);
  const [scale,setScale]=useState(1);
  const copy=labels();

  useEffect(()=>{
    if(!open)return;
    const onKeyDown=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false);};
    document.addEventListener("keydown",onKeyDown);
    return ()=>document.removeEventListener("keydown",onKeyDown);
  },[open]);

  const artwork=<span className="drawing-picture">
    <img className="drawing-light" src={src} alt={alt} loading="lazy" decoding="async"/>
    {darkSrc&&<img className="drawing-dark" src={darkSrc} alt="" loading="lazy" decoding="async"/>}
  </span>;

  return <figure className={`content-drawing media-${layout}`}>
    <button className="drawing-preview" type="button" onClick={()=>{setScale(1);setOpen(true);}} aria-label={copy.open}>{artwork}</button>
    {caption&&<figcaption>{caption}</figcaption>}
    {open&&<div className="drawing-lightbox" role="dialog" aria-modal="true" aria-label={copy.open}>
      <button className="drawing-lightbox-dismiss" type="button" onClick={()=>setOpen(false)} aria-label={copy.close}/>
      <div className="drawing-toolbar">
        <button type="button" onClick={()=>setScale(value=>Math.max(.5,value-.25))} aria-label={copy.zoomOut}>−</button>
        <output aria-live="polite">{Math.round(scale*100)}%</output>
        <button type="button" onClick={()=>setScale(value=>Math.min(3,value+.25))} aria-label={copy.zoomIn}>＋</button>
        <button type="button" onClick={()=>setScale(1)}>{copy.reset}</button>
        <button type="button" onClick={()=>setOpen(false)}>{copy.close}</button>
      </div>
      <div className="drawing-lightbox-viewport"><div className="drawing-lightbox-canvas" style={{transform:`scale(${scale})`}}>{artwork}</div></div>
    </div>}
  </figure>;
}
