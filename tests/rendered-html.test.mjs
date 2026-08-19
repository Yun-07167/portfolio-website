import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders Figma content generated from Markdown", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /你好，我叫杨天韵/);
  assert.match(html, /mailto:yangtianyun7@foxmail\.com/);
  assert.match(html, />笔记</);
  assert.doesNotMatch(html, /填写邮箱地址|hello@example\.com|请在这里替换正式二维码/);
});

test("renders the Notes list route with Markdown entries", async () => {
  const response = await render("/notes");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /从玩家目标反推交互流程/);
  assert.match(html, /游戏 UI 中的即时反馈与节奏/);
  assert.match(html, /独立游戏界面原型的三个取舍/);
  assert.match(html, /笔记筛选/);
  assert.doesNotMatch(html, /work in progress/);
});

test("renders project detail content and record-specific metadata", async () => {
  const response = await render("/work/undying-map");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /《苏醒之路》地图界面重构设计案例/);
  assert.match(html, /重构地图迁移流程与区域信息层级/);
  assert.match(html, /\/assets\/projects\/undying-map\/home-cover\.png/);
  assert.match(html, /content-image-preview/);
  assert.match(html, /Open enlarged image/);
  assert.match(html, /<em>本项目美术素材均为原创；部分地点截图为游戏场景截图<\/em>/);
  assert.doesNotMatch(html, /\*本项目美术素材均为原创/);
  assert.doesNotMatch(html, /class="detail-cover"/);
  assert.doesNotMatch(html, /\/og\.png/);
});

test("renders note detail Markdown and clears inherited social image", async () => {
  const response = await render("/notes/game-ui-feedback");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /游戏 UI 中的即时反馈与节奏/);
  assert.match(html, /即时反馈如何帮助玩家理解操作结果/);
  assert.doesNotMatch(html, /\/og\.png/);
});

test("renders Markdown tables and mounts Mermaid diagrams in detail content", async () => {
  const response=await render("/notes/interaction-flow-review");
  assert.equal(response.status,200);
  const html=await response.text();
  assert.match(html,/<table>/);
  assert.match(html,/玩家为什么进入这个功能/);
  assert.match(html,/flowchart LR/);
});

test("renders an expandable visual drawing from Markdown", async () => {
  const response=await render("/notes/visual-drawing-workflow");
  assert.equal(response.status,200);
  const html=await response.text();
  assert.match(html,/content-drawing/);
  assert.match(html,/player-goal-flow\.webp/);
  assert.match(html,/地图导航流程|map navigation flow/);
});
