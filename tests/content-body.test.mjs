import assert from "node:assert/strict";
import test from "node:test";
import { inspectContentBody } from "../scripts/content-body.mjs";

test("content body requires image alt text", () => {
  assert.throws(()=>inspectContentBody("![](/assets/example.webp)","fixture.md"),/without alt text/);
});

test("content body records bilingual media structure independently from captions", () => {
  const zh=inspectContentBody("## 标题\n\n:::video\nsrc: /assets/demo.mp4\nposter: /assets/poster.webp\ncaption: 演示\n:::","zh.md");
  const en=inspectContentBody("## Title\n\n:::video\nsrc: /assets/demo.mp4\nposter: /assets/poster.webp\ncaption: Demo\n:::","en.md");
  assert.deepEqual(zh.signature,en.signature);
});
