import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import matter from "gray-matter";
import { loadHomeShowcase } from "./home-showcase-data.mjs";
import { loadProjectLocale, serializePublishedProjects, validateProjectParity } from "./project-data.mjs";

const root = resolve(import.meta.dirname, "..");

async function readFrontMatter(relativePath) {
  const source = await readFile(resolve(root, relativePath), "utf8");
  return matter(source).data;
}

function requireString(value, path) {
  if (typeof value !== "string") throw new TypeError(`${path} must be a string.`);
}

function requireItems(section, path) {
  if (!section || !Array.isArray(section.items)) throw new TypeError(`${path}.items must be an array.`);
  return section.items;
}

function validateResume(resume, locale) {
  const root = `content/${locale}/resume.md`;
  requireString(resume?.name, `${root}.name`);
  requireString(resume?.profile?.title, `${root}.profile.title`);
  requireString(resume?.profile?.body, `${root}.profile.body`);

  for (const [index, item] of requireItems(resume.education, `${root}.education`).entries()) {
    for (const field of ["id", "institution", "institution_en", "qualification", "qualification_en", "date"]) {
      requireString(item[field], `${root}.education.items[${index}].${field}`);
    }
  }

  for (const [index, item] of requireItems(resume.experience, `${root}.experience`).entries()) {
    for (const field of ["id", "heading", "date", "body"]) requireString(item[field], `${root}.experience.items[${index}].${field}`);
    if (!Array.isArray(item.labels) || item.labels.some(label => typeof label !== "string")) {
      throw new TypeError(`${root}.experience.items[${index}].labels must be a string array.`);
    }
  }

  for (const [index, item] of requireItems(resume.other_experience, `${root}.other_experience`).entries()) {
    for (const field of ["id", "title", "context", "date", "description"]) {
      requireString(item[field], `${root}.other_experience.items[${index}].${field}`);
    }
  }

  requireString(resume?.gaming_experience?.title, `${root}.gaming_experience.title`);
  requireString(resume?.gaming_experience?.body, `${root}.gaming_experience.body`);
}

async function readLocale(locale, projects) {
  const base = `content/${locale}`;
  const [global, home, work, resume, about, notes] = await Promise.all([
    readFrontMatter(`${base}/global.md`),
    readFrontMatter(`${base}/home.md`),
    readFrontMatter(`${base}/work.md`),
    readFrontMatter(`${base}/resume.md`),
    readFrontMatter(`${base}/about.md`),
    readFrontMatter(`${base}/notes.md`),
  ]);

  validateResume(resume, locale);
  const tagLabels = work?.tag_labels;
  if (!tagLabels || typeof tagLabels !== "object" || Array.isArray(tagLabels)) {
    throw new TypeError(`content/${locale}/work.md.tag_labels must be an object.`);
  }
  for (const project of projects.values()) {
    for (const tag of project.tags) requireString(tagLabels[tag], `content/${locale}/work.md.tag_labels.${tag}`);
  }
  return { global, home, work: { ...work, projects: serializePublishedProjects(projects) }, resume, about, notes };
}

const [projectsZh, projectsEn] = await Promise.all([loadProjectLocale("zh"), loadProjectLocale("en")]);
validateProjectParity(projectsZh, projectsEn);

const content = {
  zh: await readLocale("zh", projectsZh),
  en: await readLocale("en", projectsEn),
  homeShowcase: await loadHomeShowcase(),
};

const outputPath = resolve(root, "app/generated-content.ts");
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(
  outputPath,
  `// Generated from content/**/*.md. Edit Markdown, not this file.\nexport const siteContent = ${JSON.stringify(content, null, 2)} as const;\n`,
  "utf8",
);

console.log("Generated app/generated-content.ts from Markdown content.");
