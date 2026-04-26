import { Gift, MessageCircle, Sparkles, Unlock } from "lucide-react";
import { FUD_ITEMS } from "@/lib/content";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  gift: Gift,
  "message-circle": MessageCircle,
  sparkles: Sparkles,
  unlock: Unlock,
};

export const FudStrip = () => {
  return (
    <section aria-label="Trust signals" className="bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-10 sm:py-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {FUD_ITEMS.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.label} className="flex items-center gap-3 sm:gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-cream-deep text-brand-navy flex-shrink-0">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm sm:text-base font-semibold text-brand-navy leading-snug">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
