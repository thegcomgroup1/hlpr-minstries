# Markdown blog with real pre-rendered HTML at /blog

Goal: blog posts whose full text is in the raw HTML response before any JavaScript runs, so Google (and any crawler that doesn't execute JS) indexes them immediately. Everything outside the blog stays untouched.

## What changes

1. **Posts become markdown files.** New folder `src/content/blog/`, one `.md` per post with frontmatter: `title, slug, metaTitle, metaDescription, publishDate, featuredImage, excerpt`. Adding a post = adding a file.
2. **The two existing posts** (`church-website-cost-2026`, `church-website-checklist`) get converted to markdown at the same URLs, and the old `.tsx` post files plus the `src/content/posts` loader are removed. One system, no duplicates.
3. **One new placeholder post** so the routes can be verified end to end.
4. **Pre-rendering at build time.** After `vite build`, a script renders `/blog` and every `/blog/<slug>` to real static HTML files in `dist/`, each with the full post body, head tags, and JSON-LD baked in. React then hydrates on top, so behavior is unchanged for users.
5. **Sitemap** regenerates from the markdown files (index + every post). `robots.txt` is confirmed not to block `/blog`.
6. **No nav link yet** — `/blog` stays out of the header and footer while post #1 is a placeholder. As soon as you've read post #1 on the live domain, the nav link goes in so the posts aren't orphaned and homepage authority flows to them. This is a tracked follow-up, not a permanent state.
7. **URL form is canonical without a trailing slash** — `/blog/my-post`, never `/blog/my-post/`. Canonical tag, sitemap entry, and every internal link use that exact form, and the trailing-slash variant redirects to it, so Google never sees two URLs for one page.

## Per-post SEO (baked into the static HTML)

Unique title/description, self-referencing canonical, `og:title/description/image/url`, `og:type=article`, `twitter:summary_large_image`, and `BlogPosting` JSON-LD. Exactly one `<h1>` (the post title); markdown `##`/`###` render as real `<h2>`/`<h3>`.

JSON-LD values are pinned, not guessed:
- `author`: Person, name "Tim Godson"
- `publisher`: Organization, name "hlpr Ministries", logo pointing at the existing hlpr logo asset in this project
- `headline`, `description`, `image`, `datePublished` come from the post frontmatter


## Design

Existing design system only — same colors, fonts, spacing, header, footer. Post page: title, date, featured image, body at ~700px max width, mobile first, and a CTA block at the bottom defined in one place (`src/lib/content.ts`) so you edit it once. Index page: card list with featured image, title, excerpt, date, newest first. No pagination, categories, or tags.

## Technical notes

- Markdown parsing: `react-markdown` + `remark-gfm` and a tiny frontmatter parser; markdown is loaded via `import.meta.glob('../content/blog/*.md', { as: 'raw', eager: true })`. No other new dependencies.
- Pre-render step: `scripts/prerender.ts` added as a `postbuild` script. It builds an SSR bundle of the app, renders each blog route with `renderToString` + `StaticRouter` + `HelmetProvider`, injects markup and head tags into the built `index.html` template, and writes `dist/blog/index.html` and `dist/blog/<slug>/index.html`.
- Browser-only code (Clarity, consent, `window`/`document` access) is guarded so SSR doesn't crash; the analytics scripts still only run client side after consent.
- `scripts/generate-sitemap.ts` switches its post discovery from `src/content/posts/*.tsx` to the markdown frontmatter. `lastmod` comes from each post's `publishDate`, not build time.

### Two things to verify after publish

- The Lovable preview runs the dev server, so pre-rendered files only exist in the published build. Verification has to happen against the live domain with the curl grep test.
- Static hosting must serve `dist/blog/<slug>/index.html` for that path instead of falling back to the SPA `index.html`. If the curl test returns 0 after publish, that fallback is the cause and the fix is to adjust how those routes are emitted — I'll re-check and correct it rather than leaving it client-rendered.

## Out of scope (but worth acting on)

The public GitHub repo with a committed `.env`: rotate the exposed keys and make the repo private before opening it further. The backend keys in this project can be rotated from the backend settings; I can't change GitHub repo visibility from here.
