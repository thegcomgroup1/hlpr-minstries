import { Check } from "lucide-react";
import { BUSINESS, HERO, VIDEO } from "@/lib/content";
import { CtaButton } from "./CtaButton";
import { VideoPlayer } from "./VideoPlayer";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-cream pb-8 pt-20 sm:pb-8 sm:pt-24"
    >
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 text-center sm:px-8">
            <h1 className="font-serif text-2xl font-bold leading-tight text-brand-navy text-balance sm:text-4xl lg:text-5xl">
              <span className="mb-2 block font-sans text-xs font-semibold uppercase text-brand-navy-soft sm:text-sm">
                {HERO.headline.descriptor}
              </span>
              {HERO.headline.pre}{" "}
              <span className="block sm:inline">{HERO.headline.bold}</span>
            </h1>

            <p className="mt-3 hidden max-w-3xl text-base leading-relaxed text-brand-navy-soft sm:block">
              {HERO.sub}
            </p>

            <div id="video" className="mt-5 w-full max-w-2xl sm:max-w-[min(640px,calc((100svh_-_440px)*16/9))]">
              <VideoPlayer id={VIDEO.id} title={VIDEO.title} className="rounded-lg" />
            </div>

            <div className="mt-4">
              <CtaButton href={BUSINESS.ctaUrl} label={BUSINESS.ctaLabel} size="lg" />
            </div>

            <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-brand-navy-soft sm:text-sm">
              {HERO.trust.map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-brand-navy" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
      </div>
    </section>
  );
};
