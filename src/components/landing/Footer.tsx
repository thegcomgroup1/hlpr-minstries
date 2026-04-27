import { Linkedin } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/content";
import hlprLogo from "@/assets/hlpr-logo.png";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-deep text-brand-cream/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <img
                src={hlprLogo}
                alt="HLPR"
                className="h-7 w-auto select-none brightness-0 invert"
                style={{ filter: "brightness(0) saturate(100%) invert(58%) sepia(90%) saturate(2200%) hue-rotate(175deg) brightness(102%) contrast(101%)" }}
                draggable={false}
              />
              <span className="font-serif text-base font-semibold text-brand-cream/70">
                for Ministries
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              Done-for-you church website design, build, & management. Modern,
              mobile-first sites live in 14 days, fully managed forever.
            </p>
            <a
              href="#"
              aria-label="HLPR for Ministries on LinkedIn"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy hover:bg-brand-navy-soft transition-colors"
            >
              <Linkedin className="h-4 w-4 text-brand-cream" aria-hidden />
            </a>
          </div>

          <nav
            className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm"
            aria-label="Footer"
          >
            <div>
              <p className="font-serif text-sm font-bold uppercase tracking-wider text-brand-cream/90">
                Explore
              </p>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-brand-amber transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-serif text-sm font-bold uppercase tracking-wider text-brand-cream/90">
                About
              </p>
              <ul className="mt-4 space-y-2.5">
                <li><a href="#founder" className="hover:text-brand-amber transition-colors">Our Story</a></li>
                <li><a href="#founder" className="hover:text-brand-amber transition-colors">Founder</a></li>
              </ul>
            </div>
            <div>
              <p className="font-serif text-sm font-bold uppercase tracking-wider text-brand-cream/90">
                Contact
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={BUSINESS.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-amber transition-colors"
                  >
                    Book a preview
                  </a>
                </li>
                <li>{BUSINESS.domain}</li>
              </ul>
            </div>
            <div>
              <p className="font-serif text-sm font-bold uppercase tracking-wider text-brand-cream/90">
                Legal
              </p>
              <ul className="mt-4 space-y-2.5">
                <li><a href="#" className="hover:text-brand-amber transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-brand-amber transition-colors">Terms</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-cream/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-brand-cream/60">
          <p>© {year} HLPR for Ministries. All rights reserved.</p>
          <p>Built for the kingdom, not for portfolios.</p>
        </div>
      </div>
    </footer>
  );
};
