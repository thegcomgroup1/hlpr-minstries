import { Check } from "lucide-react";
import { BUSINESS, HERO } from "@/lib/content";
import { CtaButton } from "./CtaButton";
import { ChurchSiteMockup, StainedGlassArch } from "./visuals";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-cream pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-32"
    >
      {/* Decorative stained-glass arch behind mockup */}
      <div className="pointer-events-none absolute right-[-10%] top-12 hidden lg:block w-[640px] opacity-60" aria-hidden>
        <StainedGlassArch />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-card/80 px-3 py-1.5 text-xs sm:text-sm font-medium text-brand-navy-soft backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-navy" aria-hidden />
              {HERO.eyebrow}
            </div>

            <h1 className="mt-5 font-serif font-bold tracking-tight text-brand-navy text-balance text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.05]">
              {HERO.headline.pre}{" "}
              <span className="block sm:inline">{HERO.headline.bold}</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-brand-navy-soft leading-relaxed max-w-xl">
              {HERO.sub}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <CtaButton href={BUSINESS.ctaUrl} label={BUSINESS.ctaLabel} size="xl" />
            </div>

            <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brand-navy-soft">
              {HERO.trust.map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-brand-navy" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-brand-navy/5 blur-2xl" aria-hidden />
              <div className="relative rounded-2xl shadow-elevated overflow-hidden border border-border bg-card">
                <ChurchSiteMockup className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
