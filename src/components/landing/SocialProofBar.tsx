import { ShieldCheck } from "lucide-react";
import { FOUNDER_STATS, VENDOR_PARTNERS } from "@/lib/content";

export const SocialProofBar = () => {
  return (
    <section
      aria-label="Trust & track record"
      className="border-y border-border bg-card"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-10 sm:py-12">
        {/* Vendor partnerships row */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-navy-soft">
            <ShieldCheck className="h-4 w-4 text-brand-navy" aria-hidden />
            Verified partner of
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
            {VENDOR_PARTNERS.map((p) => (
              <li
                key={p}
                className="font-serif text-base sm:text-lg font-semibold text-brand-navy/80"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Founder track record stat row */}
        <div className="mt-10 pt-8 border-t border-border">
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 text-center">
            {FOUNDER_STATS.map((s) => (
              <li key={s.label} className="flex flex-col items-center gap-1">
                <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy tracking-tight">
                  {s.stat}
                </div>
                <div className="text-xs sm:text-sm text-brand-navy-soft max-w-[14ch] leading-snug">
                  {s.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
