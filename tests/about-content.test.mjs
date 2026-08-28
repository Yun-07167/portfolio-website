import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
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
