import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = fileURLToPath(new URL("../out/", import.meta.url));
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const textExtensions = new Set([".html", ".js", ".css", ".json", ".txt"]);

async function rewrite(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewrite(file);
      continue;
    }
    if (!basePath || !textExtensions.has(entry.name.slice(entry.name.lastIndexOf(".")))) continue;
    const source = await readFile(file, "utf8");
    const prefixed = source.replace(/(["'])\/(?=[A-Za-z0-9_.-])/g, (match, quote, offset) => {
      return source.startsWith(`${quote}${basePath}/`, offset) ? match : `${quote}${basePath}/`;
    });
    if (prefixed !== source) await writeFile(file, prefixed);
  }
}

await rewrite(outputDirectory);
