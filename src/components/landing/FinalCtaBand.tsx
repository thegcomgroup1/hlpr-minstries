import { BUSINESS, FINAL_CTA } from "@/lib/content";
import { CtaButton } from "./CtaButton";
import { StainedGlassArch } from "./visuals";

export const FinalCtaBand = () => {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-brand-navy-foreground py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -right-32 top-0 hidden md:block w-[520px] opacity-25"
        aria-hidden
      >
        <StainedGlassArch />
      </div>
      <div
        className="pointer-events-none absolute -left-40 bottom-0 hidden md:block w-[420px] opacity-20 rotate-180"
        aria-hidden
      >
        <StainedGlassArch />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
          {FINAL_CTA.headline}
        </h2>
        <p className="mt-5 text-base sm:text-lg text-brand-cream/85 max-w-2xl mx-auto leading-relaxed">
          {FINAL_CTA.sub}
        </p>
        <div className="mt-9 flex flex-col items-center gap-3">
          <CtaButton href={BUSINESS.ctaUrl} label={BUSINESS.ctaLabel} size="xl" />
          <p className="text-xs text-brand-cream/70">
            {BUSINESS.riskReversalShort}
          </p>
        </div>
      </div>
    </section>
  );
};
