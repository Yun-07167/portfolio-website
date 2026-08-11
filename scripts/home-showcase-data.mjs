import { access, readFile, readdir } from "node:fs/promises";
import { relative, resolve, sep } from "node:path";
import matter from "gray-matter";

const root = resolve(import.meta.dirname, "..");
const publicRoot = resolve(root, "public");
const allowedTypes = new Set(["project", "snapshot", "decorative"]);
const allowedSlots = new Set([
  "featured-left",
  "featured-right",
  "snapshot-left-01",
  "snapshot-left-02",
  "snapshot-right-01",
  "snapshot-right-02",
  "decoration-top",
  "decoration-bottom",
]);

function fail(message) {
  throw new Error(`[home-showcase] ${message}`);
}

async function readProjectIndex(locale) {
  const directory = resolve(root, `content/${locale}/work/projects`);
  const files = (await readdir(directory, { withFileTypes: true }))
    .filter(entry => entry.isFile() && entry.name.endsWith(".md"))
    .map(entry => entry.name)
    .sort();
  const projects = new Map();

  for (const file of files) {
    const data = matter(await readFile(resolve(directory, file), "utf8")).data;
    if (!data.slug || typeof data.slug !== "string") fail(`${locale}/${file} is missing a string slug.`);
    if (projects.has(data.slug)) fail(`Duplicate ${locale} project slug: ${data.slug}.`);
    if (!data.title || typeof data.title !== "string") fail(`${locale}/${file} is missing a title.`);
    if (!data.home_thumbnail || typeof data.home_thumbnail !== "string") fail(`${locale}/${file} is missing home_thumbnail.`);
    projects.set(data.slug, data);
  }

  return projects;
}

function assetFile(webPath) {
  if (typeof webPath !== "string" || !webPath.startsWith("/assets/")) {
    fail(`Asset paths must start with /assets/: ${String(webPath)}.`);
  }
  const file = resolve(publicRoot, webPath.slice(1));
  if (!file.startsWith(publicRoot + sep)) fail(`Asset path escapes public/: ${webPath}.`);
  return file;
}

async function assertAssetExists(webPath, id) {
  try {
    await access(assetFile(webPath));
  } catch {
    fail(`Item "${id}" references a missing asset: ${webPath}.`);
  }
}

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true }).catch(() => []);
  const files = [];
  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listFiles(path));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

function toWebPath(file) {
  return `/${relative(publicRoot, file).split(sep).join("/")}`;
}

export async function loadHomeShowcase() {
  const manifestPath = resolve(root, "content/home-showcase.md");
  const manifest = matter(await readFile(manifestPath, "utf8")).data;
  if (!Array.isArray(manifest.items)) fail("content/home-showcase.md must define an items array.");

  const [projectsZh, projectsEn] = await Promise.all([readProjectIndex("zh"), readProjectIndex("en")]);
  const ids = new Set();
  const activeSlots = new Set();
  const referencedAssets = new Set();
  const hiddenItems = [];
  const items = [];

  for (const source of manifest.items) {
    if (!source || typeof source !== "object") fail("Every items entry must be an object.");
    if (!source.id || typeof source.id !== "string") fail("Every item needs a string id.");
    if (ids.has(source.id)) fail(`Duplicate item id: ${source.id}.`);
    ids.add(source.id);
    if (!allowedTypes.has(source.type)) fail(`Item "${source.id}" has invalid type "${source.type}".`);
    if (!allowedSlots.has(source.slot)) fail(`Item "${source.id}" has unknown slot "${source.slot}".`);
    if (typeof source.enabled !== "boolean") fail(`Item "${source.id}" must set enabled to true or false.`);

    let image;
    let alt;
    let href;

    if (source.type === "project") {
      if (!source.project || typeof source.project !== "string") fail(`Project item "${source.id}" needs a project slug.`);
      const zh = projectsZh.get(source.project);
      const en = projectsEn.get(source.project);
      if (!zh || !en) fail(`Project item "${source.id}" must exist in both zh and en project folders: ${source.project}.`);
      if (zh.published === false || en.published === false) fail(`Project item "${source.id}" references an unpublished project.`);
      if (zh.home_thumbnail !== en.home_thumbnail) fail(`Project "${source.project}" uses different home_thumbnail paths across locales.`);
      image = zh.home_thumbnail;
      alt = { zh: zh.title, en: en.title };
      href = `/work?project=${source.project}`;
    } else {
      image = source.image;
      if (source.type === "snapshot") {
        if (!source.alt_zh || !source.alt_en) fail(`Snapshot "${source.id}" needs alt_zh and alt_en.`);
        alt = { zh: source.alt_zh, en: source.alt_en };
      } else {
        alt = { zh: "", en: "" };
      }
    }

    await assertAssetExists(image, source.id);
    referencedAssets.add(image);

    if (!source.enabled) {
      hiddenItems.push(source.id);
      continue;
    }
    if (activeSlots.has(source.slot)) fail(`Enabled items cannot share slot "${source.slot}".`);
    activeSlots.add(source.slot);
    items.push({ id: source.id, type: source.type, image, alt, slot: source.slot, ...(href ? { href } : {}) });
  }

  const homeAssets = await listFiles(resolve(publicRoot, "assets/home"));
  const projectAssets = (await listFiles(resolve(publicRoot, "assets/projects")))
    .filter(file => /^home-(cover|thumbnail)\./i.test(file.split(sep).at(-1) ?? ""));
  const managedAssets = [...homeAssets, ...projectAssets].map(toWebPath).sort();
  const unusedManagedAssets = managedAssets.filter(path => !referencedAssets.has(path));
  const archivedLegacyAssets = (await listFiles(resolve(publicRoot, "assets/archive/home-legacy"))).map(toWebPath).sort();

  return {
    items,
    audit: {
      source_item_count: manifest.items.length,
      rendered_item_count: items.length,
      hidden_items: hiddenItems,
      unused_managed_assets: unusedManagedAssets,
      archived_legacy_assets: archivedLegacyAssets,
    },
  };
}
