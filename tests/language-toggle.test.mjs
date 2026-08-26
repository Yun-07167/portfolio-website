import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const switcherSource = await readFile(new URL("../app/components/ModeSwitcher.tsx", import.meta.url), "utf8");
const preferencesSource = await readFile(new URL("../app/components/useSitePreferences.ts", import.meta.url), "utf8");
const detailSource = await readFile(new URL("../app/components/DetailPage.tsx", import.meta.url), "utf8");
const layoutSource = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

test("language toggle derives the next value from the latest state", () => {
  assert.match(switcherSource, /setLanguage\(current => current === "zh" \? "en" : "zh"\)/);
});

test("language icon is replaced and the preference is persisted", () => {
  assert.match(switcherSource, /<span key="en" className="switch-icon-language-en">/);
  assert.match(switcherSource, /<span key="zh" className="switch-icon-language-sc">/);
  assert.match(preferencesSource, /localStorage\.getItem\(LANGUAGE_STORAGE_KEY\)/);
  assert.match(preferencesSource, /localStorage\.setItem\(LANGUAGE_STORAGE_KEY, language\)/);
  assert.match(preferencesSource, /localStorage\.getItem\(THEME_STORAGE_KEY\)/);
  assert.match(preferencesSource, /localStorage\.setItem\(THEME_STORAGE_KEY, theme\)/);
});

test("a shared lang query overrides the saved language", () => {
  assert.match(preferencesSource, /new URLSearchParams\(window\.location\.search\)\.get\("lang"\)/);
  assert.match(preferencesSource, /requestedLanguage === "zh" \|\| requestedLanguage === "en"/);
});

test("locale-only detail routes wait until the persisted language is restored", () => {
  assert.match(preferencesSource, /return \{ language, setLanguage, theme, setTheme, ready \}/);
  assert.match(detailSource, /if\(ready&&!item&&hasAlternate\)/);
  assert.match(detailSource, /currentProject\?\?\(!ready\?alternateProject:undefined\)/);
  assert.match(detailSource, /currentNote\?\?\(!ready\?alternateNote:undefined\)/);
});

test("English preference restoration hides the default Chinese frame", () => {
  assert.match(layoutSource, /data-restoring-preferences/);
  assert.match(css, /html\[data-restoring-preferences\] body \{\s*visibility: hidden;/);
  assert.match(preferencesSource, /removeAttribute\("data-restoring-preferences"\)/);
});
