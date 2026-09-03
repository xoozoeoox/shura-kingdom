import sharp from "sharp";

const source = "public/kingdom-buildings-overlay.png";
const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;
const count = width * height;
const removable = new Uint8Array(count);
const outside = new Uint8Array(count);
const queue = new Int32Array(count);
let head = 0;
let tail = 0;

for (let pixel = 0; pixel < count; pixel++) {
  const offset = pixel * 4;
  const alpha = data[offset + 3];
  const red = data[offset];
  const green = data[offset + 1];
  const blue = data[offset + 2];
  const maximum = Math.max(red, green, blue);
  const minimum = Math.min(red, green, blue);
  removable[pixel] = alpha === 255 && maximum >= 175 && maximum - minimum <= 14 ? 1 : 0;
  if (alpha === 0) {
    outside[pixel] = 1;
    queue[tail++] = pixel;
  }
}

while (head < tail) {
  const pixel = queue[head++];
  const x = pixel % width;
  const candidates = [pixel - width, pixel + width, pixel - 1, pixel + 1];
  for (let index = 0; index < candidates.length; index++) {
    const next = candidates[index];
    if (next < 0 || next >= count || outside[next]) continue;
    if ((index === 2 && x === 0) || (index === 3 && x === width - 1)) continue;
    if (!removable[next]) continue;
    outside[next] = 1;
    queue[tail++] = next;
  }
}

let removed = 0;
for (let pixel = 0; pixel < count; pixel++) {
  if (!outside[pixel] || data[pixel * 4 + 3] === 0) continue;
  data[pixel * 4 + 3] = 0;
  removed++;
}

await sharp(data, { raw: { width, height, channels: 4 } }).png().toFile("kingdom-buildings-overlay-cleaned.png");
await sharp("public/kingdom-empty-base.png")
  .composite([{ input: "kingdom-buildings-overlay-cleaned.png" }])
  .png()
  .toFile("shura-kingdom-16bit-cleaned.png");

console.log(`Removed ${removed} connected matte pixels.`);
