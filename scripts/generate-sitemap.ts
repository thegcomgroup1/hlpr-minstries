// Runs before `vite dev` and `vite build`; writes public/sitemap.xml.
import { writeFileSync, readdirSync, readFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://ministries.hlpr.io";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const parseFrontmatter = (source: string) => {
  const match = source.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  return Object.fromEntries(
    match[1].split("\n").flatMap((line) => {
      const index = line.indexOf(":");
      return index === -1 ? [] : [[line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^['"]|['"]$/g, "")]];
    }),
  );
};

const postsDir = resolve("src/content/blog");
const postEntries: SitemapEntry[] = readdirSync(postsDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => parseFrontmatter(readFileSync(resolve(postsDir, file), "utf8")))
  .filter((data) => typeof data.slug === "string" && data.slug.length > 0)
  .map((data) => ({
    path: `/blog/${data.slug}`,
    lastmod: data.publishDate,
    changefreq: "monthly" as const,
    priority: "0.6",
  }));

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  ...postEntries,
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

const xml = entries.map((entry) => [
  "  <url>",
  `    <loc>${BASE_URL}${entry.path}</loc>`,
  entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : null,
  entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
  entry.priority ? `    <priority>${entry.priority}</priority>` : null,
  "  </url>",
].filter(Boolean).join("\n"));

writeFileSync(resolve("public/sitemap.xml"), [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...xml,
  "</urlset>",
].join("\n"));
console.log(`sitemap.xml written (${entries.length} entries)`);
