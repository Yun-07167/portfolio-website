import { cp, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const sourceRoot=path.resolve("content-drawings");
const targetRoot=path.resolve("public/assets/drawings");
const exportPattern=/\.(svg|png|webp)$/i;

async function walk(directory) {
  const entries=await readdir(directory,{withFileTypes:true});
  const files=[];
  for(const entry of entries) {
    const absolute=path.join(directory,entry.name);
    if(entry.isDirectory())files.push(...await walk(absolute));
    else if(exportPattern.test(entry.name))files.push(absolute);
  }
  return files;
}

await mkdir(sourceRoot,{recursive:true});
const drawings=await walk(sourceRoot);
for(const source of drawings) {
  const relative=path.relative(sourceRoot,source);
  const target=path.join(targetRoot,relative);
  await mkdir(path.dirname(target),{recursive:true});
  await cp(source,target);
}

console.log(`Synced ${drawings.length} drawing export${drawings.length===1?"":"s"}.`);
