import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import matter from "gray-matter";

const root = resolve(import.meta.dirname, "..");

export function parseAboutDocument(source, sourcePath = "about.md") {
  const parsed = matter(source);
  const headingPattern = /^#\s+(.+)$/gm;
  const matches = [...parsed.content.matchAll(headingPattern)];
  if (matches.length !== 2) {
    throw new TypeError(`${sourcePath} must contain exactly two level-one Markdown headings.`);
  }

  const ids = ["about-me", "about-site"];
  const sections = matches.map((match, index) => {
    const bodyStart = match.index + match[0].length;
    const bodyEnd = matches[index + 1]?.index ?? parsed.content.length;
    const body = parsed.content.slice(bodyStart, bodyEnd).trim();
    if (!body) throw new TypeError(`${sourcePath} section ${index + 1} must not be empty.`);
    return { id: ids[index], title: match[1].trim(), body };
  });

  return { ...parsed.data, sections };
}

export async function loadAboutLocale(locale) {
  const relativePath = `content/${locale}/about.md`;
  const source = await readFile(resolve(root, relativePath), "utf8");
  return parseAboutDocument(source, relativePath);
}
