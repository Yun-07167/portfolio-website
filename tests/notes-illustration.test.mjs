import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
const asset = await readFile(new URL("../public/assets/notes-illustration.svg", import.meta.url), "utf8");

test("Notes navigation uses its own Figma illustration", () => {
  assert.match(page, /id: "notes"[\s\S]*art: "\/assets\/notes-illustration\.svg"/);
  assert.match(asset, /<g id="notes-illustration">/);
  assert.match(asset, /preserveAspectRatio="xMidYMid meet"/);
  assert.ok(asset.length > 100_000, "expected the complete exported vector asset");
});

test("Notes illustration preserves the Figma frame and overflowing artwork bounds", () => {
  assert.match(styles, /\.nav-notes-illustration-frame \{[^}]*width:62px;[^}]*height:64px;[^}]*overflow:visible;/);
  assert.match(styles, /\.nav-notes-illustration-frame \.nav-illustration \{[^}]*left:-12\.48px;[^}]*top:-2px;[^}]*width:77\.5623px;[^}]*height:69\.3808px;/);
});

test("Notes navigation no longer displays an in-progress caption", () => {
  assert.doesNotMatch(page, /施工中|in progress|nav-status-caption/);
  assert.doesNotMatch(styles, /nav-status-caption/);
});
