import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { VIDEO } from "@/lib/content";

const THUMB_HI = `https://i.ytimg.com/vi/${VIDEO.id}/maxresdefault.jpg`;
const THUMB_LO = `https://i.ytimg.com/vi/${VIDEO.id}/hqdefault.jpg`;

/**
 * Click-to-play video facade.
 * The YouTube iframe is never loaded until someone actually presses play,
 * so the landing page keeps its load speed and the visitor stays in control.
 */
export const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="bg-brand-navy text-brand-navy-foreground py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-blue">
            {VIDEO.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
            {VIDEO.heading}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-brand-cream/90 leading-relaxed">
            {VIDEO.body}
          </p>
        </div>

        <div className="mt-10">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-brand-cream/15 bg-brand-navy-deep shadow-elevated">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${VIDEO.id}?autoplay=1&rel=0`}
                title={VIDEO.playLabel}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={VIDEO.playLabel}
                className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/50"
              >
                <img
                  src={THUMB_HI}
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src !== THUMB_LO) img.src = THUMB_LO;
                  }}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/80 via-brand-navy-deep/25 to-brand-navy-deep/45"
                  aria-hidden
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue text-brand-blue-foreground shadow-elevated transition-transform duration-200 group-hover:scale-105 sm:h-24 sm:w-24">
                    <Play className="h-8 w-8 translate-x-0.5 fill-current sm:h-9 sm:w-9" aria-hidden />
                  </span>
                </span>
              </button>
            )}
          </div>
          <p className="mt-4 text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-cream/70">
            {VIDEO.caption}
          </p>
          <a
            href={VIDEO.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50"
          >
            {VIDEO.watchLabel}
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
};
