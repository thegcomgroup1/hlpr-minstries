
# HLPR for Ministries — Landing Page Build Plan

A complete, production-grade single-page landing site for **HLPR for Ministries**, built per the HLPR Landing Page Generator Mega Prompt v2.0 with **Bootstrap Mode active** (no client testimonials yet, founder-track-record fallback in use).

Primary CTA everywhere: **"Get My Free Homepage Preview"** → GHL booking link.

---

## Brand & Design System

- **Primary:** `#0E1E3F` (HLPR deep navy) — backgrounds, headlines, dark sections
- **Accent:** `#D97706` (warm amber) — **CTA buttons ONLY**, used nowhere else
- **Headings:** Fraunces (modern serif, characterful)
- **Body:** Manrope (geometric humanist sans)
- **Signature:** Caveat (handwritten, founder name only)
- **Tone:** warm, reverent, modern, faith-aware but not preachy
- **Imagery rules:** SVG illustrations and architectural/digital mockups only. No stock people. No crosses, doves, praying hands, or Bible imagery.

All colors wired into `index.css` as HSL design tokens; Tailwind config extended with brand colors and the three Google Fonts. Light cream/off-white section backgrounds alternate with deep-navy bands for rhythm.

---

## Page Sections (in order)

1. **Sticky Nav** — HLPR for Ministries lockup left (monogram + wordmark fallback while logo TODO), nav: Packages · How It Works · Founder · FAQ, primary amber CTA right. Mobile hamburger but CTA stays visible. Becomes opaque on scroll.

2. **Hero (above-the-fold, 80% of effort)**
   - H1: dream-outcome, mobile-first, with bolded "**14 days**" and "**free homepage preview**"
   - Sub-headline: pain → mechanism → time-bound benefit
   - Amber primary CTA (passes blur test)
   - Risk-reversal line + 3 trust ticks under CTA: "Free preview in 72 hours · No payment till you approve · 100% money-back"
   - **Hero visual:** custom SVG mockup of a church website (browser chrome, hero showing service times, Plan-Your-Visit CTA, sermon thumbnail row, give button). Subtle "stained-glass arch" decorative SVG behind in dusty-teal at low opacity. No photos.

3. **Social Proof Bar (Bootstrap fallback)** — Two stacked rows:
   - Vendor partnership badges: "Verified partner of: Google Partner · Meta Business Partner · Klaviyo Master · Stripe Verified · GoHighLevel Certified"
   - Founder-track-record stat row: "$916K+ Google Ads managed · $341K+ Meta Ads managed · $170K+ revenue generated · 68% avg email open rate"

4. **Pain Point Section** — Opens "Dear Pastor," followed by the 4 pain points as x-circle bullet items with bolded keywords. PAS structure, ≤15-word sentences.

5. **Risk Reversal Strip** (Bootstrap-elevated) — Full-width navy band repeating the 72-hour preview / no-payment / money-back promise.

6. **Value Propositions** — 4 alternating image/text rows with custom SVG visuals:
   - Built for ministry workflows (sermon library, plan-a-visit, one-tap giving)
   - Live in 14 days, not 4 months
   - Fully managed forever (no "tech person at church" needed)
   - Stewardship-priced (built for kingdom budgets, not agency portfolios)

7. **Differentiator / Unique Mechanism** — 3-pillar comparison: traditional agency vs. DIY templates vs. **The HLPR Way**. Numbered icons.

8. **How It Works (3 steps)** — (1) Book your free preview · (2) We build your homepage in 72 hours · (3) Approve & launch in 14 days. Lucide icons in branded numbered circles.

9. **Founder's Track Record (Wall-of-Love replacement, Bootstrap)**
   - Section heading: *"We don't have church client testimonials yet. Here's what we bring to the table."*
   - Callout strip above grid: founding-partner offer ("Hand-picking our first 5 ministry partners. Founding-rate pricing locked in for life. **5 spots remaining.**")
   - 3-column grid (1-col mobile) of the 6 track-record cards, each with Lucide icon, big stat, context line, category tag.

10. **Founder Section (elevated in Bootstrap)** — Dark navy background. 128px circular monogram badge ("T" in Fraunces, amber on navy) since photo is TODO. Tim's full story (2 paragraphs from inputs). Caveat signature "Tim Godson" below. Optional LinkedIn link slot.

11. **Pricing** — 3-tier grid with anchoring:
    - **Foundation** — ~~$3,500~~ → **$1,500 build + $50/mo** (Save $2,000)
    - **Growth** — ~~$5,000~~ → **$2,500 build + $200/mo** (Save $2,500) — "Most Popular" badge, larger card
    - **Multi-Site** — Custom
    - Each card: feature checklist, amber CTA, risk-reversal micro-copy
    - Below grid: one-line cross-sell: *"After your site is live, we also offer email marketing retainers (Bronze, Silver, Gold). Ask about it on your free preview call."*

12. **FUD Elimination Strip** — 4 service-business trust icons: Free preview · Direct founder access · Custom to your ministry · No long-term contract.

