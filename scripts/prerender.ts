import { execFileSync } from "child_process";
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { resolve } from "path";

const MAX_PRERENDER_PAGES = Number(process.env.MAX_PRERENDER_PAGES || 100);
const ssrDir = resolve(".prerender");
const postsDir = resolve("src/content/blog");

const markdownFrontmatter = (source: string) => {
  const match = source.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {} as Record<string, string>;
  return Object.fromEntries(
    match[1].split("\n").flatMap((line) => {
      const index = line.indexOf(":");
      return index === -1
        ? []
        : [[line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^['"]|['"]$/g, "")]];
    }),
  );
};

rmSync(ssrDir, { recursive: true, force: true });
execFileSync("bunx", ["vite", "build", "--ssr", "src/ssr.tsx", "--outDir", ssrDir], { stdio: "inherit" });

const { SsrApp } = await import(`${ssrDir}/ssr.js`);
const { renderToString } = await import("react-dom/server");

const renderRoute = async (path: string) => {
  const helmetContext: Record<string, unknown> = {};
  const markup = renderToString(SsrApp({ location: path, helmetContext }));
  const helmet = helmetContext.helmet as {
    title: { toString: () => string };
    meta: { toString: () => string };
    link: { toString: () => string };
    script: { toString: () => string };
  };
  const template = readFileSync(resolve("dist/index.html"), "utf8");
  const cleanTemplate = template
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta name="description"[^>]*>/gi, "")
    .replace(/\s*<meta name="twitter:[^"]+"[^>]*>/gi, "")
    .replace(/\s*<meta property="og:[^"]+"[^>]*>/gi, "")
    .replace(/\s*<link rel="canonical"[^>]*>/gi, "")
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, "")
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    .replace("</head>", `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}${helmet.script.toString()}</head>`);
  return cleanTemplate;
};

const routes = ["/blog", ...posts.slice(0, MAX_PRERENDER_PAGES - 1).map((post) => `/blog/${post.slug}`)];
for (const route of routes) {
  const output = resolve("dist", `${route.slice(1)}/index.html`);
  mkdirSync(resolve(output, ".."), { recursive: true });
  writeFileSync(output, await renderRoute(route));
}

rmSync(ssrDir, { recursive: true, force: true });
console.log(`Pre-rendered ${routes.length} blog pages.`);
