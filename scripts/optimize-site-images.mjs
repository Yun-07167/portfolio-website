import { copyFile, mkdir, readdir, stat } from "node:fs/promises";
import { dirname, extname, join, relative } from "node:path";
import { tmpdir } from "node:os";
import sharp from "sharp";

const publicRoot = join(process.cwd(), "public");
const scratchRoot = join(tmpdir(), "portfolio-image-optimization");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

async function optimizePng(file) {
  const output = join(scratchRoot, relative(publicRoot, file));
  await mkdir(dirname(output), { recursive: true });
  await sharp(file).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(output);

  const [before, after] = await Promise.all([stat(file), stat(output)]);
  if (after.size >= before.size) return { before: before.size, after: before.size };

  await copyFile(output, file);
  return { before: before.size, after: after.size };
}

const pngs = (await walk(publicRoot)).filter((file) => extname(file).toLowerCase() === ".png");
let beforeTotal = 0;
let afterTotal = 0;
let changed = 0;

for (const file of pngs) {
  const result = await optimizePng(file);
  beforeTotal += result.before;
  afterTotal += result.after;
  if (result.after < result.before) changed += 1;
}

console.log(JSON.stringify({
  scanned: pngs.length,
  changed,
  beforeBytes: beforeTotal,
  afterBytes: afterTotal,
  savedBytes: beforeTotal - afterTotal,
}, null, 2));
