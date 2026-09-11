import { readFile, writeFile } from "node:fs/promises";

const base = "https://codmonks.com";
const blogData = await readFile(new URL("../data/BlogData.ts", import.meta.url), "utf8");
const blogPaths = [...blogData.matchAll(/id:\s*['\"]([^'\"]+)['\"]/g)].map(([, id]) => `/blogs/${id}`);
const paths = ["/", "/about-us", "/services", "/technologies", "/portfolio", "/blogs", "/contact", "/privacy-policy", ...blogPaths];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(path => `  <url><loc>${base}${path}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile(new URL("../public/sitemap.xml", import.meta.url), xml);
