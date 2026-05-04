import {
  CalendarCheck,
  HeartHandshake,
  MailOpen,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { FOUNDER_TRACK_RECORD } from "@/lib/content";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "trending-up": TrendingUp,
  target: Target,
  "heart-handshake": HeartHandshake,
  "mail-open": MailOpen,
  users: Users,
  "calendar-check": CalendarCheck,
  "shield-check": ShieldCheck,
};

// Reusable Track Record section. Currently unrendered on HLPR for Ministries
// (replaced by MinistryPortfolio); kept on disk for reuse on hlprsolutions.com.
export const FounderTrackRecord = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy text-balance leading-tight">
            The track record behind the methodology.
          </h2>
          <p className="mt-5 text-lg text-brand-navy-soft leading-relaxed">
            Five years of paid media, email, &amp; CRO work for clients across multiple industries. Same systems we use for HLPR for Ministries.
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
