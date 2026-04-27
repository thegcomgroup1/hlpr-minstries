## Swap generic SVG mockups for real site screenshots

Replace the four hand-drawn SVG mockups in the Ministry Portfolio grid with real screenshots of each live site, wrapped in a clean, reusable browser-frame component. All surrounding copy, layout, spacing, and the founding-partner strip stay exactly as they are today — only the visual inside each card changes.

### Heads up on the screenshots

The four image files (`lifework.png`, `eden-cove.png`, `saved-singles.png`, `dunamis.png`) were referenced but not attached to this message. After you approve this plan, please drag them into the chat so they can be saved to `src/assets/portfolio/`. Implementation will proceed once they're uploaded.

### Files touched

**New: `src/components/landing/visuals/BrowserFrame.tsx`**
Reusable browser-chrome wrapper:
- macOS-style title bar: red / amber / green traffic-light dots on the left, centered URL pill, small spacer on the right for symmetry
- 16:9 image area below with `object-cover` + `object-position: top` so each site's hero stays visible and isn't center-cropped
- `loading="lazy"` and proper `alt` text on the `<img>`
- Uses existing tokens (`bg-card`, `border`, `text-brand-navy-soft`, etc.) — no new colors

**New asset directory: `src/assets/portfolio/`**
Four PNG screenshots imported as Vite assets:
- `lifework.png`
- `eden-cove.png`
- `saved-singles.png`
- `dunamis.png`

**Edit: `src/components/landing/MinistryPortfolio.tsx`**
- Drop the `LifeWorkMockup / EdenCoveMockup / SavedSinglesMockup / DunamisMockup` imports and the `MOCKUP_MAP` constant
- Add `BrowserFrame` import + the 4 image imports
- Add a `PORTFOLIO_IMAGES` map (id → imported image) and a `PORTFOLIO_URLS` map (id → display URL)
- Inside the grid `.map`, replace the `<Mockup />` slot with `<BrowserFrame imageSrc={...} imageAlt={`${p.name} website screenshot`} url={PORTFOLIO_URLS[p.id]} />`
- Keep the same outer `<li>` card, niche pill, tagline, description, and the `aspect-[3/2]` → keep this as-is; the BrowserFrame fills it with chrome + 16:9 image area

**Delete: `src/components/landing/visuals/PortfolioMockups.tsx`**
No longer referenced anywhere after the edit above.

### What does NOT change

- Founding Partner callout strip at the top of the section
- Section eyebrow, H2 ("Real ministries. Real sites. Live now."), and lead paragraph
- Niche pills, italic taglines, and descriptions on each card
- The honest caveat paragraph at the bottom
- `MINISTRY_PORTFOLIO` content in `src/lib/content.ts`
- `NAV_LINKS` ("Portfolio" stays first)
- All other landing sections

### QA after implementation

- `tsc --noEmit` clean (no orphan imports from the deleted file)
- All 4 cards render real screenshots inside the new browser frame
- Mobile collapses to single column, screenshots scale cleanly
- No console errors in the preview
