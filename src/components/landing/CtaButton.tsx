import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  label: string;
  size?: "md" | "lg" | "xl";
  className?: string;
  ariaLabel?: string;
}

/**
 * The single primary CTA used across the site.
 * Amber accent is reserved for this button only — never used elsewhere as color emphasis.
 */
export const CtaButton = ({
  href,
  label,
  size = "lg",
  className,
  ariaLabel,
}: CtaButtonProps) => {
  const sizes = {
    md: "px-6 py-3 text-base",
    lg: "px-7 py-4 text-base sm:text-lg",
    xl: "px-8 py-5 text-lg sm:text-xl",
  };

  const handleClick = () => {
    try {
      window.fbq?.("track", "Lead");
      window.gtag?.("event", "generate_lead", {
        value: 0,
        currency: "USD",
        transport_type: "beacon",
      });
    } catch (err) {
      console.warn("Tracking error (non-blocking):", err);
    }
    // intentionally NOT calling preventDefault — let the <a> navigate
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={ariaLabel ?? label}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-xl font-bold tracking-tight",
        "bg-brand-amber text-brand-amber-foreground shadow-cta",
        "transition-all duration-200 ease-out",
        "hover:bg-brand-amber-hover hover:scale-[1.02] hover:shadow-elevated",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-amber/40",
        "min-h-[44px]",
        sizes[size],
        className
      )}
    >
      <span>{label}</span>
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </a>
  );
};
