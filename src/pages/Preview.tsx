import { Helmet } from "react-helmet-async";
import { ExternalLink } from "lucide-react";
import { BUSINESS, PREVIEW, VIDEO } from "@/lib/content";
import { CtaButton } from "@/components/landing/CtaButton";
import { VideoPlayer } from "@/components/landing/VideoPlayer";
import hlprLogo from "@/assets/hlpr-logo.png";

const canonical = `https://${BUSINESS.domain}/preview`;

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: VIDEO.title,
  description: VIDEO.body,
  thumbnailUrl: [`https://i.ytimg.com/vi/${VIDEO.id}/maxresdefault.jpg`],
  uploadDate: "2026-11-24T14:46:51-08:00",
  duration: "PT2M0S",
  embedUrl: `https://www.youtube.com/embed/${VIDEO.id}`,
  contentUrl: `https://www.youtube.com/watch?v=${VIDEO.id}`,
  publisher: { "@type": "Organization", name: "HLPR Ministries" },
  sameAs: `https://www.youtube.com/watch?v=${VIDEO.id}`,
};

/**
 * The page behind ministries.hlpr.io/preview.
 * One video, one next step — no navigation to leak attention.
 */
const Preview = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet prioritizeSeoTags>
        <title>{`${PREVIEW.headline} | ${BUSINESS.name}`}</title>
        <meta name="description" content={PREVIEW.sub} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PREVIEW.headline} />
        <meta property="og:description" content={PREVIEW.sub} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content={BUSINESS.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PREVIEW.headline} />
        <meta name="twitter:description" content={PREVIEW.sub} />
        <script type="application/ld+json">{JSON.stringify(videoJsonLd)}</script>
      </Helmet>

      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="/"
            className="flex items-center gap-2.5 sm:gap-3"
            aria-label={`${BUSINESS.name} home`}
          >
            <img
              src={hlprLogo}
              alt="HLPR"
              className="h-7 w-auto select-none sm:h-8"
              draggable={false}
            />
            <span className="hidden h-6 w-px bg-brand-navy/20 sm:block" aria-hidden />
            <span className="hidden font-serif text-sm text-brand-navy-soft tracking-tight leading-none sm:block">
              for Ministries
            </span>
          </a>
          <a
            href={BUSINESS.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-navy underline-offset-4 hover:underline"
          >
            Book a 20-min call
          </a>
        </div>
      </header>

      <main>
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-navy-soft">
              {PREVIEW.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-balance text-brand-navy sm:text-4xl lg:text-5xl">
              {PREVIEW.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-navy-soft sm:text-lg">
              {PREVIEW.sub}
            </p>

            <div className="mt-9">
              <VideoPlayer id={VIDEO.id} title={VIDEO.title} />
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground sm:text-sm">
                  {VIDEO.caption}
                </p>
                <a
                  href={VIDEO.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50"
                >
                  {VIDEO.watchLabel}
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>

            <div className="mt-9 flex flex-col items-start gap-3">
              <CtaButton href={BUSINESS.ctaUrl} label={BUSINESS.ctaLabel} size="xl" />
              <p className="text-xs text-muted-foreground sm:text-sm">
                {BUSINESS.riskReversalShort}
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-gradient-cream py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="font-serif text-2xl font-bold text-brand-navy sm:text-3xl">
              What happens next
            </h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-3">
              {PREVIEW.steps.map((step) => (
                <li
                  key={step.n}
                  className="rounded-2xl border border-border bg-background p-6 shadow-soft"
                >
                  <p className="font-serif text-sm font-semibold text-brand-blue">
                    {step.n}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-bold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy-soft">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-brand-navy py-16 text-brand-navy-foreground sm:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="font-serif text-2xl font-bold leading-tight text-balance sm:text-3xl lg:text-4xl">
              {PREVIEW.closingHeadline}
            </h2>
            <p className="mt-4 text-base text-brand-cream/90 sm:text-lg">
              {BUSINESS.riskReversal}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <CtaButton href={BUSINESS.ctaUrl} label={BUSINESS.ctaLabel} size="lg" />
              <p className="text-xs text-brand-cream/90">
                {BUSINESS.riskReversalShort}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 text-xs text-muted-foreground sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}
          </p>
          <div className="flex gap-5">
            <a href="/privacy" className="underline-offset-4 hover:underline">
              Privacy
            </a>
            <a href="/terms" className="underline-offset-4 hover:underline">
              Terms
            </a>
            <a href="/" className="underline-offset-4 hover:underline">
              Home
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Preview;
