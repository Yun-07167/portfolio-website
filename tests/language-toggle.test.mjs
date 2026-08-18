import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const switcherSource = await readFile(new URL("../app/components/ModeSwitcher.tsx", import.meta.url), "utf8");
const preferencesSource = await readFile(new URL("../app/components/useSitePreferences.ts", import.meta.url), "utf8");

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
