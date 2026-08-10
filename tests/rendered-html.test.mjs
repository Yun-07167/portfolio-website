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

test("renders the reserved Notes route", async () => {
  const response = await render("/notes");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /work in progress/);
});
