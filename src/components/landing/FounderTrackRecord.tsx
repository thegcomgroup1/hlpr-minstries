import {
  CalendarCheck,
  HeartHandshake,
  MailOpen,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { FOUNDER_TRACK_RECORD, FOUNDING_PARTNER } from "@/lib/content";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "trending-up": TrendingUp,
  target: Target,
  "heart-handshake": HeartHandshake,
  "mail-open": MailOpen,
  users: Users,
  "calendar-check": CalendarCheck,
};

export const FounderTrackRecord = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Founding Partner callout */}
        <div className="rounded-2xl border border-brand-navy/15 bg-card p-6 sm:p-8 shadow-soft">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-shrink-0 inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-brand-navy px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-navy-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand-amber" aria-hidden />
              {FOUNDING_PARTNER.badge}
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-navy text-balance leading-snug">
                {FOUNDING_PARTNER.headline}{" "}
                <span className="text-brand-navy-soft font-normal">
                  {FOUNDING_PARTNER.body}
                </span>
              </h3>
            </div>
            <div className="flex-shrink-0 font-serif text-base font-bold text-brand-navy">
              {FOUNDING_PARTNER.spots}
            </div>
          </div>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy text-balance leading-tight">
            {FOUNDER_TRACK_RECORD.heading}
          </h2>
          <p className="mt-5 text-lg text-brand-navy-soft leading-relaxed">
            {FOUNDER_TRACK_RECORD.sub}
          </p>
        </div>

        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {FOUNDER_TRACK_RECORD.cards.map((c) => {
            const Icon = ICON_MAP[c.icon];
            return (
              <li
                key={c.context}
                className="rounded-2xl bg-card border border-border p-6 sm:p-7 shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cream-deep text-brand-navy">
                    {Icon ? <Icon className="h-5 w-5" aria-hidden /> : null}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-navy-soft">
                    {c.tag}
                  </span>
                </div>
                <p className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
                  {c.stat}
                </p>
                <p className="mt-2 text-sm sm:text-base text-brand-navy-soft leading-relaxed">
                  {c.context}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
