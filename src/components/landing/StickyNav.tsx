import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/content";
import { CtaButton } from "./CtaButton";
import { cn } from "@/lib/utils";

export const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur shadow-soft border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5 group" aria-label={`${BUSINESS.name} home`}>
            {/* TODO_MISSING_INPUT: HLPR for Ministries logo lockup SVG — Sticky Nav, monogram + wordmark fallback active */}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy font-serif text-lg font-bold text-brand-amber">
              H
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold text-brand-navy tracking-tight">
              HLPR <span className="text-brand-navy-soft font-normal">for Ministries</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-brand-navy-soft hover:text-brand-navy transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <CtaButton href={BUSINESS.ctaUrl} label="Free Preview" size="md" className="hidden sm:inline-flex" />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-navy hover:bg-muted"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            className="lg:hidden pb-5 pt-2 flex flex-col gap-1 border-t border-border"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium text-brand-navy hover:bg-muted rounded-lg min-h-[44px] flex items-center"
              >
                {l.label}
              </a>
            ))}
            <div className="sm:hidden pt-2">
              <CtaButton href={BUSINESS.ctaUrl} label={BUSINESS.ctaLabel} size="md" className="w-full" />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
