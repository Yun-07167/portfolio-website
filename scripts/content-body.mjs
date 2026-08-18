const imagePattern = /^!\[([^\]]*)\]\(([^\s)]+)(?:\s+["'][^"']*["'])?\)$/gm;
const directivePattern = /^:::(image|video)\s*\n([\s\S]*?)^:::\s*$/gm;

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

  for (const match of body.matchAll(imagePattern)) {
    const alt = match[1].trim();
    if (!alt) throw new Error(`${path} contains an image without alt text: ${match[2]}`);
    media.push({ type: "image", src: match[2], alt });
  }

  for (const match of body.matchAll(directivePattern)) {
    const type = match[1];
    const fields = parseDirectiveFields(match[2]);
    if (!fields.src) throw new Error(`${path} contains :::${type} without src.`);
    if (type === "image" && !fields.alt) throw new Error(`${path} contains :::image without alt text: ${fields.src}`);
    media.push({ type, ...fields });
  }

  return {
    media,
    signature: {
      headings,
      media: media.map(item => ({ type: item.type, src: item.src, poster: item.poster ?? null, captions: item.captions ?? null })),
    },
  };
}
