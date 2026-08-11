import { loadHomeShowcase } from "./home-showcase-data.mjs";

const showcase = await loadHomeShowcase();
const audit = showcase.audit;

console.log(`Home showcase: ${audit.rendered_item_count}/${audit.source_item_count} documented items will render.`);
console.log(`Hidden by enabled:false: ${audit.hidden_items.length ? audit.hidden_items.join(", ") : "none"}.`);
console.log(`Unused managed assets: ${audit.unused_managed_assets.length ? audit.unused_managed_assets.join(", ") : "none"}.`);
console.log(`Archived legacy assets: ${audit.archived_legacy_assets.length ? audit.archived_legacy_assets.join(", ") : "none"}.`);

if (audit.unused_managed_assets.length) {
  throw new Error("Managed Home assets exist but are not referenced by content/home-showcase.md.");
}
