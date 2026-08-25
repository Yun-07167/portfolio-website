import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
const mobile = styles.match(/@media \(max-width:800px\) \{([\s\S]*?)\n\}/)?.[1] ?? "";

test("mobile resume places entry headings and dates on separate rows", () => {
  assert.match(mobile, /\.resume-entry-heading \{ flex-direction:column; gap:4px; \}/);
  assert.match(mobile, /\.resume-entry time \{ padding:0; text-align:left; \}/);
});
