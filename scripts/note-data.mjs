import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import matter from "gray-matter";

const root = resolve(import.meta.dirname, "..");

function fail(message) { throw new Error(`[notes] ${message}`); }
function requireString(value, path) { if (typeof value !== "string" || value.trim() === "") fail(`${path} must be a non-empty string.`); }
function requireDate(value, path) {
  requireString(value, path);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`))) fail(`${path} must be a valid YYYY-MM-DD date.`);
}

export async function loadNoteLocale(locale) {
  const directory = resolve(root, `content/${locale}/notes`);
  let entries = [];
  try { entries = await readdir(directory, { withFileTypes: true }); }
  catch (error) { if (error?.code !== "ENOENT") throw error; }
  const files = entries.filter(entry => entry.isFile() && entry.name.endsWith(".md")).map(entry => entry.name).sort();
  const notes = new Map();
  for (const file of files) {
    const source = matter(await readFile(resolve(directory, file), "utf8"));
    const data = source.data;
    const path = `content/${locale}/notes/${file}`;
    for (const field of ["slug", "title"]) requireString(data[field], `${path}.${field}`);
    requireDate(data.published_at, `${path}.published_at`);
    if (!Array.isArray(data.tags) || data.tags.length === 0 || data.tags.some(tag => typeof tag !== "string" || !tag)) fail(`${path}.tags must be a non-empty string array.`);
    if (new Set(data.tags).size !== data.tags.length) fail(`${path}.tags contains duplicates.`);
    if (typeof data.published !== "boolean") fail(`${path}.published must be true or false.`);
    if (notes.has(data.slug)) fail(`Duplicate ${locale} note slug: ${data.slug}.`);
    notes.set(data.slug, { slug:data.slug, title:data.title, published_at:data.published_at, year:Number(data.published_at.slice(0,4)), tags:data.tags, published:data.published, body:source.content.trim() });
  }
  return notes;
}

export function validateNoteParity(notesZh, notesEn) {
  const slugs = new Set([...notesZh.keys(), ...notesEn.keys()]);
  for (const slug of slugs) {
    const zh = notesZh.get(slug); const en = notesEn.get(slug);
    if (!zh || !en) fail(`Note must exist in both locales: ${slug}.`);
    for (const field of ["published_at", "published"]) if (zh[field] !== en[field]) fail(`Note "${slug}" must use the same ${field} in both locales.`);
    if (JSON.stringify(zh.tags) !== JSON.stringify(en.tags)) fail(`Note "${slug}" must use the same tags in both locales.`);
  }
}

export function serializePublishedNotes(notes) {
  return [...notes.values()].filter(note => note.published).sort((a,b) => b.published_at.localeCompare(a.published_at) || a.slug.localeCompare(b.slug));
}
