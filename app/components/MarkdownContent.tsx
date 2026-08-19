import { Fragment, type ReactNode } from "react";
import MermaidDiagram from "./MermaidDiagram";
import DrawingViewer from "./DrawingViewer";
import ImageViewer from "./ImageViewer";

type Block =
  | { type:"heading"; level:number; text:string }
  | { type:"paragraph"; text:string }
  | { type:"image"; src:string; alt:string; caption?:string; layout?:string }
  | { type:"video"; src:string; poster?:string; caption?:string; captions?:string }
  | { type:"video_embed"; src:string; title:string; caption?:string; layout?:string }
  | { type:"drawing"; src:string; darkSrc?:string; alt:string; caption?:string; layout?:string }
  | { type:"columns"; ratio:"1-1"|"1-2"|"2-1"; columns:string[] }
  | { type:"list"; ordered:boolean; items:string[] }
  | { type:"quote"; text:string }
  | { type:"code"; code:string }
  | { type:"mermaid"; code:string }
  | { type:"table"; headers:string[]; rows:string[][]; align:("left"|"center"|"right")[] };

function tableCells(line:string) {
  return line.trim().replace(/^\||\|$/g,"").split(/(?<!\\)\|/).map(cell=>cell.trim().replace(/\\\|/g,"|"));
}

function tableAlignment(line:string) {
  const cells=tableCells(line);
  if(!cells.length||cells.some(cell=>!/^:?-{3,}:?$/.test(cell)))return null;
  return cells.map(cell=>cell.startsWith(":")&&cell.endsWith(":")?"center":cell.endsWith(":")?"right":"left") as ("left"|"center"|"right")[];
}

