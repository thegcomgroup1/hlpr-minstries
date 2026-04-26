/**
 * Custom SVG visuals for the HLPR for Ministries landing page.
 * Strict rules: NO crosses, doves, praying hands, or Bible imagery.
 * Architectural & digital-product imagery only.
 */

export const StainedGlassArch = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 600 800"
    className={className}
    aria-hidden="true"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer arch */}
    <path
      d="M50 800 V 350 a 250 250 0 0 1 500 0 V 800 Z"
      stroke="hsl(var(--brand-teal))"
      strokeOpacity="0.35"
      strokeWidth="2"
    />
    {/* Inner arch divisions */}
    <path d="M150 800 V 400 a 150 150 0 0 1 300 0 V 800" stroke="hsl(var(--brand-teal))" strokeOpacity="0.25" strokeWidth="1.5" />
    <path d="M250 800 V 450 a 50 50 0 0 1 100 0 V 800" stroke="hsl(var(--brand-teal))" strokeOpacity="0.2" strokeWidth="1.5" />
    {/* Vertical mullions */}
    <line x1="200" y1="800" x2="200" y2="430" stroke="hsl(var(--brand-teal))" strokeOpacity="0.2" strokeWidth="1.5" />
    <line x1="300" y1="800" x2="300" y2="380" stroke="hsl(var(--brand-teal))" strokeOpacity="0.25" strokeWidth="1.5" />
    <line x1="400" y1="800" x2="400" y2="430" stroke="hsl(var(--brand-teal))" strokeOpacity="0.2" strokeWidth="1.5" />
    {/* Horizontal transoms */}
    <line x1="50" y1="600" x2="550" y2="600" stroke="hsl(var(--brand-teal))" strokeOpacity="0.18" strokeWidth="1" />
    <line x1="150" y1="500" x2="450" y2="500" stroke="hsl(var(--brand-teal))" strokeOpacity="0.15" strokeWidth="1" />
  </svg>
);