13. **Final CTA Band** — Full-width navy. Headline: *"Your ministry deserves a digital front door as alive as your worship."* Sub-line repeats risk reversal. Same amber CTA.

14. **FAQ** — 8 accordion questions covering: niche fit (denominations, Spanish-language), differentiation (vs. Sharefaith/Wix/freelancers), 14-day timeline, what the church provides, money-back/exit terms, who Tim/HLPR is, onboarding/hosting/existing-content logistics, what happens after booking. First open by default.

15. **Footer** — HLPR for Ministries lockup, 4-column nav (About, Packages, FAQ, Contact), LinkedIn icon, copyright, Privacy, Terms.

---

## Technical Details

- **Stack:** existing React + Vite + Tailwind + TypeScript + shadcn (matches `stack: react+tailwind`).
- **File structure** (per Part 8 of master prompt):
  ```
  src/
  ├── pages/Index.tsx          (assembles sections)
  ├── components/landing/
  │   ├── StickyNav.tsx
  │   ├── Hero.tsx
  │   ├── SocialProofBar.tsx
  │   ├── PainPointSection.tsx
  │   ├── RiskReversalStrip.tsx
  │   ├── ValueProps.tsx
  │   ├── Differentiator.tsx
  │   ├── HowItWorks.tsx
  │   ├── FounderTrackRecord.tsx   (Wall-of-Love bootstrap)
  │   ├── FounderSection.tsx
  │   ├── Pricing.tsx
  │   ├── FudStrip.tsx
  │   ├── FinalCtaBand.tsx
  │   ├── FAQ.tsx
  │   ├── Footer.tsx
  │   └── visuals/                (inline SVG components: ChurchSiteMockup, StainedGlassArch, value-prop illustrations)
  └── lib/content.ts             (all copy as typed constants, single source of truth)
  ```
- **Design tokens:** primary navy + amber added as HSL CSS variables in `index.css`; Tailwind extended with `brand-navy`, `brand-amber`, `brand-cream`, plus `font-fraunces`, `font-manrope`, `font-caveat`.
- **Fonts:** Google Fonts loaded via `<link>` in `index.html` (Fraunces 400/600/700, Manrope 400/500/700, Caveat 400).
- **Icons:** lucide-react throughout (already installed).
- **Animations:** Framer Motion entrance fades on section reveal (lightweight); CSS transitions on hover.
- **Forms:** All CTAs are anchor links opening the GHL booking URL `https://api.leadconnectorhq.com/widget/booking/aiMEM9Qf7GmaU0L6sTYT` in a new tab. No on-page form (booking handled by GHL widget).
- **Tracking pixels:** Meta Pixel + GA4 stubs added to `index.html` head with placeholders for IDs (marked as TODO).
- **Accessibility:** semantic landmarks, skip-to-content link, alt text on all SVGs, focus rings, AA contrast, 44px tap targets.
- **Mobile-first:** designed at 375px first; single-column below `sm`, multi-column from `md`/`lg`.
- **SEO:** updated `<title>`, meta description, Open Graph tags in `index.html` for HLPR for Ministries.

---

## Bootstrap Fallbacks Activated (and why)

| Section | Standard | Bootstrap Replacement |
|---|---|---|
| Wall of Love | Customer testimonial grid | **Founder's Track Record** 6-card grid + founding-partner callout (no church clients yet) |
| Social Proof Bar | Customer logos + star rating | Vendor partnership badges + founder-stat row (no client logos yet) |
| Founder Section photo | Real headshot | 128px circular monogram badge with "T" (no photo provided) |
| Risk Reversal | Single line under hero CTA | Elevated as dedicated full-width strip + repeated under every CTA |
| Urgency | Generic countdown | Founding-partner framing: 5 spots remaining, locked-in lifetime rate |

---

## TODO Markers Surfaced for the Human

These are added inline as `[TODO_MISSING_INPUT: ...]` HTML comments next to where they'll appear, plus listed in a delivery summary:

1. **Founder photo** — Founder Section (monogram fallback active until provided)
2. **HLPR for Ministries logo lockup SVG** — Sticky Nav + Footer (text wordmark fallback active)
3. **Subdomain confirmation** — `ministries.hlpr.io` used in copy/SEO; confirm before launch
4. **Final flat-rate pricing confirmation** — Foundation $1,500 and Growth $2,500 build prices marked TODO_CONFIRM in source inputs
5. **Meta Pixel ID + GA4 Measurement ID** — placeholders in `index.html`
6. **Tim's LinkedIn URL** — optional link slot in Founder Section (hidden if not provided)

---

## Acceptance Checklist (will verify before delivery)

Above-fold has all 5 elements · headline carries dream outcome + benefit + timeframe + mechanism · CTA passes blur test · social proof in first scroll · alternating value-prop layout · founder-track-record grid (no carousel) · pricing has strike-through anchors and "You save $X" · FUD strip has 4 icons · founder section has monogram + story + signature · 8 FAQs · amber used only on buttons · no em/en dashes · no stock photos of people · 44px tap targets · WCAG AA contrast · mobile-first responsive.

