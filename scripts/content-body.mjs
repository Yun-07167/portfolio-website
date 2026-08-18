const imagePattern = /^!\[([^\]]*)\]\(([^\s)]+)(?:\s+["'][^"']*["'])?\)$/gm;
const directivePattern = /^:::(image|video|drawing)\s*\n([\s\S]*?)^:::\s*$/gm;
const mermaidFencePattern = /^```mermaid\s*\n([\s\S]*?)^```\s*$/gm;

function parseDirectiveFields(source) {
  const fields = {};
  for (const line of source.split(/\r?\n/)) {
    const match = line.match(/^([a-z_]+):\s*(.*)$/);
    if (match) fields[match[1]] = match[2].trim().replace(/^["']|["']$/g, "");
  }
  return fields;
}

export function inspectContentBody(body, path) {
  const media = [];
  const headings = [...body.matchAll(/^(#{1,6})\s+(.+)$/gm)].map(match => match[1].length);
  const mermaid = [...body.matchAll(mermaidFencePattern)].map(match => match[1].trim());
  const mermaidOpenings = [...body.matchAll(/^```mermaid\s*$/gm)].length;
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
    media.push({ type, ...fields });
  }

  return {
    media,
    mermaid,
    signature: {
      headings,
      media: media.map(item => ({ type: item.type, src: item.src, poster: item.poster ?? null, captions: item.captions ?? null })),
    },
  };
}
