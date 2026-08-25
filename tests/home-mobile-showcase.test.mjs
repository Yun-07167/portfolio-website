import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
const mobile = styles.match(/@media \(max-width:600px\) \{([\s\S]*?)\n\}/)?.[1] ?? "";

test("mobile home only displays the two recommended project cards", () => {
  assert.match(mobile, /\.card-layout\.card-snapshot,\.card-layout\.card-decorative \{ display:none; \}/);
  assert.match(mobile, /\.canvas \{[^}]*grid-template-columns:minmax\(0,1fr\)/);
});

test("mobile project images preserve their full intrinsic ratio", () => {
  assert.match(mobile, /\.portfolio-stage \{ margin:60px 0 0; height:auto; \}/);
  assert.match(mobile, /\.card-layout\.card-project \{ width:min\(88%,560px\)!important; justify-self:center; \}/);
  assert.match(mobile, /\.card-layout\.card-project \.card-drag,\.card-layout\.card-project \.card-media \{ height:auto; \}/);
  assert.match(mobile, /\.card-layout\.card-project \.card-media img \{[^}]*height:auto;[^}]*object-fit:contain/);
});

test("mobile home disables hover, tilt and drag presentation", () => {
  assert.match(mobile, /\.project-card,\.project-card:hover,\.project-card:focus-visible \{ transform:none; \}/);
  assert.match(mobile, /\.card-drag \{[^}]*cursor:default;[^}]*touch-action:pan-y/);
  assert.match(mobile, /\.avatar:hover \.avatar-hover-layer,\.avatar:focus-visible \.avatar-hover-layer \{ opacity:0; \}/);
});

test("mobile footer hides the back-to-top arrow", () => {
  assert.match(mobile, /footer \.back-top \{ display:none; \}/);
});
