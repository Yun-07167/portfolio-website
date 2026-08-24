import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { resolve } from "node:path";
import matter from "gray-matter";

const root = resolve(import.meta.dirname, "..");
const outputDir = resolve(root, "pages-dist");
const port = 4173;
const origin = `http://127.0.0.1:${port}`;

async function publishedSlugs(relativeDirectory) {
  const { readdir } = await import("node:fs/promises");
  const directory = resolve(root, relativeDirectory);
  const files = await readdir(directory);
  const slugs = [];

  for (const filename of files.filter((name) => name.endsWith(".md"))) {
    const source = await readFile(resolve(directory, filename), "utf8");
    const data = matter(source).data;
    if (data.published === true && typeof data.slug === "string") slugs.push(data.slug);
  }

  return slugs;
}

async function collectRoutes() {
  const [zhProjects, enProjects, zhNotes, enNotes] = await Promise.all([
    publishedSlugs("content/zh/work/projects"),
    publishedSlugs("content/en/work/projects"),
    publishedSlugs("content/zh/notes"),
    publishedSlugs("content/en/notes"),
  ]);

  const projects = [...new Set([...zhProjects, ...enProjects])];
  const notes = [...new Set([...zhNotes, ...enNotes])];
  return [
    "/",
    "/about",
    "/resume",
    "/work",
    "/notes",
    ...projects.map((slug) => `/work/${slug}`),
    ...notes.map((slug) => `/notes/${slug}`),
  ];
}

async function waitForServer(child) {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error(`Preview server exited with code ${child.exitCode}.`);
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {}
    await new Promise((resolveWait) => setTimeout(resolveWait, 250));
  }
  throw new Error("Timed out waiting for the production preview server.");
}

async function exportRoute(route) {
  const response = await fetch(`${origin}${route}`);
  if (!response.ok) throw new Error(`${route} returned ${response.status}.`);
  const html = await response.text();
  const destination = route === "/"
    ? resolve(outputDir, "index.html")
    : resolve(outputDir, route.slice(1), "index.html");
  await mkdir(resolve(destination, ".."), { recursive: true });
  await writeFile(destination, html, "utf8");
  console.log(`Exported ${route}`);
}

async function stopServer(child) {
  if (child.exitCode !== null) return;
  if (process.platform === "win32") {
    await new Promise((resolveStop) => {
      const killer = spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" });
      killer.on("exit", resolveStop);
      killer.on("error", resolveStop);
    });
    return;
  }
  child.kill("SIGTERM");
  await new Promise((resolveStop) => {
    child.once("exit", resolveStop);
    setTimeout(resolveStop, 2_000);
  });
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(resolve(root, "dist/client"), outputDir, { recursive: true });

const child = spawn(process.execPath, [resolve(root, "node_modules/vinext/dist/cli.js"), "start", "--port", String(port)], {
  cwd: root,
  env: { ...process.env, PORT: String(port) },
  stdio: ["ignore", "inherit", "inherit"],
});

try {
  await waitForServer(child);
  const routes = await collectRoutes();
  for (const route of routes) await exportRoute(route);
  await writeFile(resolve(outputDir, "404.html"), await readFile(resolve(outputDir, "index.html"), "utf8"), "utf8");
  await writeFile(resolve(outputDir, "CNAME"), "www.tianyunyang.space\n", "utf8");
  await writeFile(resolve(outputDir, ".nojekyll"), "", "utf8");
  console.log(`GitHub Pages mirror contains ${routes.length} routes.`);
} finally {
  await stopServer(child);
}
