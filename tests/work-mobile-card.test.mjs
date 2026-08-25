import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
const mobile = styles.match(/@media \(max-width:560px\) \{([\s\S]*?)\n\}/)?.[1] ?? "";

test("mobile work cards give title, metadata and summary independent space", () => {
  assert.match(mobile, /\.work-card-copy \{ height:auto; padding:12px 4px 16px; gap:10px; overflow:visible; \}/);
  assert.match(mobile, /\.work-card-copy h2 \{ padding:0; font-size:22px; \}/);
  assert.match(mobile, /\.work-card-meta \{ flex-direction:column; gap:6px; \}/);
});

test("mobile work summaries remain a single ellipsized line", () => {
  assert.match(mobile, /\.work-card-copy > p \{[^}]*flex:none;[^}]*white-space:nowrap;[^}]*overflow:hidden;[^}]*text-overflow:ellipsis/);
});
