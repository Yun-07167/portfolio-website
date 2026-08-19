"use client";

import { useEffect, useState } from "react";

type Props = {
  src:string;
  alt:string;
  caption?:string;
  layout?:string;
};

function labels() {
  const zh=typeof document!=="undefined"&&document.documentElement.lang.startsWith("zh");
  return zh
    ? {open:"放大查看图片",close:"关闭",zoomIn:"放大",zoomOut:"缩小",reset:"复位"}
    : {open:"Open enlarged image",close:"Close",zoomIn:"Zoom in",zoomOut:"Zoom out",reset:"Reset"};
}

export default function ImageViewer({src,alt,caption,layout="standard"}:Props) {
  const [open,setOpen]=useState(false);
  const [scale,setScale]=useState(1);
  const copy=labels();

  useEffect(()=>{
    if(!open)return;
    const previousOverflow=document.body.style.overflow;
    const onKeyDown=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false);};
    document.body.style.overflow="hidden";
    document.addEventListener("keydown",onKeyDown);
    return ()=>{
      document.body.style.overflow=previousOverflow;
      document.removeEventListener("keydown",onKeyDown);
    };
  },[open]);

  return <figure className={`content-media content-image media-${layout}`}>
    <button className="content-image-preview" type="button" onClick={()=>{setScale(1);setOpen(true);}} aria-label={`${copy.open}：${alt}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async"/>
    </button>
    {caption&&<figcaption>{caption}</figcaption>}
    {open&&<div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${copy.open}：${alt}`}>
      <button className="image-lightbox-dismiss" type="button" onClick={()=>setOpen(false)} aria-label={copy.close}/>
      <div className="image-toolbar">
        <button type="button" onClick={()=>setScale(value=>Math.max(.5,value-.25))} aria-label={copy.zoomOut}>−</button>
        <output aria-live="polite">{Math.round(scale*100)}%</output>
        <button type="button" onClick={()=>setScale(value=>Math.min(3,value+.25))} aria-label={copy.zoomIn}>＋</button>
        <button type="button" onClick={()=>setScale(1)}>{copy.reset}</button>
        <button type="button" onClick={()=>setOpen(false)}>{copy.close}</button>
      </div>
      <div className="image-lightbox-viewport">
        <div className="image-lightbox-canvas" style={{transform:`scale(${scale})`}}>
          <img src={src} alt={alt}/>
        </div>
      </div>
    </div>}
  </figure>;
}
