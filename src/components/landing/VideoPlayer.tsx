import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import videoCover from "@/assets/hlpr-vsl-thumbnail-hybrid.png.asset.json";

interface VideoPlayerProps {
  /** YouTube video id. */
  id: string;
  /** Accessible name for the play control and the iframe title. */
  title: string;
  className?: string;
}

/**
 * Click-to-play YouTube facade.
 * The iframe is never requested until someone presses play, so pages keep
 * their load speed and the visitor stays in control of what plays.
 */
export const VideoPlayer = ({ id, title, className }: VideoPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const thumbHi = id === "yM1bvu2uPrQ" ? videoCover.url : `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  const thumbLo = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-2xl border border-brand-cream/15 bg-brand-navy-deep shadow-elevated",
        className
      )}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/50"
        >
          <img
            src={thumbHi}
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src !== thumbLo) img.src = thumbLo;
            }}
            alt=""
            aria-hidden
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <span
            className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/80 via-brand-navy-deep/25 to-brand-navy-deep/45"
            aria-hidden
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue text-brand-blue-foreground shadow-elevated transition-transform duration-200 group-hover:scale-105 sm:h-24 sm:w-24">
              <Play
                className="h-8 w-8 translate-x-0.5 fill-current sm:h-9 sm:w-9"
                aria-hidden
              />
            </span>
          </span>
        </button>
      )}
    </div>
  );
};
