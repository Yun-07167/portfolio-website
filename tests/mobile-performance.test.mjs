import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const css = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
const home = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const work = readFileSync(new URL("../app/work/WorkPage.tsx", import.meta.url), "utf8");

test("work-card GSAP tilt is limited to desktop fine pointers", () => {
  assert.match(work, /matchMedia\("\(min-width: 801px\) and \(hover: hover\) and \(pointer: fine\)"\)/);
  assert.match(work, /if \(!tiltEnabled \|\| !cardRef\.current\) return;/);
  assert.match(work, /className=\{`work-card\$\{tiltEnabled \? " is-tilt-enabled" : ""\}`\}/);
  assert.match(css, /\.work-card\.is-tilt-enabled \{[^}]*transform:perspective\(1100px\)[^}]*will-change:transform;/s);
});

test("home drag and tilt effects ignore touch-style pointers", () => {
  assert.match(home, /function supportsDesktopCardEffects\(\)/);
  assert.match(home, /matchMedia\("\(min-width: 601px\) and \(hover: hover\) and \(pointer: fine\)"\)/);
  assert.equal((home.match(/!supportsDesktopCardEffects\(\)/g) ?? []).length, 3);
});

test("loaded image placeholders stop their pulse animation", () => {
  assert.match(css, /\.work-card-media\.is-loaded \.work-card-placeholder \{ display:none; \}/);
});

test("mobile work cards defer offscreen rendering and avoid expensive layers", () => {
  assert.match(css, /@media \(max-width:800px\) \{[\s\S]*?\.work-card \{[^}]*transform:none;[^}]*will-change:auto;[^}]*content-visibility:auto;[^}]*contain-intrinsic-size:auto 446px;/);
  assert.match(css, /@media \(max-width:800px\) \{[\s\S]*?\.work-card::before,\.work-card::after \{ content:none; \}/);
});

test("mobile fixed header does not use backdrop blur", () => {
  assert.match(css, /@media \(max-width:600px\) \{[\s\S]*?\.site-header \{[^}]*background:var\(--background\);[^}]*backdrop-filter:none;/);
});

test("mobile detail media defers offscreen painting", () => {
  assert.match(css, /@media \(max-width:600px\) \{[\s\S]*?\.markdown-content > :is\(\.content-media,\.content-drawing,\.content-mermaid,\.content-table-scroll,\.content-columns\) \{[^}]*content-visibility:auto;[^}]*contain-intrinsic-size:auto 420px;/);
});

test("mobile language control is separated without moving the theme control", () => {
  assert.match(css, /@media \(max-width:600px\) \{[\s\S]*?\.mode-switcher \.mode-language \{ position:relative; left:-12px; \}/);
});

test("mobile detail pages cannot widen the viewport", () => {
  assert.match(css, /@media \(max-width:600px\) \{[\s\S]*?html,body \{[^}]*overflow-x:hidden;[^}]*overflow-x:clip;/);
  assert.match(css, /@media \(max-width:600px\) \{[\s\S]*?\.markdown-content :is\(h1,h2,h3,h4,p,li,blockquote,a,figcaption\) \{[^}]*overflow-wrap:anywhere;[^}]*word-break:break-word;/);
});

test("mobile tables and other intentionally wide content keep local horizontal scrolling", () => {
  assert.match(css, /\.content-table-scroll \{[^}]*overflow-x:auto;/);
  assert.match(css, /@media \(max-width:600px\) \{[\s\S]*?\.content-table-scroll,\.markdown-content pre,\.mermaid-preview \{[^}]*overflow-x:auto;[^}]*overscroll-behavior-inline:contain;/);
});