function fields(lines:string[]) {
  const result:Record<string,string> = {};
  for (const line of lines) {
    const match=line.match(/^([a-z_]+):\s*(.*)$/);
    if (match) result[match[1]]=match[2].trim().replace(/^["']|["']$/g,"");
  }
  return result;
}

function blocks(markdown:string):Block[] {
  const lines=markdown.replace(/\r/g,"").split("\n");
  const result:Block[]=[];
  for(let index=0;index<lines.length;) {
    const line=lines[index].trim();
    if(!line){index++;continue;}
    if(line===":::columns"){
      index++;
      let ratio:"1-1"|"1-2"|"2-1"="1-1";
      const columns:string[]=[];
      while(index<lines.length){
        const current=lines[index].trim();
        const ratioMatch=current.match(/^ratio:\s*(1:1|1:2|2:1)$/);
        if(ratioMatch){ratio=ratioMatch[1].replace(":","-") as typeof ratio;index++;continue;}
        if(current===":::"){index++;break;}
        if(current!==":::column"){index++;continue;}
        index++;
        const content:string[]=[];
        let depth=1;
        while(index<lines.length&&depth>0){
          const nested=lines[index].trim();
          if(/^:::(image|video|video_embed|drawing|columns)$/.test(nested)){depth++;content.push(lines[index]);index++;continue;}
          if(nested===":::"){
            depth--;
            if(depth===0){index++;break;}
          }
          content.push(lines[index]);index++;
        }
        columns.push(content.join("\n").trim());
      }
      if(columns.length===2)result.push({type:"columns",ratio,columns});
      continue;
    }
    const heading=line.match(/^(#{1,6})\s+(.+)$/);
    if(heading){result.push({type:"heading",level:heading[1].length,text:heading[2]});index++;continue;}
    const image=line.match(/^!\[([^\]]+)\]\(([^\s)]+)(?:\s+["']([^"']*)["'])?\)$/);
    if(image){result.push({type:"image",alt:image[1],src:image[2],caption:image[3]});index++;continue;}
    if(line===":::image"||line===":::video"||line===":::video_embed"||line===":::drawing"){
      const type=line.slice(3) as "image"|"video"|"video_embed"|"drawing"; const content:string[]=[]; index++;
      while(index<lines.length&&lines[index].trim()!==":::"){content.push(lines[index]);index++;}
      index++; const data=fields(content);
      if(type==="image") result.push({type,src:data.src,alt:data.alt,caption:data.caption,layout:data.layout});
      else if(type==="drawing") result.push({type,src:data.src,darkSrc:data.dark_src,alt:data.alt,caption:data.caption,layout:data.layout});
      else if(type==="video_embed") result.push({type,src:data.src,title:data.title,caption:data.caption,layout:data.layout});
      else result.push({type,src:data.src,poster:data.poster,caption:data.caption,captions:data.captions});
      continue;
    }
    if(line.startsWith("\x60\x60\x60")){
      const language=line.slice(3).trim().toLowerCase();
      const content:string[]=[]; index++;
      while(index<lines.length&&!lines[index].trim().startsWith("\x60\x60\x60")){content.push(lines[index]);index++;}
      index++; result.push(language==="mermaid"?{type:"mermaid",code:content.join("\n")}:{type:"code",code:content.join("\n")}); continue;
    }
    const alignment=index+1<lines.length?tableAlignment(lines[index+1]):null;
    if(line.includes("|")&&alignment){
      const headers=tableCells(lines[index]);index+=2;const rows:string[][]=[];
      while(index<lines.length&&lines[index].trim().includes("|")){rows.push(tableCells(lines[index]));index++;}
      result.push({type:"table",headers,rows,align:alignment});continue;
    }
    if(/^>\s?/.test(line)){
      const content:string[]=[];
      while(index<lines.length&&/^>\s?/.test(lines[index].trim())){content.push(lines[index].trim().replace(/^>\s?/,""));index++;}
      result.push({type:"quote",text:content.join(" ")});continue;
    }
    if(/^([-*]|\d+\.)\s+/.test(line)){
      const ordered=/^\d+\./.test(line);const items:string[]=[];
      while(index<lines.length&&new RegExp(ordered?"^\\d+\\.\\s+":"^[-*]\\s+").test(lines[index].trim())){items.push(lines[index].trim().replace(ordered?/^\d+\.\s+/:/^[-*]\s+/,""));index++;}
      result.push({type:"list",ordered,items});continue;
    }
    const content=[line];index++;
    while(index<lines.length&&lines[index].trim()&&!/^(#{1,6})\s+|^!\[|^:::|^>|^([-*]|\d+\.)\s+/.test(lines[index].trim())){content.push(lines[index].trim());index++;}
    result.push({type:"paragraph",text:content.join(" ")});
  }
  return result;
}

function safeHref(href:string) {
  return /^(https?:\/\/|mailto:|\/|#)/.test(href) ? href : "#";
}

function safeVideoEmbedUrl(source:string) {
  try {
    const url=new URL(source);
    if(url.protocol!=="https:")return null;
    const host=url.hostname.toLowerCase().replace(/^www\./,"");
    if(host==="youtu.be") {
      const id=url.pathname.split("/").filter(Boolean)[0];
      return id?`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`:null;
    }
    if(host==="youtube.com"||host==="m.youtube.com") {
      const id=url.pathname.startsWith("/embed/")?url.pathname.split("/")[2]:url.searchParams.get("v");
      return id?`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`:null;
    }
    if(host==="youtube-nocookie.com"&&url.pathname.startsWith("/embed/"))return url.toString();
    if(host==="vimeo.com") {
      const id=url.pathname.split("/").find(part=>/^\d+$/.test(part));
      return id?`https://player.vimeo.com/video/${id}`:null;
    }
    if(host==="player.vimeo.com"&&url.pathname.startsWith("/video/"))return url.toString();
    if(host==="bilibili.com") {
      const bvid=url.pathname.match(/\/video\/(BV[\w]+)/i)?.[1];
      return bvid?`https://player.bilibili.com/player.html?bvid=${encodeURIComponent(bvid)}`:null;
    }
    if(host==="player.bilibili.com")return url.toString();
  } catch {
    return null;
  }
  return null;
}

function inline(text:string):ReactNode[] {
  const pattern=/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|(?<!\*)\*[^*\n]+\*(?!\*)|(?<!\w)_[^_\n]+_(?!\w))/g;
  return text.split(pattern).filter(Boolean).map((part,index)=>{
    const link=part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if(link)return <a href={safeHref(link[2])} key={index}>{link[1]}</a>;
    if(part.startsWith("**")&&part.endsWith("**"))return <strong key={index}>{part.slice(2,-2)}</strong>;
    if((part.startsWith("*")&&part.endsWith("*"))||(part.startsWith("_")&&part.endsWith("_")))return <em key={index}>{part.slice(1,-1)}</em>;
    return <Fragment key={index}>{part}</Fragment>;
  });
}

export default function MarkdownContent({ markdown }:{ markdown:string }) {
  return <div className="markdown-content">{blocks(markdown).map((block,index)=>{
    if(block.type==="heading"){
      if(block.level===1)return <h1 key={index}>{inline(block.text)}</h1>;
      if(block.level===2)return <h2 key={index}>{inline(block.text)}</h2>;
      if(block.level===3)return <h3 key={index}>{inline(block.text)}</h3>;
      return <h4 key={index}>{inline(block.text)}</h4>;
    }
    if(block.type==="paragraph")return <p key={index}>{inline(block.text)}</p>;
    if(block.type==="quote")return <blockquote key={index}>{inline(block.text)}</blockquote>;
    if(block.type==="code")return <pre key={index}><code>{block.code}</code></pre>;
    if(block.type==="mermaid")return <MermaidDiagram code={block.code} key={index}/>;
    if(block.type==="columns")return <div className={`content-columns columns-${block.ratio}`} key={index}>{block.columns.map((column,columnIndex)=><section className="content-column" key={columnIndex}><MarkdownContent markdown={column}/></section>)}</div>;
    if(block.type==="drawing")return <DrawingViewer src={block.src} darkSrc={block.darkSrc} alt={block.alt} caption={block.caption} layout={block.layout} key={index}/>;
    if(block.type==="video_embed"){
      const src=safeVideoEmbedUrl(block.src);
      return src?<figure className={`content-media content-video-embed media-${block.layout??"wide"}`} key={index}><div className="video-embed-frame"><iframe src={src} title={block.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/></div>{block.caption&&<figcaption>{block.caption}</figcaption>}</figure>:null;
    }
    if(block.type==="table")return <div className="content-table-scroll" key={index}><table><thead><tr>{block.headers.map((cell,cellIndex)=><th style={{textAlign:block.align[cellIndex]??"left"}} key={cellIndex}>{inline(cell)}</th>)}</tr></thead><tbody>{block.rows.map((row,rowIndex)=><tr key={rowIndex}>{block.headers.map((_,cellIndex)=><td style={{textAlign:block.align[cellIndex]??"left"}} key={cellIndex}>{inline(row[cellIndex]??"")}</td>)}</tr>)}</tbody></table></div>;
    if(block.type==="list"){
      const items=block.items.map((item,itemIndex)=><li key={itemIndex}>{inline(item)}</li>);
      return block.ordered?<ol key={index}>{items}</ol>:<ul key={index}>{items}</ul>;
    }
    if(block.type==="image")return <ImageViewer src={block.src} alt={block.alt} caption={block.caption} layout={block.layout} key={index}/>;
    // Captions are rendered when the optional WebVTT path is provided; silent prototype recordings remain valid.
    // eslint-disable-next-line jsx-a11y/media-has-caption
    return <figure className="content-media content-video" key={index}><video controls playsInline preload="metadata" poster={block.poster}><source src={block.src}/>{block.captions&&<track kind="captions" src={block.captions} srcLang="zh" label="Captions" default/>}</video>{block.caption&&<figcaption>{block.caption}</figcaption>}</figure>;
  })}</div>;
}
