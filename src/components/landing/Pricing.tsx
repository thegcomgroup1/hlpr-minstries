import { Check, Star } from "lucide-react";
import {
  BUSINESS,
  PRICING_TIERS,
  PRICING_CROSSSELL,
} from "@/lib/content";
import { CtaButton } from "./CtaButton";
import { cn } from "@/lib/utils";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gradient-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-navy-soft">
            Stewardship-priced packages
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy text-balance leading-tight">
            Pick the package built for your ministry's size.
          </h2>
          <p className="mt-5 text-lg text-brand-navy-soft leading-relaxed">
            Flat-rate. No long-term contract. Money-back if your finished site
            doesn't reflect your ministry.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-2xl border bg-card p-7 sm:p-8 flex flex-col shadow-soft",
                tier.mostPopular &&
                  "lg:scale-[1.04] border-brand-navy shadow-elevated"
              )}
            >
              {tier.mostPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-3 py-1 text-xs font-semibold text-brand-navy-foreground">
                  <Star className="h-3 w-3 fill-brand-amber text-brand-amber" aria-hidden />
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-serif text-2xl font-bold text-brand-navy">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-brand-navy-soft">{tier.target}</p>
              </div>

              <div className="mt-6">
                {tier.savings && (
                  <p className="text-sm font-bold text-brand-navy">
                    {tier.savings}
                  </p>
                )}
                <div className="mt-1 flex items-baseline gap-3 flex-wrap">
                  {tier.anchorPrice && (
                    <span className="text-lg text-brand-navy-soft/60 line-through">
                      {tier.anchorPrice}
                    </span>
                  )}
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-brand-navy tracking-tight">
                    {tier.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-brand-navy-soft">{tier.cadence}</p>
                {/* TODO_CONFIRM_BUILD_PRICE for Foundation & Growth tiers */}
              </div>

              <ul className="mt-7 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3 items-start text-sm sm:text-base">
                    <Check className="h-5 w-5 flex-shrink-0 text-brand-navy mt-0.5" aria-hidden />
                    <span className="text-brand-navy-soft">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaButton
                  href={BUSINESS.ctaUrl}
                  label={BUSINESS.ctaLabel}
                  size="md"
                  className="w-full"
                />
                <p className="mt-3 text-center text-xs text-brand-navy-soft">
                  Free preview · No payment until you approve
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl mx-auto text-center text-sm text-brand-navy-soft leading-relaxed">
          {PRICING_CROSSSELL}
        </p>
      </div>
    </section>
  );
};
