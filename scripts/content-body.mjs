const imagePattern = /^!\[([^\]]*)\]\(([^\s)]+)(?:\s+["'][^"']*["'])?\)$/gm;
const directivePattern = /^:::(image|video|video_embed|drawing)\s*\n([\s\S]*?)^:::\s*$/gm;
const mermaidFencePattern = /^```mermaid\s*\n([\s\S]*?)^```\s*$/gm;

function parseDirectiveFields(source) {
  const fields = {};
  for (const line of source.split(/\r?\n/)) {
    const match = line.match(/^([a-z_]+):\s*(.*)$/);
    if (match) fields[match[1]] = match[2].trim().replace(/^["']|["']$/g, "");
  }
  return fields;
}

function isAllowedVideoEmbed(source) {
  try {
    const url=new URL(source);
    if(url.protocol!=="https:")return false;
    const host=url.hostname.toLowerCase().replace(/^www\./,"");
    return ["youtube.com","m.youtube.com","youtu.be","youtube-nocookie.com","vimeo.com","player.vimeo.com","bilibili.com","player.bilibili.com"].includes(host);
  } catch {
    return false;
  }
}

function inspectColumns(body, path) {
  const stack=[];
  const columns=[];
  for(const rawLine of body.split(/\r?\n/)){
    const line=rawLine.trim();
    if(line===":::columns"){
      const block={type:"columns",columnCount:0,ratio:"1:1"};
      stack.push(block);columns.push(block);continue;
    }
    if(line===":::column"){
      const parent=[...stack].reverse().find(item=>item.type==="columns");
      if(!parent)throw new Error(`${path} contains :::column outside :::columns.`);
      parent.columnCount++;
      stack.push({type:"column"});continue;
    }
    const ratio=line.match(/^ratio:\s*(.+)$/);
    if(ratio&&stack.at(-1)?.type==="columns"){
      if(!["1:1","1:2","2:1"].includes(ratio[1]))throw new Error(`${path} uses unsupported columns ratio: ${ratio[1]}.`);
      stack.at(-1).ratio=ratio[1];continue;
    }
    const directive=line.match(/^:::(image|video|video_embed|drawing)$/);
    if(directive){stack.push({type:directive[1]});continue;}
    if(line===":::"&&stack.length)stack.pop();
  }
  if(stack.some(item=>item.type==="columns"||item.type==="column"))throw new Error(`${path} contains an unclosed columns block.`);
  for(const block of columns)if(block.columnCount!==2)throw new Error(`${path} columns blocks must contain exactly two :::column sections.`);
  return columns.map(block=>({ratio:block.ratio}));
}

export function inspectContentBody(body, path) {
  const media = [];
  const headings = [...body.matchAll(/^(#{1,6})\s+(.+)$/gm)].map(match => match[1].length);
  const mermaid = [...body.matchAll(mermaidFencePattern)].map(match => match[1].trim());
  const mermaidOpenings = [...body.matchAll(/^```mermaid\s*$/gm)].length;
  const columns = inspectColumns(body,path);
  if (mermaidOpenings !== mermaid.length) throw new Error(`${path} contains an unclosed Mermaid code block.`);
  if (mermaid.some(source => !source)) throw new Error(`${path} contains an empty Mermaid code block.`);

  for (const match of body.matchAll(imagePattern)) {
    const alt = match[1].trim();
    if (!alt) throw new Error(`${path} contains an image without alt text: ${match[2]}`);
    media.push({ type: "image", src: match[2], alt });
  }

  for (const match of body.matchAll(directivePattern)) {
    const type = match[1];
    const fields = parseDirectiveFields(match[2]);
    if (!fields.src) throw new Error(`${path} contains :::${type} without src.`);
    if ((type === "image" || type === "drawing") && !fields.alt) throw new Error(`${path} contains :::${type} without alt text: ${fields.src}`);
    if (type === "video_embed" && !fields.title) throw new Error(`${path} contains :::video_embed without title: ${fields.src}`);
    if (type === "video_embed" && !isAllowedVideoEmbed(fields.src)) throw new Error(`${path} contains an unsupported video embed URL: ${fields.src}`);
    media.push({ type, ...fields });
  }

  return {
    media,
    mermaid,
    signature: {
      headings,
      columns,
      media: media.map(item => item.type === "video_embed" || item.localized === "true"
        ? { type: item.type, ...(item.localized === "true" ? { localized: true } : {}) }
        : { type: item.type, src: item.src, poster: item.poster ?? null, captions: item.captions ?? null }),
    },
  };
}
