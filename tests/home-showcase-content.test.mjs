import test from "node:test";
import assert from "node:assert/strict";
import { loadHomeShowcase } from "../scripts/home-showcase-data.mjs";

test("Home showcase content resolves every enabled document item", async () => {
  const showcase = await loadHomeShowcase();
  assert.equal(showcase.audit.source_item_count, 8);
  assert.equal(showcase.audit.rendered_item_count, 8);
  assert.deepEqual(showcase.audit.hidden_items, []);
  assert.deepEqual(showcase.audit.unused_managed_assets, []);
  assert.equal(new Set(showcase.items.map(item => item.id)).size, showcase.items.length);
  assert.equal(new Set(showcase.items.map(item => item.slot)).size, showcase.items.length);
});

test("Home showcase project and interaction types resolve correctly", async () => {
  const { items } = await loadHomeShowcase();
  const projectItems = items.filter(item => item.type === "project");
  const snapshots = items.filter(item => item.type === "snapshot");
  const decorations = items.filter(item => item.type === "decorative");

  assert.equal(projectItems.length, 2);
  assert.equal(snapshots.length, 4);
  assert.equal(decorations.length, 2);
  for (const item of projectItems) assert.match(item.href, /^\/work\?project=[a-z0-9-]+$/);
  for (const item of snapshots) {
    assert.ok(item.alt.zh);
    assert.ok(item.alt.en);
  }
});
