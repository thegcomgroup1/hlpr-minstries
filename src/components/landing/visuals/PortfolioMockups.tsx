/**
 * Portfolio mockups for MinistryPortfolio section.
 * Pure SVG, no external assets, no religious symbols.
 * Each mockup matches the visual identity of the actual live site.
 */

const BrowserChrome = ({ url }: { url: string }) => (
  <>
    <rect x="0" y="0" width="480" height="28" rx="12" fill="#1f2937" />
    <rect x="0" y="14" width="480" height="14" fill="#1f2937" />
    <circle cx="14" cy="14" r="4" fill="#ff5f57" />
    <circle cx="28" cy="14" r="4" fill="#febc2e" />
    <circle cx="42" cy="14" r="4" fill="#28c840" />
    <rect x="120" y="6" width="240" height="16" rx="8" fill="#0f172a" />
    <text
      x="240"
      y="17"
      textAnchor="middle"
      fontSize="9"
      fill="#94a3b8"
      fontFamily="Manrope, sans-serif"
    >
      {url}
    </text>
  </>
);

export const LifeWorkMockup = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 480 320"
    className={className}
    role="img"
    aria-label="LifeWork Ministries website preview"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="lw-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(180, 30%, 15%)" />
        <stop offset="100%" stopColor="hsl(180, 20%, 25%)" />
      </linearGradient>
      <radialGradient id="lw-glow" cx="0.5" cy="0.4" r="0.7">
        <stop offset="0%" stopColor="#D4A857" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#D4A857" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Background */}
    <rect x="0" y="28" width="480" height="292" fill="url(#lw-bg)" />
    <rect x="0" y="28" width="480" height="292" fill="url(#lw-glow)" />

    {/* Subtle tree silhouettes */}
    <path d="M0 320 L0 230 Q 40 200 60 230 Q 90 195 110 235 Q 140 205 170 240 L 170 320 Z" fill="#0d1f1f" opacity="0.55" />
    <path d="M310 320 L310 245 Q 340 215 370 245 Q 400 210 430 245 Q 460 220 480 245 L480 320 Z" fill="#0d1f1f" opacity="0.55" />

    <BrowserChrome url="lifeworkministries.com" />

    {/* Logo */}
    <g transform="translate(208, 60)">
      <path d="M8 14 Q 4 6 12 2 Q 20 6 16 14 Q 18 18 12 20 Q 6 18 8 14 Z" fill="#D4A857" />
      <text x="26" y="17" fontSize="14" fontWeight="700" fill="#ffffff" fontFamily="Fraunces, serif">LifeWork</text>
    </g>

    {/* Eyebrow */}
    <text
      x="240"
      y="108"
      textAnchor="middle"
      fontSize="9"
      fontWeight="600"
      letterSpacing="2"
      fill="#ffffff"
      fontFamily="Manrope, sans-serif"
    >
      WELCOME TO LIFEWORK MINISTRIES
    </text>

    {/* Headline */}
    <text x="240" y="148" textAnchor="middle" fontSize="22" fontWeight="700" fill="#ffffff" fontFamily="Fraunces, serif">
      Transforming Lives Through
    </text>
    <text x="240" y="180" textAnchor="middle" fontSize="24" fontWeight="700" fontStyle="italic" fill="#D4A857" fontFamily="Fraunces, serif">
      Faith &amp; Purpose
    </text>

    {/* Sub */}
    <text x="240" y="210" textAnchor="middle" fontSize="10" fill="#ffffff" fillOpacity="0.7" fontFamily="Manrope, sans-serif">
      Counseling, teaching, &amp; sponsorship for individuals and families.
    </text>

    {/* Buttons */}
    <rect x="120" y="240" width="150" height="36" rx="6" fill="#D4A857" />
    <text x="195" y="263" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1a1a1a" fontFamily="Manrope, sans-serif">
      Schedule Counseling
    </text>
    <rect x="280" y="240" width="100" height="36" rx="6" fill="transparent" stroke="#ffffff" strokeWidth="1.5" />
    <text x="330" y="263" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ffffff" fontFamily="Manrope, sans-serif">
      Learn More
    </text>
  </svg>
);

