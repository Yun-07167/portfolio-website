"use client";

import { useEffect, useRef, useState } from "react";

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
  const [offset,setOffset]=useState({x:0,y:0});
  const [dragging,setDragging]=useState(false);
  const viewportRef=useRef<HTMLDivElement>(null);
  const canvasRef=useRef<HTMLDivElement>(null);
  const dragRef=useRef<{pointerId:number;startX:number;startY:number;originX:number;originY:number}|null>(null);
  const wheelRef=useRef(0);
  const copy=labels();

  const constrain=(next:{x:number;y:number},nextScale=scale)=>{
    const viewport=viewportRef.current;
    const canvas=canvasRef.current;
    if(!viewport||!canvas||nextScale<=1)return {x:0,y:0};
    const maxX=Math.max(0,(canvas.offsetWidth*nextScale-viewport.clientWidth)/2);
    const maxY=Math.max(0,(canvas.offsetHeight*nextScale-viewport.clientHeight)/2);
    return {
      x:Math.max(-maxX,Math.min(maxX,next.x)),
      y:Math.max(-maxY,Math.min(maxY,next.y)),
    };
  };

  const resetView=()=>{
    setScale(1);
    setOffset({x:0,y:0});
    setDragging(false);
    dragRef.current=null;
    wheelRef.current=0;
  };

  const close=()=>{
    setOpen(false);
    resetView();
  };

  const changeScale=(amount:number)=>{
    setScale(current=>{
      const next=Math.max(.5,Math.min(3,current+amount));
      setOffset(value=>constrain(value,next));
      return next;
    });
  };

  useEffect(()=>{
    if(!open)return;
    const previousOverflow=document.body.style.overflow;
    const onKeyDown=(event:KeyboardEvent)=>{if(event.key==="Escape")close();};
    const observer=new ResizeObserver(()=>setOffset(value=>constrain(value)));
    if(viewportRef.current)observer.observe(viewportRef.current);
    document.body.style.overflow="hidden";
    document.addEventListener("keydown",onKeyDown);
    return ()=>{
      document.body.style.overflow=previousOverflow;
      document.removeEventListener("keydown",onKeyDown);
      observer.disconnect();
    };
  },[open,scale]);

  const onPointerDown=(event:React.PointerEvent<HTMLDivElement>)=>{
    if(scale<=1||event.button!==0)return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current={pointerId:event.pointerId,startX:event.clientX,startY:event.clientY,originX:offset.x,originY:offset.y};
    setDragging(true);
  };

  const onPointerMove=(event:React.PointerEvent<HTMLDivElement>)=>{
    const drag=dragRef.current;
    if(!drag||drag.pointerId!==event.pointerId)return;
    setOffset(constrain({x:drag.originX+event.clientX-drag.startX,y:drag.originY+event.clientY-drag.startY}));
  };

  const stopDragging=(event:React.PointerEvent<HTMLDivElement>)=>{
    if(dragRef.current?.pointerId!==event.pointerId)return;
    dragRef.current=null;
    setDragging(false);
    if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const onWheel=(event:React.WheelEvent<HTMLDivElement>)=>{
    event.preventDefault();
    const unit=event.deltaMode===1?16:event.deltaMode===2?event.currentTarget.clientHeight:1;
    wheelRef.current+=event.deltaY*unit;
    if(Math.abs(wheelRef.current)<40)return;
    changeScale(wheelRef.current<0 ? .25 : -.25);
    wheelRef.current=0;
  };

  return <figure className={`content-media content-image media-${layout}`}>
    <button className="content-image-preview" type="button" onClick={()=>{resetView();setOpen(true);}} aria-label={`${copy.open}：${alt}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async"/>
    </button>
    {caption&&<figcaption>{caption}</figcaption>}
    {open&&<div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${copy.open}：${alt}`}>
      <button className="image-lightbox-dismiss" type="button" onClick={close} aria-label={copy.close}/>
      <div className="image-toolbar">
        <button type="button" onClick={()=>changeScale(-.25)} aria-label={copy.zoomOut}>−</button>
        <output aria-live="polite">{Math.round(scale*100)}%</output>
        <button type="button" onClick={()=>changeScale(.25)} aria-label={copy.zoomIn}>＋</button>
        <button type="button" onClick={resetView}>{copy.reset}</button>
        <button type="button" onClick={close}>{copy.close}</button>
      </div>
      <div ref={viewportRef} className={`image-lightbox-viewport${scale>1?" is-draggable":""}${dragging?" is-dragging":""}`} onWheel={onWheel} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={stopDragging} onPointerCancel={stopDragging} onLostPointerCapture={stopDragging}>
        <div ref={canvasRef} className="image-lightbox-canvas" style={{transform:`translate3d(${offset.x}px,${offset.y}px,0) scale(${scale})`}}>
          <img src={src} alt={alt} draggable={false}/>
        </div>
      </div>
    </div>}
  </figure>;
}