export const ChurchSiteMockup = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 720 520"
    className={className}
    role="img"
    aria-label="Preview of a modern, mobile-friendly church website with service times, plan-a-visit, sermon library, & one-tap giving"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Browser chrome */}
    <rect x="0" y="0" width="720" height="520" rx="16" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
    <rect x="0" y="0" width="720" height="36" rx="16" fill="hsl(var(--brand-cream-deep))" />
    <rect x="0" y="20" width="720" height="16" fill="hsl(var(--brand-cream-deep))" />
    <circle cx="20" cy="18" r="5" fill="#FF5F57" />
    <circle cx="40" cy="18" r="5" fill="#FEBC2E" />
    <circle cx="60" cy="18" r="5" fill="#28C840" />
    <rect x="160" y="9" width="400" height="18" rx="9" fill="hsl(var(--background))" />
    <text x="360" y="22" textAnchor="middle" fontSize="10" fill="hsl(var(--muted-foreground))" fontFamily="Manrope, sans-serif">
      yourchurch.org
    </text>

    {/* Site header */}
    <rect x="0" y="36" width="720" height="48" fill="hsl(var(--card))" />
    <circle cx="36" cy="60" r="12" fill="hsl(var(--brand-navy))" />
    <text x="36" y="64" textAnchor="middle" fontSize="13" fontWeight="700" fill="hsl(var(--brand-amber))" fontFamily="Fraunces, serif">Y</text>
    <text x="58" y="64" fontSize="14" fontWeight="700" fill="hsl(var(--brand-navy))" fontFamily="Fraunces, serif">Your Church</text>
    <text x="450" y="64" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="Manrope, sans-serif">Visit</text>
    <text x="490" y="64" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="Manrope, sans-serif">Sermons</text>
    <text x="545" y="64" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="Manrope, sans-serif">Ministries</text>
    <text x="610" y="64" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="Manrope, sans-serif">About</text>
    <rect x="650" y="48" width="60" height="24" rx="6" fill="hsl(var(--brand-amber))" />
    <text x="680" y="64" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="Manrope, sans-serif">Give</text>

    {/* Hero band */}
    <rect x="0" y="84" width="720" height="220" fill="hsl(var(--brand-navy))" />
    <text x="36" y="140" fontSize="22" fontWeight="700" fill="white" fontFamily="Fraunces, serif">Welcome home.</text>
    <text x="36" y="170" fontSize="22" fontWeight="700" fill="white" fontFamily="Fraunces, serif">We'd love to meet you.</text>
    <text x="36" y="200" fontSize="11" fill="hsl(var(--brand-cream-deep))" fontFamily="Manrope, sans-serif">Sundays at 9am &amp; 11am · 1234 Main St</text>
    <rect x="36" y="220" width="160" height="40" rx="8" fill="hsl(var(--brand-amber))" />
    <text x="116" y="245" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="Manrope, sans-serif">Plan Your Visit</text>
    <rect x="208" y="220" width="120" height="40" rx="8" fill="transparent" stroke="white" strokeWidth="1.5" />
    <text x="268" y="245" textAnchor="middle" fontSize="12" fontWeight="600" fill="white" fontFamily="Manrope, sans-serif">Watch Live</text>

    {/* Sermon library */}
    <text x="36" y="340" fontSize="14" fontWeight="700" fill="hsl(var(--brand-navy))" fontFamily="Fraunces, serif">Recent Sermons</text>
    <rect x="36" y="354" width="200" height="120" rx="10" fill="hsl(var(--brand-cream-deep))" />
    <rect x="36" y="354" width="200" height="80" rx="10" fill="hsl(var(--brand-navy-soft))" />
    <polygon points="126,384 126,404 146,394" fill="white" />
    <text x="48" y="450" fontSize="10" fontWeight="700" fill="hsl(var(--brand-navy))" fontFamily="Manrope, sans-serif">Anchored In Hope</text>
    <text x="48" y="464" fontSize="9" fill="hsl(var(--muted-foreground))" fontFamily="Manrope, sans-serif">Pastor Mike · 38 min</text>

    <rect x="246" y="354" width="200" height="120" rx="10" fill="hsl(var(--brand-cream-deep))" />
    <rect x="246" y="354" width="200" height="80" rx="10" fill="hsl(var(--brand-navy))" />
    <polygon points="336,384 336,404 356,394" fill="white" />
    <text x="258" y="450" fontSize="10" fontWeight="700" fill="hsl(var(--brand-navy))" fontFamily="Manrope, sans-serif">A Gentle Strength</text>
    <text x="258" y="464" fontSize="9" fill="hsl(var(--muted-foreground))" fontFamily="Manrope, sans-serif">Pastor Sarah · 42 min</text>

    <rect x="456" y="354" width="200" height="120" rx="10" fill="hsl(var(--brand-cream-deep))" />
    <rect x="456" y="354" width="200" height="80" rx="10" fill="hsl(var(--brand-navy-soft))" />
    <polygon points="546,384 546,404 566,394" fill="white" />
    <text x="468" y="450" fontSize="10" fontWeight="700" fill="hsl(var(--brand-navy))" fontFamily="Manrope, sans-serif">The Long Welcome</text>
    <text x="468" y="464" fontSize="9" fill="hsl(var(--muted-foreground))" fontFamily="Manrope, sans-serif">Pastor Mike · 35 min</text>
  </svg>
);

export const SermonLibraryViz = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 480 360" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="480" height="360" rx="20" fill="hsl(var(--brand-cream-deep))" />
    {/* Search bar */}
    <rect x="32" y="32" width="416" height="44" rx="10" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
    <circle cx="56" cy="54" r="7" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
    <line x1="61" y1="59" x2="68" y2="66" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" />
    <text x="80" y="59" fontSize="13" fill="hsl(var(--muted-foreground))" fontFamily="Manrope, sans-serif">Search by topic, series, or scripture…</text>
    {/* Cards */}
    {[0, 1, 2].map((i) => (
      <g key={i} transform={`translate(0, ${i * 80})`}>
        <rect x="32" y="100" width="416" height="64" rx="10" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
        <rect x="48" y="116" width="56" height="32" rx="6" fill="hsl(var(--brand-navy))" />
        <polygon points="68,124 68,140 84,132" fill="white" />
        <rect x="120" y="118" width="180" height="10" rx="3" fill="hsl(var(--brand-navy))" />
        <rect x="120" y="136" width="120" height="8" rx="3" fill="hsl(var(--muted))" />
        <rect x="380" y="124" width="52" height="16" rx="8" fill="hsl(var(--brand-cream-deep))" />
        <text x="406" y="135" textAnchor="middle" fontSize="9" fontWeight="700" fill="hsl(var(--brand-navy-soft))" fontFamily="Manrope, sans-serif">Faith</text>
      </g>
    ))}
  </svg>
);