export const EdenCoveMockup = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 480 320"
    className={className}
    role="img"
    aria-label="Eden Cove website preview"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="ec-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(200, 60%, 75%)" />
        <stop offset="100%" stopColor="hsl(200, 40%, 85%)" />
      </linearGradient>
      <linearGradient id="ec-ground" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(28, 45%, 35%)" />
        <stop offset="100%" stopColor="hsl(22, 40%, 22%)" />
      </linearGradient>
    </defs>

    {/* Sky */}
    <rect x="0" y="28" width="480" height="200" fill="url(#ec-sky)" />
    {/* Clouds */}
    <ellipse cx="80" cy="80" rx="38" ry="10" fill="#ffffff" opacity="0.85" />
    <ellipse cx="105" cy="74" rx="28" ry="9" fill="#ffffff" opacity="0.85" />
    <ellipse cx="380" cy="100" rx="44" ry="11" fill="#ffffff" opacity="0.8" />
    <ellipse cx="410" cy="92" rx="30" ry="9" fill="#ffffff" opacity="0.8" />
    <ellipse cx="240" cy="60" rx="34" ry="8" fill="#ffffff" opacity="0.7" />

    {/* Tree silhouettes (autumn) */}
    <rect x="0" y="200" width="480" height="120" fill="url(#ec-ground)" />
    <g opacity="0.95">
      <ellipse cx="60" cy="200" rx="55" ry="38" fill="hsl(18, 55%, 38%)" />
      <ellipse cx="140" cy="195" rx="48" ry="34" fill="hsl(28, 60%, 42%)" />
      <ellipse cx="220" cy="200" rx="60" ry="40" fill="hsl(14, 50%, 35%)" />
      <ellipse cx="310" cy="195" rx="50" ry="36" fill="hsl(32, 55%, 40%)" />
      <ellipse cx="400" cy="200" rx="58" ry="38" fill="hsl(22, 55%, 38%)" />
      <ellipse cx="470" cy="200" rx="40" ry="32" fill="hsl(18, 50%, 36%)" />
    </g>

    <BrowserChrome url="edencove.org" />

    {/* Eyebrow */}
    <text
      x="240"
      y="100"
      textAnchor="middle"
      fontSize="9"
      fontWeight="700"
      letterSpacing="3"
      fill="#ffffff"
      fontFamily="Manrope, sans-serif"
    >
      EDEN COVE
    </text>

    {/* Headline */}
    <text x="240" y="138" textAnchor="middle" fontSize="26" fontWeight="700" fontStyle="italic" fill="#ffffff" fontFamily="Fraunces, serif">
      Come and Rest
    </text>
    <text x="240" y="170" textAnchor="middle" fontSize="26" fontWeight="700" fontStyle="italic" fill="#ffffff" fontFamily="Fraunces, serif">
      a While
    </text>

    {/* Sub */}
    <text x="240" y="195" textAnchor="middle" fontSize="10" fill="#ffffff" fontFamily="Manrope, sans-serif">
      A sacred farm retreat for weddings, retreats, &amp; gatherings.
    </text>

    {/* Buttons */}
    <rect x="110" y="248" width="150" height="36" rx="6" fill="hsl(150, 35%, 30%)" />
    <text x="185" y="271" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff" fontFamily="Manrope, sans-serif">
      Book Your Stay
    </text>
    <rect x="270" y="248" width="140" height="36" rx="6" fill="transparent" stroke="#ffffff" strokeWidth="1.5" />
    <text x="340" y="271" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ffffff" fontFamily="Manrope, sans-serif">
      Explore Activities
    </text>
  </svg>
);

export const SavedSinglesMockup = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 480 320"
    className={className}
    role="img"
    aria-label="Saved Singles Summit website preview"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="ss-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a1a1f" />
        <stop offset="100%" stopColor="#0a0a0d" />
      </linearGradient>
      <radialGradient id="ss-spot" cx="0.5" cy="0.6" r="0.6">
        <stop offset="0%" stopColor="#E94B3C" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#E94B3C" stopOpacity="0" />
      </radialGradient>
    </defs>

    <rect x="0" y="28" width="480" height="292" fill="url(#ss-bg)" />
    <rect x="0" y="28" width="480" height="292" fill="url(#ss-spot)" />

    {/* Faux silhouette of a small group photo */}
    <g opacity="0.35" transform="translate(0, 200)">
      <ellipse cx="120" cy="80" rx="32" ry="42" fill="#2a2a30" />
      <ellipse cx="180" cy="78" rx="34" ry="46" fill="#2e2e34" />
      <ellipse cx="240" cy="74" rx="36" ry="50" fill="#33333a" />
      <ellipse cx="300" cy="78" rx="34" ry="46" fill="#2e2e34" />
      <ellipse cx="360" cy="80" rx="32" ry="42" fill="#2a2a30" />
    </g>

    <BrowserChrome url="savedsinglessummit.com" />

    {/* Coral notification bar */}
    <rect x="0" y="28" width="480" height="22" fill="#E94B3C" />
    <text x="240" y="43" textAnchor="middle" fontSize="10" fontWeight="600" fill="#ffffff" fontFamily="Manrope, sans-serif">
      Join us for the next Saved Singles Summit event!
    </text>

    {/* Logo */}
    <g transform="translate(170, 70)">
      <path d="M4 16 L 14 4 L 22 14 L 30 6 L 40 16 Z" fill="#E94B3C" />
      <text x="48" y="16" fontSize="12" fontWeight="700" fill="#ffffff" fontFamily="Fraunces, serif">
        Saved Singles Summit
      </text>
    </g>

    {/* Eyebrow */}
    <text
      x="240"
      y="118"
      textAnchor="middle"
      fontSize="9"
      fontWeight="600"
      letterSpacing="2"
      fill="#ffffff"
      fontFamily="Manrope, sans-serif"
    >
      WELCOME TO SAVED SINGLES SUMMIT
    </text>

    {/* Headline */}
    <text x="240" y="160" textAnchor="middle" fontSize="22" fontWeight="700" fontStyle="italic" fill="#E94B3C" fontFamily="Fraunces, serif">
      Presence. Purpose.
    </text>
    <text x="240" y="190" textAnchor="middle" fontSize="22" fontWeight="700" fontStyle="italic" fill="#E94B3C" fontFamily="Fraunces, serif">
      Passion. Power.
    </text>

    {/* Sub */}
    <text x="240" y="216" textAnchor="middle" fontSize="10" fill="#ffffff" fontFamily="Manrope, sans-serif">
      A Christian community for singles living on purpose.
    </text>

    {/* Buttons */}
    <rect x="110" y="248" width="160" height="36" rx="6" fill="#E94B3C" />
    <text x="190" y="271" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff" fontFamily="Manrope, sans-serif">
      Join a Summit Event
    </text>
    <rect x="280" y="248" width="100" height="36" rx="6" fill="transparent" stroke="#ffffff" strokeWidth="1.5" />
    <text x="330" y="271" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ffffff" fontFamily="Manrope, sans-serif">
      Learn More
    </text>
  </svg>
);

