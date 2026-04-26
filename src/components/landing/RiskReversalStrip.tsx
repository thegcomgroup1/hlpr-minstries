import { Clock, CreditCard, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/content";
import { CtaButton } from "./CtaButton";

export const RiskReversalStrip = () => {
  const items = [
    { icon: Clock, label: "Free preview in 72 hours" },
    { icon: CreditCard, label: "No payment until you approve" },
    { icon: ShieldCheck, label: "100% money-back guarantee" },
  ];

  return (
    <section
      aria-label="Risk reversal"
      className="bg-brand-navy text-brand-navy-foreground"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-amber">
              Our promise to your ministry
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-balance leading-tight">
              Zero risk. Zero pressure. Zero excuses.
            </h2>
            <ul className="mt-6 grid sm:grid-cols-3 gap-4">
              {items.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="h-5 w-5 flex-shrink-0 text-brand-amber mt-0.5" aria-hidden />
                  <span className="text-sm sm:text-base font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <CtaButton href={BUSINESS.ctaUrl} label={BUSINESS.ctaLabel} size="lg" />
            <p className="mt-3 text-xs text-brand-cream/75">
              {BUSINESS.riskReversalShort}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
