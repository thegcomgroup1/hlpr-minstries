import { Check } from "lucide-react";
import { VALUE_PROPS } from "@/lib/content";
import {
  SermonLibraryViz,
  CalendarViz,
  ManagedViz,
  BudgetViz,
} from "./visuals";
import { cn } from "@/lib/utils";

const VISUAL_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ministry: SermonLibraryViz,
  calendar: CalendarViz,
  managed: ManagedViz,
  budget: BudgetViz,
};

export const ValueProps = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-navy-soft">
            What you actually get
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy text-balance leading-tight">
            Everything your ministry needs online, nothing it doesn't.
          </h2>
        </div>

        <div className="mt-16 sm:mt-20 space-y-20 sm:space-y-28">
          {VALUE_PROPS.map((vp, i) => {
            const Visual = VISUAL_MAP[vp.visual];
            const reverse = i % 2 === 1;
            return (
              <div
                key={vp.id}
                className={cn(
                  "grid lg:grid-cols-12 gap-10 lg:gap-16 items-center",
                  reverse && "lg:[&>div:first-child]:order-2"
                )}
              >
                <div className="lg:col-span-6">
                  <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-navy-soft">
                    {vp.eyebrow}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy text-balance leading-tight">
                    {vp.title}
                  </h3>
                  <p className="mt-4 text-base sm:text-lg text-brand-navy-soft leading-relaxed">
                    {vp.body}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {vp.bullets.map((b) => (
                      <li key={b} className="flex gap-3 items-start">
                        <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy text-brand-navy-foreground">
                          <Check className="h-3 w-3" aria-hidden />
                        </span>
                        <span className="text-sm sm:text-base text-brand-navy-soft">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-6">
                  <div className="rounded-2xl shadow-soft overflow-hidden bg-card">
                    <Visual className="w-full h-auto" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
