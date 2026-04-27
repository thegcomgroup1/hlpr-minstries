Apply the four "do now" tweaks from the audit. Pixel/GA4 and domain swaps are deferred until Tim provides those values.

## 1. Swap LinkedIn → Instagram in founder section

**`src/lib/content.ts`** — In `FOUNDER`:
- Rename `linkedinUrl` → `instagramUrl`
- Set value to `"https://instagram.com/[MY_HANDLE]"` placeholder
- Update the existing `TODO_MISSING_INPUT` comment to reference Instagram

**`src/components/landing/FounderSection.tsx`**:
- Swap `Linkedin` import for `Instagram` from `lucide-react`
- Update conditional `{FOUNDER.linkedinUrl && ...}` → `{FOUNDER.instagramUrl && ...}`
- `href` → `FOUNDER.instagramUrl`
- Link text "Connect on LinkedIn" → "Follow on Instagram"
- `<Linkedin />` → `<Instagram />`

## 2. Trim Value Props from 4 → 3

**`src/lib/content.ts`** — In `VALUE_PROPS`, remove the 4th element (`id: "stewardship-priced"`). The remaining 3 (ministry, calendar, managed) keep alternating layout cleanly. `BudgetViz` import in `ValueProps.tsx` becomes unused — remove it from the import and from `VISUAL_MAP` to keep the file clean.

## 3. Generate custom Open Graph share image

Generate `public/og-image.png` (1200×630) using AI image generation via the Lovable AI gateway with these specs:
- Background: HLPR navy `#0E1E3F` with subtle gradient toward `#0B1B2E` bottom-right
- Top-left (60px margin): "HLPR for Ministries" wordmark in white, ~56px tall
- Center: "A digital front door as alive as your worship." — Fraunces, ~72px, weight 700, white, max 2 lines
- 32px below: "Modern church websites · Live in 14 days · Fully managed" — Manrope, ~28px, weight 600, amber `#D97706`
- Bottom-right: simplified stained-glass arch silhouette (architectural, no religious symbols), ~280px tall, brand-blue/teal at ~25% opacity

Approach: write a one-shot Node script that calls the AI gateway image model, save base64 result to `public/og-image.png`. Then update `index.html`:
- `og:image` → `/og-image.png?v=1`
- `twitter:image` → `/og-image.png?v=1`

QA: convert the PNG to a viewable image and inspect for layout, text clipping, and color fidelity. Iterate prompt until clean.

## 4. Remove resolved TODO comment

**`src/components/landing/Pricing.tsx`** line 68: delete `{/* TODO_CONFIRM_BUILD_PRICE for Foundation & Growth tiers */}`.

## Deferred (waiting on Tim)

- **Pixel + GA4 wiring** in `index.html` and `CtaButton.tsx` `onClick` for `fbq('track','Lead')` + `gtag('event','generate_lead')` — needs real IDs.
- **Canonical + og:url** swap to real production URL — needs final domain.
- **Instagram handle** — replace `[MY_HANDLE]` placeholder once provided.

Tim will send those in a follow-up message; nothing in this round depends on them.
