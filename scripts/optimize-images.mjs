import sharp from "sharp";
import { stat } from "node:fs/promises";

const images = [
  "seo-best.jpg", "db-optimization.jpg", "mobile-dev.jpg", "react-hooks.jpg", "api-security.jpg", "responsive-css.jpg", "future-web.jpg",
  "h-banner-4.jpg", "h-banner-3.jpg", "h-banner-1.jpg", "banner-3.jpg", "banner-8.jpeg", "banner-9.jpeg", "og-banner.jpg",
];
const root = new URL("../public/assets/images/", import.meta.url);
let before = 0; let after = 0;
for (const name of images) {
  const input = new URL(name, root); const output = new URL(name.replace(/\.(jpe?g)$/i, ".webp"), root);
  const source = await stat(input); before += source.size;
  await sharp(input.pathname).rotate().resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(output.pathname);
  const result = await stat(output); after += result.size;
  console.log(`${name}\t${source.size}\t${result.size}`);
}
console.log(`TOTAL\t${before}\t${after}`);
