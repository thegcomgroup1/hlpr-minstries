import { Check, X } from "lucide-react";
import { DIFFERENTIATOR } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Differentiator = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-navy-soft">
            Why HLPR works
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy text-balance leading-tight">
            {DIFFERENTIATOR.heading}
          </h2>
          <p className="mt-5 text-lg text-brand-navy-soft leading-relaxed">
            {DIFFERENTIATOR.sub}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-6">
          {DIFFERENTIATOR.comparison.map((col, i) => {
            const positive = col.tone === "positive";
            return (
              <div
                key={col.title}
                className={cn(
                  "rounded-2xl p-6 sm:p-8 border transition-all",
                  positive
                    ? "bg-brand-navy text-brand-navy-foreground border-brand-navy shadow-elevated md:scale-[1.02]"
                    : "bg-card border-border"
                )}
              >
                <div
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-full font-serif text-lg font-bold",
                    positive
                      ? "bg-brand-amber text-brand-amber-foreground"
                      : "bg-muted text-brand-navy-soft"
                  )}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className={cn(
                    "mt-4 font-serif text-xl sm:text-2xl font-bold leading-tight",
                    positive ? "text-brand-navy-foreground" : "text-brand-navy"
                  )}
                >
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.points.map((p) => (
                    <li key={p} className="flex gap-3 items-start text-sm sm:text-base">
                      {positive ? (
                        <Check className="h-5 w-5 flex-shrink-0 text-brand-amber mt-0.5" aria-hidden />
                      ) : (
                        <X className="h-5 w-5 flex-shrink-0 text-brand-navy-soft/60 mt-0.5" aria-hidden />
                      )}
                      <span
                        className={cn(
                          positive ? "text-brand-cream" : "text-brand-navy-soft"
                        )}
                      >
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
