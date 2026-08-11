import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import matter from "gray-matter";
import { loadHomeShowcase } from "./home-showcase-data.mjs";

const root = resolve(import.meta.dirname, "..");

async function readFrontMatter(relativePath) {
  const source = await readFile(resolve(root, relativePath), "utf8");
  return matter(source).data;
}

async function readLocale(locale) {
  const base = `content/${locale}`;
  const [global, home, work, resume, about, notes] = await Promise.all([
    readFrontMatter(`${base}/global.md`),
    readFrontMatter(`${base}/home.md`),
    readFrontMatter(`${base}/work.md`),
    readFrontMatter(`${base}/resume.md`),
    readFrontMatter(`${base}/about.md`),
    readFrontMatter(`${base}/notes.md`),
  ]);

  return { global, home, work, resume, about, notes };
}

const content = {
  zh: await readLocale("zh"),
  en: await readLocale("en"),
  homeShowcase: await loadHomeShowcase(),
};

const outputPath = resolve(root, "app/generated-content.ts");
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(
  outputPath,
  `// Generated from content/**/*.md. Edit Markdown, not this file.\nexport const siteContent = ${JSON.stringify(content, null, 2)} as const;\n`,
  "utf8",
);

console.log("Generated app/generated-content.ts from Markdown content.");
