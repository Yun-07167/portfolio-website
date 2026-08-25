import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../app/components/MobileNavigation.tsx", import.meta.url), "utf8");
const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
const home = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const sharedHeader = await readFile(new URL("../app/components/SiteHeader.tsx", import.meta.url), "utf8");

test("mobile navigation exposes synchronized disclosure semantics", () => {
  assert.match(source, /aria-expanded=\{open\}/);
  assert.match(source, /aria-controls=\{controlsId\}/);
  assert.match(source, /<nav id=\{controlsId\}/);
});

test("mobile navigation supports every requested close path and focus return", () => {
  assert.match(source, /event\.key === "Escape"/);
  assert.match(source, /mobile-nav-backdrop[\s\S]*onClick=\{close\}/);
  assert.match(source, /href=\{item\.href\}[\s\S]*onClick=\{close\}/);
  assert.match(source, /toggleRef\.current\?\.focus\(\)/);
  assert.match(source, /document\.body\.style\.overflow = "hidden"/);
});

test("home and subpages reuse the same mobile drawer", () => {
  assert.match(home, /<MobileNavigation[\s\S]*controlsId="mobile-home-navigation"/);
  assert.match(sharedHeader, /<MobileNavigation[\s\S]*controlsId="mobile-site-navigation"/);
  assert.match(styles, /\.mobile-nav-drawer \{[^}]*transform:translateX\(-104%\)/);
  assert.match(styles, /\.mobile-nav-layer\.is-open \.mobile-nav-drawer \{ transform:translateX\(0\); \}/);
});

test("mobile header restores pointer interaction for touch input", () => {
  assert.match(styles, /@media \(max-width:600px\)[\s\S]*?\.site-header \{[^}]*pointer-events:auto/);
  assert.match(styles, /\.mobile-menu-toggle \{[^}]*touch-action:manipulation/);
});

test("mobile navigation remains above every subpage and only underlines the active label", () => {
  assert.match(styles, /@media \(max-width:600px\)[\s\S]*?\.subpage-shell \{ z-index:auto; \}/);
  assert.match(styles, /\.site-header \{[^}]*z-index:1000/);
  assert.match(styles, /\.mobile-nav-drawer nav > a \{[^}]*width:fit-content/);
  assert.doesNotMatch(styles, /\.mobile-nav-drawer nav > a \{[^}]*border-bottom/);
  assert.match(styles, /nav > a\[aria-current="page"\]::after \{[^}]*left:8px; right:8px/);
});
