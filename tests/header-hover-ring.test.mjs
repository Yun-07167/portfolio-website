import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const home=readFileSync(new URL("../app/page.tsx",import.meta.url),"utf8");
const siteHeader=readFileSync(new URL("../app/components/SiteHeader.tsx",import.meta.url),"utf8");
const ring=readFileSync(new URL("../app/components/HeaderHoverRing.tsx",import.meta.url),"utf8");
const css=readFileSync(new URL("../app/globals.css",import.meta.url),"utf8");

test("all desktop headers preload the same persistent hover-ring component",()=>{
  assert.match(home,/<HeaderHoverRing navId=\{item\.id\}\/>/);
  assert.match(siteHeader,/<HeaderHoverRing navId=\{item\.id\}\/>/);
  assert.doesNotMatch(home,/hovered === item\.id && <img/);
  assert.doesNotMatch(siteHeader,/hovered === item\.id && <img/);
  assert.match(ring,/<img src=\{navId === "about"/);
});

test("ring activation is scoped to the label state and has deterministic reveal timing",()=>{
  assert.doesNotMatch(css,/\.nav-zone:hover \.drawn-ring/);
  assert.match(css,/\.drawn-ring \{[^}]*clip-path:inset\(0 100% 0 0\)/);
  assert.match(css,/\.state-projects \.nav-projects \.drawn-ring[^}]*clip-path:inset\(0\);[^}]*clip-path \.28s/);
  assert.match(home,/className="nav-label"[^>]*onMouseEnter=\{\(\) => setHovered\(item\.id\)\}/);
  assert.match(siteHeader,/className="nav-label"[^>]*onMouseEnter=\{\(\) => setHovered\(item\.id\)\}/);
});
