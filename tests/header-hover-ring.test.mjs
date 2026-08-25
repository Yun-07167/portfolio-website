import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const home=readFileSync(new URL("../app/page.tsx",import.meta.url),"utf8");
const siteHeader=readFileSync(new URL("../app/components/SiteHeader.tsx",import.meta.url),"utf8");
const ring=readFileSync(new URL("../app/components/HeaderHoverRing.tsx",import.meta.url),"utf8");
const css=readFileSync(new URL("../app/globals.css",import.meta.url),"utf8");

test("all desktop headers preload the same persistent hover-ring component",()=>{
  assert.match(home,/<HeaderHoverRing navId=\{item\.id\} active=\{hovered === item\.id\}\/>/);
  assert.match(siteHeader,/<HeaderHoverRing navId=\{item\.id\} active=\{hovered === item\.id\}\/>/);
  assert.doesNotMatch(home,/hovered === item\.id && <img/);
  assert.doesNotMatch(siteHeader,/hovered === item\.id && <img/);
  assert.match(ring,/void loadRing\(source\)/);
});

test("ring activation is scoped to the label and restarts the real SVG path animation",()=>{
  assert.doesNotMatch(css,/\.nav-zone:hover \.drawn-ring/);
  assert.doesNotMatch(css,/\.drawn-ring \{[^}]*clip-path/);
  assert.match(ring,/markup\.replace\("animation:draw-ring \.5s", "animation:draw-ring \.3s"\)/);
  assert.match(ring,/active && markup && <span className="drawn-ring-svg" dangerouslySetInnerHTML/);
  assert.match(home,/className="nav-label"[^>]*onMouseEnter=\{\(\) => setHovered\(item\.id\)\}/);
  assert.match(siteHeader,/className="nav-label"[^>]*onMouseEnter=\{\(\) => setHovered\(item\.id\)\}/);
});

test("about ring preserves its taller overflow without clipping",()=>{
  assert.match(css,/\.drawn-ring \{[^}]*overflow:visible/);
  assert.match(css,/\.nav-about \.drawn-ring-svg,\.nav-about \.drawn-ring-svg > svg \{[^}]*height:43px;[^}]*overflow:visible/);
});
