import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link, useLocation, useParams, Navigate, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { ArrowRight, X, Menu, Linkedin, ArrowLeft } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const BUSINESS = {
  name: "HLPR for Ministries",
  shortName: "HLPR",
  tagline: "Church websites that breathe.",
  domain: "ministries.hlpr.io",
  ctaUrl: "https://links.hlpr.io/widget/booking/gPnL2RU578xVCKw8faDS?utm_source=ministries-lp&utm_medium=cta&utm_campaign=organic",
  ctaLabel: "See My Homepage Preview",
  riskReversal: "We build your homepage first. You only pay if you want us to finish it.",
  riskReversalShort: "Built before you pay · Live in 14 days · Cancel anytime"
};
const NAV_LINKS = [
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Packages", href: "/#pricing" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Founder", href: "/#founder" },
  { label: "FAQ", href: "/#faq" }
];
const BLOG_CTA = {
  heading: "Ready to see what your ministry's site could look like?",
  body: "We'll build a free homepage preview in 72 hours. No payment until you approve.",
  buttonLabel: "Get my free preview"
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const CtaButton = ({
  href,
  label,
  size = "lg",
  className,
  ariaLabel
}) => {
  const sizes = {
    md: "px-6 py-3 text-base",
    lg: "px-7 py-4 text-base sm:text-lg",
    xl: "px-8 py-5 text-lg sm:text-xl"
  };
  const handleClick = () => {
    var _a, _b;
    try {
      (_a = window.fbq) == null ? void 0 : _a.call(window, "track", "Lead");
      (_b = window.gtag) == null ? void 0 : _b.call(window, "event", "generate_lead", {
        value: 0,
        currency: "USD",
        transport_type: "beacon"
      });
    } catch (err) {
      console.warn("Tracking error (non-blocking):", err);
    }
  };
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: handleClick,
      "aria-label": ariaLabel ?? label,
      className: cn(
        "group inline-flex items-center justify-center gap-2 rounded-xl font-bold tracking-tight",
        "bg-brand-amber text-brand-amber-foreground shadow-cta",
        "transition-all duration-200 ease-out",
        "hover:bg-brand-amber-hover hover:scale-[1.02] hover:shadow-elevated",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-amber/40",
        "min-h-[44px]",
        sizes[size],
        className
      ),
      children: [
        /* @__PURE__ */ jsx("span", { children: label }),
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 transition-transform group-hover:translate-x-0.5", "aria-hidden": true })
      ]
    }
  );
};
const hlprLogo = "/assets/hlpr-logo-y3R8BWEr.png";
const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur shadow-soft border-b border-border" : "bg-transparent"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex h-16 sm:h-20 items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2.5 sm:gap-3 group", "aria-label": `${BUSINESS.name} home`, children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: hlprLogo,
                alt: "HLPR",
                className: "h-7 sm:h-8 w-auto select-none",
                draggable: false
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:block h-6 w-px bg-brand-navy/20", "aria-hidden": true }),
            /* @__PURE__ */ jsx("span", { className: "font-serif text-sm sm:text-base font-medium text-brand-navy-soft tracking-tight leading-none", children: "for Ministries" })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-8", "aria-label": "Primary", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: "text-sm font-medium text-brand-navy-soft hover:text-brand-navy transition-colors",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(CtaButton, { href: BUSINESS.ctaUrl, label: "Free Preview", size: "md", className: "hidden sm:inline-flex" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                "aria-label": open ? "Close menu" : "Open menu",
                "aria-expanded": open,
                onClick: () => setOpen((v) => !v),
                className: "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-navy hover:bg-muted",
                children: open ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxs(
          "nav",
          {
            className: "lg:hidden pb-5 pt-2 flex flex-col gap-1 border-t border-border",
            "aria-label": "Mobile",
            children: [
              NAV_LINKS.map((l) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "px-3 py-3 text-base font-medium text-brand-navy hover:bg-muted rounded-lg min-h-[44px] flex items-center",
                  children: l.label
                },
                l.href
              )),
              /* @__PURE__ */ jsx("div", { className: "sm:hidden pt-2", children: /* @__PURE__ */ jsx(CtaButton, { href: BUSINESS.ctaUrl, label: BUSINESS.ctaLabel, size: "md", className: "w-full" }) })
            ]
          }
        )
      ] })
    }
  );
};
const KEY = "hlpr_consent";
const EVENT = "hlpr:consent-change";
function resetConsent() {
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new CustomEvent(EVENT, { detail: "unset" }));
}
const Footer = () => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "bg-brand-navy-deep text-brand-cream/80", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 sm:py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: hlprLogo,
              alt: "HLPR",
              className: "h-8 w-auto select-none",
              draggable: false
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "h-6 w-px bg-brand-cream/25", "aria-hidden": true }),
          /* @__PURE__ */ jsx("span", { className: "font-serif text-base font-medium text-brand-cream/80 tracking-tight leading-none", children: "for Ministries" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed max-w-sm", children: "Done-for-you church website design, build, & management. Modern, mobile-first sites live in 14 days, fully managed forever." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            "aria-label": "HLPR for Ministries on LinkedIn",
            className: "mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy hover:bg-brand-navy-soft transition-colors",
            children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4 text-brand-cream", "aria-hidden": true })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "nav",
        {
          className: "md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm",
          "aria-label": "Footer",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-serif text-sm font-bold uppercase tracking-wider text-brand-cream/90", children: "Explore" }),
              /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2.5", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: l.href, className: "hover:text-brand-blue transition-colors", children: l.label }) }, l.href)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-serif text-sm font-bold uppercase tracking-wider text-brand-cream/90", children: "About" }),
              /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2.5", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#founder", className: "hover:text-brand-blue transition-colors", children: "Our Story" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#founder", className: "hover:text-brand-blue transition-colors", children: "Founder" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-serif text-sm font-bold uppercase tracking-wider text-brand-cream/90", children: "Contact" }),
              /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2.5", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: BUSINESS.ctaUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:text-brand-blue transition-colors",
                    children: "Book a preview"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:tim@hlpr.io", className: "hover:text-brand-blue transition-colors", children: "tim@hlpr.io" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+13025508521", className: "hover:text-brand-blue transition-colors", children: "302-550-8521" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-serif text-sm font-bold uppercase tracking-wider text-brand-cream/90", children: "Legal" }),
              /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2.5", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/privacy", className: "hover:text-brand-blue transition-colors", children: "Privacy" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/terms", className: "hover:text-brand-blue transition-colors", children: "Terms" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => resetConsent(),
                    className: "hover:text-brand-blue transition-colors text-left",
                    children: "Cookie preferences"
                  }
                ) })
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-8 border-t border-brand-cream/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-brand-cream/90", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        year,
        " HLPR for Ministries. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Built for the kingdom, not for portfolios." })
    ] })
  ] }) });
};
const __vite_glob_0_0 = `---
title: "Church website checklist: 12 pages every ministry site needs in 2026"
slug: church-website-checklist
metaTitle: "Church Website Checklist: 12 Pages Every Ministry Site Needs"
metaDescription: The pages, sections, and details that actually matter for a modern church website — based on what visitors look for in the first 30 seconds.
publishDate: 2026-05-10
featuredImage: /og-home.jpg
excerpt: The pages, sections, and details that actually matter for a modern church website — based on what visitors look for in the first 30 seconds.
---

Most church websites fail the same way: they were built for the people who already attend, not the people deciding whether to visit on Sunday. A first-time visitor lands on your site and asks three questions in about 15 seconds — *where*, *when*, and *what should I expect*. If your homepage doesn't answer all three above the fold, you've lost them.

Here's the page-by-page checklist we use when we build a ministry site at HLPR. Use it to audit your current site or scope a new one.

## The 12 pages every church site needs

### 1. Home

Service times, address, and a "Plan Your Visit" button visible before the user scrolls. One clear photo of *your actual people* — not stock images of a generic worship band.

### 2. Plan Your Visit

What to wear. Where to park. What happens to my kids. How long is the service. This page converts more visitors than any other — treat it like a landing page.

### 3. About / What We Believe

Two short paragraphs on your story plus your statement of faith. Don't bury this in a 2,000-word essay — most visitors scan.

### 4. Sermons / Messages

Embedded video or audio of recent messages. Searchable by series. This is the #2 most-visited page after the homepage.

### 5. Ministries / Get Involved

One card per ministry (kids, youth, small groups, worship, outreach). Each card links to a short detail page with a contact.

### 6. Events / Calendar

Upcoming events with date, time, location, and RSVP. If your calendar is empty, hide this page rather than show a stale 2024 event.

### 7. Give

A dedicated giving page with one primary "Give Now" button. Keep the form on-page where possible; every redirect loses ~30% of givers.

### 8. Contact

Address, phone, email, embedded map, and a contact form that actually goes to a real human inbox (and gets answered within 48 hours).

### 9. Staff / Leadership

Photos and short bios of pastors and elders. People want to know who's leading before they walk in.

### 10. Kids / Youth

Parents check this page before they ever set foot in your building. Photos of your space, your check-in process, and your safety policy.

### 11. Small Groups

A searchable or filterable directory of groups with location, day, and a contact for each leader. The #1 connection point for new attendees after Sunday service.

### 12. Prayer Request

A simple form. Optional anonymity. Goes to a designated prayer team — not a black hole.

## The technical details that quietly matter

- **Mobile-first.** Every page should look right on a 5-inch phone before it ever looks right on a 27-inch monitor.
- **Fast.** Aim for under 2 seconds to first paint. Compress every image. Remove autoplay video.
- **Accessible.** Alt text on every image, real headings (not bold paragraphs), 4.5:1 contrast on body text.
- **SEO basics.** Unique title and description on every page. A sitemap submitted to Google. LocalBusiness or Church schema with your address.
- **SSL certificate.** If your URL still says "http://" and not "https://", Google is actively penalizing you.

## What you can skip

- A live chat widget. Nobody is staffing it on a Sunday.
- A blog you'll update twice and abandon. Better to not have one than to have one that says "Welcome to our new site! — March 2022."
- An app. For 95% of churches, a great mobile site does everything an app does, costs nothing extra, and doesn't require downloads.

## The 30-second test

Pull up your church website on your phone right now. Time how long it takes you to find:

1. What time the service starts this Sunday.
2. The street address.
3. A button to plan your first visit.

If any of those took more than 10 seconds, your site is costing you first-time visitors every week. Fixing those three is a one-day project — start there before anything else on this list.
`;
const __vite_glob_0_1 = `---
title: How much should a church website cost in 2026?
slug: church-website-cost-2026
metaTitle: How Much Should a Church Website Cost in 2026?
metaDescription: A clear breakdown of what churches actually pay for a website in 2026 — DIY builders, freelancers, agencies, and done-for-you packages — plus what's worth paying for and what isn't.
publishDate: 2026-05-12
featuredImage: /og-home.jpg
excerpt: A clear breakdown of what churches actually pay for a website in 2026 — DIY builders, freelancers, agencies, and done-for-you packages — plus what's worth paying for and what isn't.
---

If you've ever asked three people how much a church website should cost, you've gotten three wildly different answers — somewhere between "I'll do it free on Wix" and "$25,000 from a Nashville agency." Both can be true. Neither is helpful.

Here's the honest 2026 breakdown of what ministries actually pay, what's behind each number, and how to pick the option that fits your church without overspending — or buying something you'll regret in 18 months.

## The four real options (and what each costs)

### 1. DIY website builder — $15–$30/month

Squarespace, Wix, and Subsplash Sites all sit here. You pick a template, drop in your sermon links, and you're live. Total first-year cost is typically **$200–$500** including domain and a stock-photo license.

**Honest take:** If your church has under 100 attendees, no full-time staff, and just needs a service-times page and a donate button — DIY is fine. The risk: you'll spend 20–40 hours learning the editor, and the site will look like every other Squarespace site.

### 2. Freelancer — $1,500–$5,000 one-time

A single designer (often through Upwork or a referral) builds you a custom site, hands you the keys, and walks away.

**Honest take:** Quality varies wildly. The good ones deliver beautiful work. The not-so-good ones disappear after launch and you're left with a site you can't update. Always ask: "What happens in 6 months when I need to change something?"

### 3. Done-for-you ministry service — $200–$500/month

Companies like Tithe.ly Sites, Subsplash, and HLPR for Ministries bundle design, hosting, updates, and ongoing changes into a monthly subscription. No upfront fee, or a small setup fee in the $0–$1,500 range.

**Honest take:** This is the right answer for most churches between 50 and 1,000 attendees. You get a professional site that stays current, and you never have to learn a CMS or chase down a freelancer. Total annual cost: **$2,400–$6,000.**

### 4. Agency build — $8,000–$25,000+ one-time

A full creative agency does brand strategy, custom design, photography, and a bespoke build. Annual maintenance is usually another $2,000–$5,000.

**Honest take:** Justified only for multi-campus churches (1,000+ attendees) with real brand needs. Below that, you are paying for a deck and a process you don't need.

## What's actually worth paying for

- **Mobile-first design.** Over 70% of church website visits in 2026 happen on a phone. A site that "works on mobile" is not the same as a site designed for it.
- **Fast loading.** Every extra second of load time costs you about 7% of visitors. Speed is a feature, not a bonus.
- **Ongoing updates included.** Service times change, staff change, sermon series change. If updates cost extra, you'll stop making them.
- **Real SEO setup.** Local schema, sitemap, Google Search Console — so people searching "church near me" can find you.

## What's not worth paying for

- **A custom CMS.** If a vendor wants to build you a custom backend, run. WordPress, Webflow, and modern frameworks do this for free.
- **"Brand strategy workshops"** — for a 200-person church, this is usually padding.
- **Stock animations and parallax scrolling.** Aesthetic in 2018, slow and distracting in 2026.

## The 60-second decision framework

1. **Under 100 attendees, no budget?** Use Squarespace. Pick the cleanest template. Move on.
2. **50–1,000 attendees, want it done right?** Done-for-you monthly service. Budget $200–$500/month.
3. **1,000+ attendees with a real brand?** Agency build. Budget $10K+ and 3–4 months.

For most ministries reading this, option 2 is the answer. The math works: a managed monthly service gets you a site you'd pay $8,000 for upfront elsewhere, plus updates and hosting forever — and you can cancel if it stops serving you.

## How HLPR fits

We sit in option 2. We design and build your site in 14 days, manage it forever, and you see the homepage before you commit. If it doesn't reflect your ministry, you don't move forward.
`;
const __vite_glob_0_2 = `---
title: Why we're writing about ministry websites
slug: hello-from-hlpr-ministries
metaTitle: Why We're Writing About Ministry Websites | HLPR Ministries
metaDescription: A short note on what the HLPR Journal is for — practical, jargon-free guidance for pastors and ministry leaders building online.
publishDate: 2026-09-02
featuredImage: /og-home.jpg
excerpt: A short note on what this journal is for, who it's written for, and what you can expect to find here.
---

This is the first post on the HLPR Journal, and it exists for a simple reason: most of the advice written for churches online is written by people trying to sell software, not by people who have sat with a pastor at 9pm trying to figure out why the giving button stopped working.

## Who this is for

Pastors, ministry leaders, church admins, and the volunteer who somehow became "the website person." If you have ever been handed a login you didn't ask for, this is written for you.

## What we'll publish

- Straight numbers on what things cost, with no vendor spin
- Checklists you can run against your current site in an afternoon
- Plain-language explanations of search, giving, and social tools
- Honest comparisons, including the times the cheap option is the right one

### What we won't publish

No fear-based marketing, no invented statistics, and no post that exists only to rank. If a topic doesn't help a ministry make a better decision, it doesn't go up.

## What's next

The next few posts cover what a church website should cost, the pages every ministry site needs, and how small churches get found in local search without paying an agency.

If there's a question you keep running into, send it over — the best posts here will come from real questions, not a keyword tool.
`;
const stripQuotes = (v) => {
  const t = v.trim();
  if (t.startsWith('"') && t.endsWith('"') || t.startsWith("'") && t.endsWith("'")) {
    return t.slice(1, -1);
  }
  return t;
};
function parseMarkdown(raw) {
  const normalized = raw.replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, body: normalized.trim() };
  const data = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    if (!key) continue;
    data[key] = stripQuotes(line.slice(idx + 1));
  }
  return { data, body: normalized.slice(match[0].length).trim() };
}
function toPost(raw, fallbackSlug) {
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
    body
  };
}
const modules = /* @__PURE__ */ Object.assign({
  "../content/blog/church-website-checklist.md": __vite_glob_0_0,
  "../content/blog/church-website-cost-2026.md": __vite_glob_0_1,
  "../content/blog/hello-from-hlpr-ministries.md": __vite_glob_0_2
});
const posts = Object.entries(modules).map(([path, raw]) => {
  const filename = path.split("/").pop() ?? "";
  return toPost(raw, filename.replace(/\.md$/, ""));
}).filter((p) => p !== null).sort((a, b) => a.publishDate < b.publishDate ? 1 : -1);
const getPost = (slug) => posts.find((p) => p.slug === slug);
const SITE_URL = "https://ministries.hlpr.io";
const postUrl = (slug) => `${SITE_URL}/blog/${slug}`;
const formatDate$1 = (iso) => {
  if (!iso) return "";
  const d = /* @__PURE__ */ new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  });
};
const Blog = () => {
  const description = "Practical guides on church website design, ministry SEO, online giving, podcast sites, and growing your ministry online.";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Blog — HLPR Ministries" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index,follow" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: `${SITE_URL}/blog` }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Blog — HLPR Ministries" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: `${SITE_URL}/blog` }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: `${SITE_URL}/og-home.jpg` }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: `${SITE_URL}/og-home.jpg` })
    ] }),
    /* @__PURE__ */ jsx(StickyNav, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-cream pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-5 sm:px-8 lg:px-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.18em] font-semibold text-brand-blue", children: "The HLPR Journal" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-serif font-bold tracking-tight text-brand-navy text-balance text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05]", children: "Honest guides for ministries building online." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-brand-navy-soft leading-relaxed max-w-2xl", children: "Costs, comparisons, checklists, and SEO playbooks — written for pastors, ministry leaders, and church admins (no agency jargon)." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-background py-12 sm:py-16 lg:py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-5 sm:px-8 lg:px-12", children: posts.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-brand-navy-soft", children: "New articles coming soon." }) : /* @__PURE__ */ jsx("ul", { className: "grid gap-6 sm:gap-8", children: posts.map((post) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/blog/${post.slug}`,
          className: "block group rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-brand-blue/40 hover:shadow-soft transition-all",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: post.featuredImage,
                alt: "",
                loading: "lazy",
                className: "mb-6 aspect-[2/1] w-full rounded-xl object-cover"
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy group-hover:text-brand-blue-deep transition-colors", children: post.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-brand-navy-soft leading-relaxed", children: post.excerpt }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-brand-navy-soft", children: /* @__PURE__ */ jsx("time", { dateTime: post.publishDate, children: formatDate$1(post.publishDate) }) })
          ]
        }
      ) }, post.slug)) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const formatDate = (iso) => {
  if (!iso) return "";
  const d = /* @__PURE__ */ new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  });
};
const PostLayout = ({ post }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(StickyNav, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-cream pt-28 sm:pt-36 lg:pt-40 pb-10 sm:pb-14", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[700px] px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/blog",
            className: "inline-flex items-center gap-2 text-sm font-medium text-brand-navy-soft hover:text-brand-navy transition-colors",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
              " All articles"
            ]
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "mt-6 font-serif font-bold tracking-tight text-brand-navy text-balance text-[clamp(2rem,4.5vw,3rem)] leading-[1.05]", children: post.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-brand-navy-soft", children: /* @__PURE__ */ jsx("time", { dateTime: post.publishDate, children: formatDate(post.publishDate) }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-background py-10 sm:py-14 lg:py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[700px] px-5 sm:px-8", children: [
        post.featuredImage ? /* @__PURE__ */ jsx(
          "img",
          {
            src: post.featuredImage,
            alt: post.title,
            loading: "lazy",
            className: "w-full rounded-2xl border border-border object-cover"
          }
        ) : null,
        /* @__PURE__ */ jsx(
          "article",
          {
            className: "\n                mt-10 text-brand-navy-soft leading-relaxed\n                [&_h2]:font-serif [&_h2]:text-brand-navy [&_h2]:text-2xl sm:[&_h2]:text-3xl\n                [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4\n                [&_h3]:font-serif [&_h3]:text-brand-navy [&_h3]:text-xl\n                [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3\n                [&_p]:my-4 [&_p]:text-base\n                [&_ul]:my-4 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2\n                [&_ol]:my-4 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2\n                [&_li]:text-base\n                [&_a]:text-brand-blue [&_a]:underline hover:[&_a]:text-brand-blue-deep\n                [&_strong]:text-brand-navy [&_strong]:font-semibold\n                [&_blockquote]:border-l-4 [&_blockquote]:border-brand-blue/40\n                [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:my-6\n                [&_blockquote]:text-brand-navy\n              ",
            children: /* @__PURE__ */ jsx(ReactMarkdown, { remarkPlugins: [remarkGfm], children: post.body })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mt-16 rounded-2xl bg-brand-navy text-brand-cream p-8 sm:p-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold tracking-tight", children: BLOG_CTA.heading }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-brand-cream/90 leading-relaxed", children: BLOG_CTA.body }),
          /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(CtaButton, { href: BUSINESS.ctaUrl, label: BLOG_CTA.buttonLabel, size: "lg" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-4 text-4xl font-bold", children: "404" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4 text-xl text-muted-foreground", children: "Oops! Page not found" }),
    /* @__PURE__ */ jsx("a", { href: "/", className: "text-primary underline hover:text-primary/90", children: "Return to Home" })
  ] }) });
};
const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : void 0;
  if (!slug) return /* @__PURE__ */ jsx(NotFound, {});
  if (typeof window !== "undefined" && window.location.pathname.endsWith("/")) {
    return /* @__PURE__ */ jsx(Navigate, { replace: true, to: `/blog/${slug}` });
  }
  if (!post) return /* @__PURE__ */ jsx(NotFound, {});
  const url = postUrl(post.slug);
  const image = post.featuredImage.startsWith("http") ? post.featuredImage : `${SITE_URL}${post.featuredImage}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image,
    datePublished: post.publishDate,
    author: { "@type": "Person", name: "Tim Godson" },
    publisher: {
      "@type": "Organization",
      name: "hlpr Ministries",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/hlpr-logo.png` }
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: post.metaTitle }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index,follow" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: post.metaDescription }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: url }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: post.metaTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: post.metaDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: image }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: post.metaTitle }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: post.metaDescription }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: image }),
      /* @__PURE__ */ jsx("meta", { property: "article:published_time", content: post.publishDate }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(jsonLd) })
    ] }),
    /* @__PURE__ */ jsx(PostLayout, { post })
  ] });
};
const SsrApp = ({ location, helmetContext }) => /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(StaticRouter, { location, children: /* @__PURE__ */ jsxs(Routes, { children: [
  /* @__PURE__ */ jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsx(Blog, {}) }),
  /* @__PURE__ */ jsx(Route, { path: "/blog/:slug", element: /* @__PURE__ */ jsx(BlogPost, {}) }),
  /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
] }) }) });
export {
  SsrApp
};
