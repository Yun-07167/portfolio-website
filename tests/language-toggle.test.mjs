import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

test("language toggle derives the next value from the latest state", () => {
  assert.match(source, /setLanguage\(current => current === "zh" \? "en" : "zh"\)/);
});

test("language icon is replaced and the preference is persisted", () => {
  assert.match(source, /<span key="en" className="switch-icon-language-en">/);
  assert.match(source, /<span key="zh" className="switch-icon-language-sc">/);
  assert.match(source, /localStorage\.getItem\(LANGUAGE_STORAGE_KEY\)/);
  assert.match(source, /localStorage\.setItem\(LANGUAGE_STORAGE_KEY, language\)/);
});
