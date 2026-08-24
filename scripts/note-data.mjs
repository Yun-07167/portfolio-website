import { access, readFile, readdir } from "node:fs/promises";
import { resolve, sep } from "node:path";
import matter from "gray-matter";
import { inspectContentBody } from "./content-body.mjs";

const root = resolve(import.meta.dirname, "..");
const publicRoot = resolve(root, "public");

function fail(message) { throw new Error(`[notes] ${message}`); }
function requireString(value, path) { if (typeof value !== "string" || value.trim() === "") fail(`${path} must be a non-empty string.`); }
function normalizeDate(value, path) {
  const normalized = value instanceof Date && !Number.isNaN(value.getTime())
    ? value.toISOString().slice(0, 10)
    : value;
  requireString(normalized, path);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized) || Number.isNaN(Date.parse(`${normalized}T00:00:00Z`))) fail(`${path} must be a valid YYYY-MM-DD date.`);
  return normalized;
}
async function assertAssetExists(webPath, path) {
  requireString(webPath, path);
  if (!webPath.startsWith("/assets/")) fail(`${path} must start with /assets/: ${webPath}`);
  const file = resolve(publicRoot, webPath.slice(1));
  if (!file.startsWith(publicRoot + sep)) fail(`${path} escapes public/: ${webPath}`);
  try { await access(file); } catch { fail(`${path} references a missing asset: ${webPath}`); }
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
    const publishedAt = normalizeDate(data.published_at, `${path}.published_at`);
    if (!Array.isArray(data.tags) || data.tags.length === 0 || data.tags.some(tag => typeof tag !== "string" || !tag)) fail(`${path}.tags must be a non-empty string array.`);
    if (new Set(data.tags).size !== data.tags.length) fail(`${path}.tags contains duplicates.`);
    if (typeof data.published !== "boolean") fail(`${path}.published must be true or false.`);
    if (notes.has(data.slug)) fail(`Duplicate ${locale} note slug: ${data.slug}.`);
    const body = source.content.trim();
    const bodyAudit = inspectContentBody(body, path);
    await Promise.all(bodyAudit.media.flatMap((item, index) => {
      const checks = [assertAssetExists(item.src, `${path}.body.media[${index}].src`)];
      if (item.poster) checks.push(assertAssetExists(item.poster, `${path}.body.media[${index}].poster`));
      if (item.captions) checks.push(assertAssetExists(item.captions, `${path}.body.media[${index}].captions`));
      return checks;
    }));
    notes.set(data.slug, { slug:data.slug, title:data.title, published_at:publishedAt, year:Number(publishedAt.slice(0,4)), tags:data.tags, published:data.published, body, body_signature:bodyAudit.signature });
  }
  return notes;
}

export function validateNoteParity(notesZh, notesEn) {
  const slugs = new Set([...notesZh.keys(), ...notesEn.keys()]);
  for (const slug of slugs) {
    const zh = notesZh.get(slug); const en = notesEn.get(slug);
    // Notes can be published, dated, and ordered by date independently per locale.
    if (!zh || !en) continue;
    if (JSON.stringify(zh.tags) !== JSON.stringify(en.tags)) fail(`Note "${slug}" must use the same tags in both locales.`);
    if (JSON.stringify(zh.body_signature) !== JSON.stringify(en.body_signature)) fail(`Note "${slug}" must use matching heading and media structure in both locales.`);
  }
}

export function serializePublishedNotes(notes) {
  return [...notes.values()].filter(note => note.published).sort((a,b) => b.published_at.localeCompare(a.published_at) || a.slug.localeCompare(b.slug)).map(note => { const result={...note}; delete result.body_signature; return result; });
}
