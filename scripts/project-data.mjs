import { access, readFile, readdir } from "node:fs/promises";
import { resolve, sep } from "node:path";
import matter from "gray-matter";

const root = resolve(import.meta.dirname, "..");
const publicRoot = resolve(root, "public");

function fail(message) {
  throw new Error(`[projects] ${message}`);
}

function requireString(value, path) {
  if (typeof value !== "string" || value.trim() === "") fail(`${path} must be a non-empty string.`);
}

function assetFile(webPath) {
  requireString(webPath, "asset path");
  if (!webPath.startsWith("/assets/")) fail(`Asset paths must start with /assets/: ${webPath}.`);
  const file = resolve(publicRoot, webPath.slice(1));
  if (!file.startsWith(publicRoot + sep)) fail(`Asset path escapes public/: ${webPath}.`);
  return file;
}

async function assertAssetExists(webPath, path) {
  try {
    await access(assetFile(webPath));
  } catch {
    fail(`${path} references a missing asset: ${webPath}.`);
  }
}

export async function loadProjectLocale(locale) {
  const directory = resolve(root, `content/${locale}/work/projects`);
  const files = (await readdir(directory, { withFileTypes: true }))
    .filter(entry => entry.isFile() && entry.name.endsWith(".md"))
    .map(entry => entry.name)
    .sort();
  const projects = new Map();

  for (const file of files) {
    const source = matter(await readFile(resolve(directory, file), "utf8"));
    const data = source.data;
    const path = `content/${locale}/work/projects/${file}`;
    for (const field of ["slug", "title", "summary", "cover", "cover_alt", "home_thumbnail"]) {
      requireString(data[field], `${path}.${field}`);
    }
    if (!Number.isInteger(data.year)) fail(`${path}.year must be an integer.`);
    if (!Array.isArray(data.tags) || data.tags.length === 0 || data.tags.some(tag => typeof tag !== "string" || !tag)) {
      fail(`${path}.tags must be a non-empty string array.`);
    }
    if (new Set(data.tags).size !== data.tags.length) fail(`${path}.tags contains duplicates.`);
    if (typeof data.published !== "boolean") fail(`${path}.published must be true or false.`);
    if (!Number.isInteger(data.order)) fail(`${path}.order must be an integer.`);
    if (projects.has(data.slug)) fail(`Duplicate ${locale} project slug: ${data.slug}.`);
    await Promise.all([
      assertAssetExists(data.cover, `${path}.cover`),
      assertAssetExists(data.home_thumbnail, `${path}.home_thumbnail`),
    ]);
    projects.set(data.slug, {
      slug: data.slug,
      title: data.title,
      summary: data.summary,
      cover: data.cover,
      cover_alt: data.cover_alt,
      home_thumbnail: data.home_thumbnail,
      year: data.year,
      tags: data.tags,
      published: data.published,
      order: data.order,
      body: source.content.trim(),
    });
  }

  return projects;
}

export function validateProjectParity(projectsZh, projectsEn) {
  const slugs = new Set([...projectsZh.keys(), ...projectsEn.keys()]);
  for (const slug of slugs) {
    const zh = projectsZh.get(slug);
    const en = projectsEn.get(slug);
    if (!zh || !en) fail(`Project must exist in both locales: ${slug}.`);
    for (const field of ["year", "published", "order", "cover", "home_thumbnail"]) {
      if (zh[field] !== en[field]) fail(`Project "${slug}" must use the same ${field} in both locales.`);
    }
    if (JSON.stringify(zh.tags) !== JSON.stringify(en.tags)) fail(`Project "${slug}" must use the same tags in both locales.`);
  }
}

export function serializePublishedProjects(projects) {
  return [...projects.values()]
    .filter(project => project.published)
    .sort((a, b) => a.order - b.order || b.year - a.year || a.slug.localeCompare(b.slug));
}
