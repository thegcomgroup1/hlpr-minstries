import { Sparkles } from "lucide-react";
import { MINISTRY_PORTFOLIO, FOUNDING_PARTNER } from "@/lib/content";
import {
  LifeWorkMockup,
  EdenCoveMockup,
  SavedSinglesMockup,
  DunamisMockup,
} from "./visuals/PortfolioMockups";

const MOCKUP_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  lifework: LifeWorkMockup,
  "eden-cove": EdenCoveMockup,
  "saved-singles": SavedSinglesMockup,
  dunamis: DunamisMockup,
};

export const MinistryPortfolio = () => {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Founding Partner callout */}
        <div className="rounded-2xl border border-brand-navy/15 bg-card p-6 sm:p-8 shadow-soft">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-shrink-0 inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-brand-navy px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-navy-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand-amber" aria-hidden />
              {FOUNDING_PARTNER.badge}
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-navy text-balance leading-snug">
                {FOUNDING_PARTNER.headline}{" "}
                <span className="text-brand-navy-soft font-normal">
                  {FOUNDING_PARTNER.body}
                </span>
              </h3>
            </div>
            <div className="flex-shrink-0 font-serif text-base font-bold text-brand-navy">
              {FOUNDING_PARTNER.spots}
            </div>
          </div>
        </div>

        {/* Section heading */}
        <div className="mt-14 max-w-3xl">
          <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-navy-soft">
            Recently launched
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy text-balance leading-tight">
            Real ministries. Real sites. Live now.
          </h2>
          <p className="mt-5 text-lg text-brand-navy-soft leading-relaxed">
            A glimpse at sites we've shipped for ministries, retreats, &amp; faith-driven agencies in the last year. Different visions, different audiences, same standard of craft.
          </p>
        </div>

        {/* 2x2 portfolio grid */}
        <ul className="mt-12 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {MINISTRY_PORTFOLIO.map((p) => {
            const Mockup = MOCKUP_MAP[p.id];
            return (
              <li
                key={p.id}
                className="rounded-2xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="aspect-[3/2] w-full overflow-hidden border-b border-border">
                  {Mockup ? <Mockup className="w-full h-full" /> : null}
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
                      {p.name}
                    </h3>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-navy-soft bg-muted px-2.5 py-1 rounded-full whitespace-nowrap">
                      {p.niche}
                    </span>
                  </div>
                  <p className="font-serif italic text-base text-brand-navy-soft leading-snug mb-3">
                    "{p.tagline}"
                  </p>
                  <p className="text-sm text-brand-navy-soft leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Honest caveat */}
        <p className="mt-10 text-center text-sm text-brand-navy-soft italic max-w-2xl mx-auto">
          Built before HLPR for Ministries officially launched. Each site got the same care, just without the 14-day promise &amp; monthly management bundled in. That part is new.
        </p>
      </div>
    </section>
  );
};