export const DunamisMockup = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 480 320"
    className={className}
    role="img"
    aria-label="Dunamis Marketing website preview"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="dm-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(220, 40%, 8%)" />
        <stop offset="100%" stopColor="hsl(220, 30%, 15%)" />
      </linearGradient>
      <radialGradient id="dm-spot-tl" cx="0" cy="0" r="0.6">
        <stop offset="0%" stopColor="#D4A857" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#D4A857" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="dm-spot-br" cx="1" cy="1" r="0.6">
        <stop offset="0%" stopColor="#D4A857" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#D4A857" stopOpacity="0" />
      </radialGradient>
    </defs>

    <rect x="0" y="28" width="480" height="292" fill="url(#dm-bg)" />
    <rect x="0" y="28" width="480" height="292" fill="url(#dm-spot-tl)" />
    <rect x="0" y="28" width="480" height="292" fill="url(#dm-spot-br)" />

    <BrowserChrome url="dunamismarketing.com" />

    {/* Top nav strip */}
    <rect x="0" y="28" width="480" height="36" fill="#000000" fillOpacity="0.35" />
    <text x="16" y="48" fontSize="13" fontWeight="700" fill="#ffffff" fontFamily="Fraunces, serif">
      Dunamis
    </text>
    <text x="16" y="58" fontSize="7" fill="#ffffff" fillOpacity="0.6" fontFamily="Manrope, sans-serif">
      Marketing Global
    </text>
    {["Home", "Services", "Work", "About", "Contact"].map((item, i) => (
      <text
        key={item}
        x={170 + i * 44}
        y="50"
        fontSize="9"
        fill="#ffffff"
        fillOpacity="0.75"
        fontFamily="Manrope, sans-serif"
      >
        {item}
      </text>
    ))}
    <rect x="396" y="38" width="72" height="20" rx="4" fill="#D4A857" />
    <text x="432" y="51" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1a1a1a" fontFamily="Manrope, sans-serif">
      Get in Touch
    </text>

    {/* Headline (4 lines) */}
    <text x="240" y="108" textAnchor="middle" fontSize="18" fontWeight="700" fill="#ffffff" fontFamily="Fraunces, serif">
      We Help Purpose-Driven
    </text>
    <text x="240" y="132" textAnchor="middle" fontSize="18" fontWeight="700" fill="#ffffff" fontFamily="Fraunces, serif">
      Brands
    </text>
    <text x="240" y="160" textAnchor="middle" fontSize="20" fontWeight="700" fontStyle="italic" fill="#D4A857" fontFamily="Fraunces, serif">
      Grow, Scale, and Multiply
    </text>
    <text x="240" y="184" textAnchor="middle" fontSize="20" fontWeight="700" fontStyle="italic" fill="#D4A857" fontFamily="Fraunces, serif">
      Their Impact
    </text>

    {/* Sub */}
    <text
      x="240"
      y="208"
      textAnchor="middle"
      fontSize="10"
      fontStyle="italic"
      fill="#ffffff"
      fillOpacity="0.7"
      fontFamily="Manrope, sans-serif"
    >
      Through a 360° growth approach
    </text>

    {/* Buttons */}
    <rect x="80" y="248" width="190" height="38" rx="6" fill="#D4A857" />
    <text x="175" y="272" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1a1a1a" fontFamily="Manrope, sans-serif">
      Build Your Growth Ecosystem
    </text>
    <rect x="282" y="248" width="130" height="38" rx="6" fill="transparent" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.7" />
    <text x="347" y="272" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ffffff" fontFamily="Manrope, sans-serif">
      See How It Works
    </text>
  </svg>
);
