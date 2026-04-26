import { CalendarCheck, MailOpen, Rocket } from "lucide-react";
import { HOW_IT_WORKS, BUSINESS } from "@/lib/content";
import { CtaButton } from "./CtaButton";

const ICONS = [CalendarCheck, MailOpen, Rocket];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-gradient-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-navy-soft">
            Your path to launch
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy text-balance leading-tight">
            From booked to live in 3 simple steps.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {HOW_IT_WORKS.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={step.n}
                className="relative rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-brand-navy-foreground">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <span className="font-serif text-3xl font-bold text-brand-navy/20">
                    {step.n}
                  </span>
                </div>
                <p className="mt-5 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-navy-soft">
                  {step.timeframe}
                </p>
                <h3 className="mt-2 font-serif text-xl sm:text-2xl font-bold text-brand-navy leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-brand-navy-soft leading-relaxed">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center text-center">
          <CtaButton href={BUSINESS.ctaUrl} label={BUSINESS.ctaLabel} size="lg" />
          <p className="mt-3 text-xs text-brand-navy-soft">
            {BUSINESS.riskReversalShort}
          </p>
        </div>
      </div>
    </section>
  );
};
