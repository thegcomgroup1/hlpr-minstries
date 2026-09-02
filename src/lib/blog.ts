// Blog registry. Posts are markdown files in src/content/blog/*.md with frontmatter.
// Adding a post = adding a file. No CMS, no database.

export interface BlogPost {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  publishDate: string; // ISO yyyy-mm-dd
  featuredImage: string;
  excerpt: string;
  body: string; // markdown
}

const stripQuotes = (v: string) => {
  const t = v.trim();
  if (
    (t.startsWith('"') && t.endsWith('"')) ||
    (t.startsWith("'") && t.endsWith("'"))
  ) {
    return t.slice(1, -1);
  }
  return t;
};

/** Minimal frontmatter parser: `key: value` lines between leading `---` fences. */
export function parseMarkdown(raw: string): { data: Record<string, string>; body: string } {
  const normalized = raw.replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, body: normalized.trim() };

  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    if (!key) continue;
    data[key] = stripQuotes(line.slice(idx + 1));
  }

  return { data, body: normalized.slice(match[0].length).trim() };
}

export function toPost(raw: string, fallbackSlug: string): BlogPost | null {
  const { data, body } = parseMarkdown(raw);
  const slug = data.slug || fallbackSlug;
  if (!slug || !data.title) return null;
  return {
    title: data.title,
    slug,
    metaTitle: data.metaTitle || data.title,
    metaDescription: data.metaDescription || data.excerpt || "",
    publishDate: data.publishDate || "",
    featuredImage: data.featuredImage || "/og-home.jpg",
    excerpt: data.excerpt || data.metaDescription || "",
    body,
  };
}

const modules = import.meta.glob<string>("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const posts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) =>
    toPost(raw, path.split("/").pop()!.replace(/\.md$/, "")),
  )
  .filter((p): p is BlogPost => p !== null)
  .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));

export const getPost = (slug: string): BlogPost | undefined =>
  posts.find((p) => p.slug === slug);

export const SITE_URL = "https://ministries.hlpr.io";

/** Canonical URL for a post — never a trailing slash. */
export const postUrl = (slug: string) => `${SITE_URL}/blog/${slug}`;
