import { ExternalLink } from "lucide-react";
import { VIDEO } from "@/lib/content";
import { VideoPlayer } from "./VideoPlayer";

export const VideoSection = () => {
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
          <VideoPlayer id={VIDEO.id} title={VIDEO.title} />
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
