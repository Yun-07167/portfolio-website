import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { parseAboutDocument } from "../scripts/about-data.mjs";

test("about content is authored as ordinary Markdown sections", async () => {
  for (const locale of ["zh", "en"]) {
    const source = await readFile(new URL(`../content/${locale}/about.md`, import.meta.url), "utf8");
    assert.doesNotMatch(source, /^sections:/m);
    const about = parseAboutDocument(source, `content/${locale}/about.md`);
    assert.deepEqual(about.sections.map(section => section.id), ["about-me", "about-site"]);
    assert.ok(about.sections.every(section => section.title && section.body));
  }
});

test("about body uses the shared Markdown renderer for clickable links", () => {
  const component = readFileSync(new URL("../app/components/ContentPage.tsx", import.meta.url), "utf8");
  assert.match(component, /<MarkdownContent markdown=\{section\.body\}\/>/);
  assert.doesNotMatch(component, /<Paragraphs text=\{section\.body\}\/>/);
});