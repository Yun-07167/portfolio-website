import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const component=readFileSync(new URL("../app/components/MarkdownContent.tsx",import.meta.url),"utf8");
const css=readFileSync(new URL("../app/globals.css",import.meta.url),"utf8");

test("blockquote source lines retain explicit line breaks",()=>{
  assert.match(component,/result\.push\(\{type:"quote",text:content\.join\("\\n"\)\}\)/);
  assert.match(css,/\.markdown-content blockquote \{[^}]*white-space:pre-line;/);
});

test("inline backticks render as styled code instead of visible delimiters",()=>{
  assert.match(component,/`\[\^`\\n\]\+`/);
  assert.match(component,/part\.startsWith\("`"\).*return <code key=\{index\}>\{part\.slice\(1,-1\)\}<\/code>/);
  assert.match(css,/\.markdown-content :not\(pre\) > code \{/);
});
