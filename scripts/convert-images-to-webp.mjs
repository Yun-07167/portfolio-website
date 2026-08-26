import { stat } from "node:fs/promises";
import { extname } from "node:path";
import sharp from "sharp";

const inputs=process.argv.slice(2);
if(inputs.length===0)throw new Error("Pass one or more image paths to convert.");

for(const input of inputs){
  const extension=extname(input);
  const output=input.slice(0,-extension.length)+".webp";
  await sharp(input).webp({quality:84,effort:6}).toFile(output);
  const [before,after]=await Promise.all([stat(input),stat(output)]);
  console.log(`${input} -> ${output}: ${before.size} -> ${after.size} bytes`);
}
