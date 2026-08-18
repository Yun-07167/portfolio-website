import assert from "node:assert/strict";
import test from "node:test";
import { inspectContentBody } from "../scripts/content-body.mjs";
import { serializePublishedProjects, validateProjectParity } from "../scripts/project-data.mjs";
import { serializePublishedNotes, validateNoteParity } from "../scripts/note-data.mjs";

test("content body requires image alt text", () => {
  assert.throws(()=>inspectContentBody("![](/assets/example.webp)","fixture.md"),/without alt text/);
});

test("content body records bilingual media structure independently from captions", () => {
  const zh=inspectContentBody("## 标题\n\n:::video\nsrc: /assets/demo.mp4\nposter: /assets/poster.webp\ncaption: 演示\n:::","zh.md");
  const en=inspectContentBody("## Title\n\n:::video\nsrc: /assets/demo.mp4\nposter: /assets/poster.webp\ncaption: Demo\n:::","en.md");
  assert.deepEqual(zh.signature,en.signature);
});

test("projects can be locale-only and use independent publication order", () => {
  const shared={year:2026,cover:"/assets/a.webp",home_thumbnail:"/assets/a.webp",tags:["case-study"],body_signature:{headings:[],media:[]}};
  const zh=new Map([["shared",{slug:"shared",...shared,published:true,order:30}],["zh-only",{slug:"zh-only",...shared,published:true,order:10}]]);
  const en=new Map([["shared",{slug:"shared",...shared,published:false,order:5}],["en-only",{slug:"en-only",...shared,published:true,order:20}]]);
  assert.doesNotThrow(()=>validateProjectParity(zh,en));
  assert.deepEqual(serializePublishedProjects(zh).map(item=>item.slug),["zh-only","shared"]);
  assert.deepEqual(serializePublishedProjects(en).map(item=>item.slug),["en-only"]);
});

test("notes can be locale-only with independent dates and publication", () => {
  const shared={tags:["case-study"],body_signature:{headings:[],media:[]},body:""};
  const zh=new Map([["shared",{slug:"shared",...shared,published:true,published_at:"2026-01-01"}],["zh-only",{slug:"zh-only",...shared,published:true,published_at:"2026-03-01"}]]);
  const en=new Map([["shared",{slug:"shared",...shared,published:false,published_at:"2025-01-01"}],["en-only",{slug:"en-only",...shared,published:true,published_at:"2026-02-01"}]]);
  assert.doesNotThrow(()=>validateNoteParity(zh,en));
  assert.deepEqual(serializePublishedNotes(zh).map(item=>item.slug),["zh-only","shared"]);
  assert.deepEqual(serializePublishedNotes(en).map(item=>item.slug),["en-only"]);
});

test("content body recognizes Mermaid blocks without adding them to bilingual media parity", () => {
  const audit=inspectContentBody("## Flow\n\n```mermaid\nflowchart LR\nA --> B\n```","fixture.md");
  assert.deepEqual(audit.mermaid,["flowchart LR\nA --> B"]);
  assert.deepEqual(audit.signature,{headings:[2],media:[]});
  assert.throws(()=>inspectContentBody("```mermaid\nflowchart LR\nA --> B","broken.md"),/unclosed Mermaid/);
});

test("content body validates editable drawing exports", () => {
  const result=inspectContentBody(":::drawing\nsrc: /assets/flow.svg\ndark_src: /assets/flow.dark.svg\nalt: Task flow\ncaption: Editable in Excalidraw\n:::","drawing.md");
  assert.equal(result.media[0].type,"drawing");
  assert.equal(result.media[0].dark_src,"/assets/flow.dark.svg");
  assert.throws(()=>inspectContentBody(":::drawing\nsrc: /assets/flow.svg\n:::","drawing.md"),/without alt text/);
});
