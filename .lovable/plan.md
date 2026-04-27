## Add MinistryPortfolio section, retire the apologetic Track Record framing

You now have 4 real shipped sites (LifeWork, Eden Cove, Saved Singles Summit, Dunamis Marketing). The current Founder Track Record section's "we don't have testimonials yet" framing is no longer true. Replace it with a confident portfolio grid showing the actual work. Keep `FounderTrackRecord.tsx` around (cleaned up + neutralized) for reuse on `hlprsolutions.com` later.

### What changes on the page

- New `#portfolio` section in place of the old Track Record block, with the Founding Partner urgency strip at the top, then the heading "Real ministries. Real sites. Live now.", then a 2x2 grid of branded site mockups, then an honest caveat that these were built before the 14-day/managed offering existed.
- Nav gets a new "Portfolio" link as the first item so visitors can jump straight to proof.
- `FounderTrackRecord.tsx` stays in the codebase but is no longer rendered, no longer references `FOUNDING_PARTNER`, and uses generic copy so it can power the broader `hlprsolutions.com` site later.

### Files touched

**New: `src/components/landing/visuals/PortfolioMockups.tsx`**
Four standalone SVG components, each ~480x320 viewBox, each visually distinct, all using brand fonts via `font-family`:
- `LifeWorkMockup` — dark forest gradient, white serif H1 "Transforming Lives Through" + amber italic "Faith & Purpose", amber + outline buttons, browser chrome with `lifeworkministries.com`
- `EdenCoveMockup` — sky-blue top with cloud shapes over autumn-tree silhouette, white italic serif "Come and Rest a While", forest-green + outline buttons, `edencove.org`
- `SavedSinglesMockup` — dark photo-style background with coral-red `#E94B3C` notification bar + coral italic serif "Presence. Purpose. Passion. Power.", `savedsinglessummit.com`
- `DunamisMockup` — very dark navy with corner amber spotlights, top nav strip, 4-line H1 (white serif + amber italic serif), italic sub, amber + dark outline buttons, `dunamismarketing.com`

Pure SVG (gradients, shapes, text). No external photos. No religious symbols.

**New: `src/components/landing/MinistryPortfolio.tsx`**
- `id="portfolio"`, full-bleed section
- Founding Partner callout strip at top (lifted as-is from `FounderTrackRecord`, same Sparkles + badge + spots remaining)
- Eyebrow "Recently launched" + H2 "Real ministries. Real sites. Live now." + lead paragraph
- 2x2 grid (`sm:grid-cols-2`) of cards: mockup in 3:2 frame on top, then card body with name + niche pill + italic tagline + 1-line description
- Closing centered italic caveat: built before the 14-day/managed promise existed, "That part is new"
- `MOCKUP_MAP` keyed by portfolio id resolves which mockup component to render

**Edit: `src/lib/content.ts`**
- Add new `MINISTRY_PORTFOLIO` constant (4 entries: lifework, eden-cove, saved-singles, dunamis) with name / niche / tagline / description
- Update `NAV_LINKS` to prepend `{ label: "Portfolio", href: "#portfolio" }`
- Leave `FOUNDER_STATS`, `FOUNDER_TRACK_RECORD`, `FOUNDING_PARTNER` untouched (reused later)

**Edit: `src/components/landing/FounderTrackRecord.tsx`**
- Remove the Founding Partner callout block at the top + the `FOUNDING_PARTNER` import + the now-unused `Sparkles` import
- Override the heading and sub at render time (don't mutate `FOUNDER_TRACK_RECORD` in content.ts since it's reused) to:
  - heading: "The track record behind the methodology."
  - sub: "Five years of paid media, email, & CRO work for clients across multiple industries. Same systems we use for HLPR for Ministries."
- File is no longer imported or rendered by `Index.tsx` but stays on disk for the future `hlprsolutions.com` site

**Edit: `src/pages/Index.tsx`**
- Swap `FounderTrackRecord` import for `MinistryPortfolio`
- Replace `<FounderTrackRecord />` with `<MinistryPortfolio />` in the same slot

### Constraints honored

- No outbound links from any portfolio card (visual proof only)
- No em dashes anywhere in new copy (commas, ampersands, "and")
- No fabricated content — only the 4 real sites, accurately described
- No fonts/colors outside existing tokens (`brand-navy`, `brand-amber`, `brand-cream-deep`, etc.) plus the literal hex values called out per mockup
- Mobile: 1 column stacked; desktop: 2x2 grid

### QA after implementation

Run `tsc --noEmit` to confirm clean typecheck before handing back. Visual QA is in the live preview — confirm each mockup is visually distinct, the Founding Partner strip moved correctly, and the caveat reads right.
