/**
 * Reusable browser-chrome frame for portfolio screenshots.
 * macOS-style window with traffic light dots + URL pill,
 * wrapping a 16:9 screenshot of the actual site.
 */

interface BrowserFrameProps {
  imageSrc: string;
  imageAlt: string;
  url: string;
  className?: string;
}

export const BrowserFrame = ({
  imageSrc,
  imageAlt,
  url,
  className = "",
}: BrowserFrameProps) => {
  return (
    <div className={`flex flex-col w-full h-full bg-card ${className}`}>
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-3 sm:px-4 py-2.5 bg-muted border-b border-border">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="block h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
          <span className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
        </div>

        {/* URL pill */}
        <div className="flex-1 flex justify-center min-w-0">
          <div className="max-w-full truncate rounded-md bg-card border border-border px-3 py-1 text-[11px] sm:text-xs text-brand-navy-soft font-medium">
            {url}
          </div>
        </div>

        {/* Spacer for visual symmetry with traffic lights */}
        <div className="w-[42px] flex-shrink-0" aria-hidden />
      </div>

      {/* Screenshot */}
      <div className="flex-1 overflow-hidden bg-card">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};