export const CalendarViz = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 480 360" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="480" height="360" rx="20" fill="hsl(var(--brand-cream-deep))" />
    <rect x="60" y="50" width="360" height="270" rx="14" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
    <rect x="60" y="50" width="360" height="44" rx="14" fill="hsl(var(--brand-navy))" />
    <text x="80" y="78" fontSize="14" fontWeight="700" fill="white" fontFamily="Fraunces, serif">14-Day Launch Plan</text>
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2, 3, 4, 5, 6].map((col) => {
        const day = row * 7 + col + 1;
        const highlight = day === 1 || day === 4 || day === 14;
        return (
          <g key={`${row}-${col}`}>
            <rect
              x={76 + col * 48}
              y={108 + row * 48}
              width="40"
              height="40"
              rx="8"
              fill={highlight ? "hsl(var(--brand-amber))" : "hsl(var(--brand-cream-deep))"}
            />
            <text
              x={96 + col * 48}
              y={132 + row * 48}
              textAnchor="middle"
              fontSize="12"
              fontWeight={highlight ? "700" : "500"}
              fill={highlight ? "white" : "hsl(var(--brand-navy))"}
              fontFamily="Manrope, sans-serif"
            >
              {day <= 14 ? day : ""}
            </text>
          </g>
        );
      })
    )}
  </svg>
);

export const ManagedViz = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 480 360" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="480" height="360" rx="20" fill="hsl(var(--brand-cream-deep))" />
    {/* Inbox card */}
    <rect x="40" y="40" width="400" height="280" rx="14" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
    <rect x="40" y="40" width="400" height="40" rx="14" fill="hsl(var(--brand-navy))" />
    <text x="60" y="65" fontSize="13" fontWeight="700" fill="white" fontFamily="Fraunces, serif">Your HLPR Inbox</text>
    {[
      { label: "Sermon uploaded", time: "10:42 AM" },
      { label: "Plan-a-visit form added", time: "Yesterday" },
      { label: "Hosting renewed", time: "Mon" },
      { label: "Security updates applied", time: "Sun" },
    ].map((item, i) => (
      <g key={i}>
        <rect x="56" y={100 + i * 50} width="368" height="40" rx="8" fill="hsl(var(--brand-cream-deep))" />
        <circle cx="76" cy={120 + i * 50} r="9" fill="hsl(var(--brand-navy))" />
        <path d={`M71 ${120 + i * 50} l 4 4 l 7 -8`} stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="100" y={125 + i * 50} fontSize="12" fontWeight="600" fill="hsl(var(--brand-navy))" fontFamily="Manrope, sans-serif">{item.label}</text>
        <text x="404" y={125 + i * 50} textAnchor="end" fontSize="10" fill="hsl(var(--muted-foreground))" fontFamily="Manrope, sans-serif">{item.time}</text>
      </g>
    ))}
  </svg>
);

export const BudgetViz = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 480 360" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="480" height="360" rx="20" fill="hsl(var(--brand-cream-deep))" />
    {/* Bar chart comparing agency vs HLPR */}
    <text x="40" y="60" fontSize="13" fontWeight="700" fill="hsl(var(--brand-navy))" fontFamily="Fraunces, serif">Typical Quote vs HLPR</text>
    {/* Agency bar */}
    <text x="40" y="110" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="Manrope, sans-serif">Traditional agency</text>
    <rect x="40" y="120" width="380" height="36" rx="8" fill="hsl(var(--muted))" />
    <text x="412" y="143" textAnchor="end" fontSize="13" fontWeight="700" fill="hsl(var(--brand-navy))" fontFamily="Manrope, sans-serif">$15,000+</text>
    {/* HLPR bar */}
    <text x="40" y="200" fontSize="11" fill="hsl(var(--muted-foreground))" fontFamily="Manrope, sans-serif">HLPR for Ministries</text>
    <rect x="40" y="210" width="76" height="36" rx="8" fill="hsl(var(--brand-navy))" />
    <text x="124" y="233" fontSize="13" fontWeight="700" fill="hsl(var(--brand-navy))" fontFamily="Manrope, sans-serif">$1,500</text>
    {/* Save callout */}
    <rect x="40" y="280" width="400" height="48" rx="10" fill="hsl(var(--brand-navy))" />
    <text x="60" y="310" fontSize="14" fontWeight="700" fill="white" fontFamily="Fraunces, serif">You save $13,500+ on day one.</text>
  </svg>
);
