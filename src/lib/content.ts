// HLPR for Ministries — single source of truth for all landing copy.
// Edit copy here; components are presentational.

export const BUSINESS = {
  name: "HLPR for Ministries",
  shortName: "HLPR",
  tagline: "Church websites that breathe.",
  domain: "ministries.hlpr.io", // TODO_CONFIRM_SUBDOMAIN
  ctaUrl:
    "https://links.hlpr.io/booking/TO8SkIKU2m4j6qJjvnA4/sv/69f0e238ea90ab5355db1852?utm_source=ministries-lp&utm_medium=cta&utm_campaign=organic",
  ctaLabel: "Get My Free Homepage Preview",
  riskReversal:
    "Free homepage preview in 72 hours. No payment until you approve. 100% money-back if your site doesn't reflect your ministry.",
  riskReversalShort:
    "Free preview in 72 hours · No payment until you approve · 100% money-back",
};

export const NAV_LINKS = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Packages", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Founder", href: "#founder" },
  { label: "FAQ", href: "#faq" },
];

export const MINISTRY_PORTFOLIO = [
  {
    id: "lifework",
    name: "LifeWork Ministries",
    niche: "Counseling & Teaching",
    tagline: "Transforming Lives Through Faith & Purpose",
    description:
      "A counseling, teaching, & sponsorship ministry empowering individuals & families to discover their God-given purpose. Full e-commerce, donations, & ministry pages.",
  },
  {
    id: "eden-cove",
    name: "Eden Cove",
    niche: "Sacred Farm Retreat",
    tagline: "Come and Rest a While",
    description:
      "A Delaware farm retreat hosting weddings, retreats, & corporate events. Booking flows, activity discovery, & a calm, nature-forward design that mirrors the venue itself.",
  },
  {
    id: "saved-singles",
    name: "Saved Singles Summit",
    niche: "Christian Community",
    tagline: "Presence. Purpose. Passion. Power.",
    description:
      "A ministry empowering Christian singles to live purposefully while waiting on God's timing. Event registration, summit promotion, & community-focused design.",
  },
  {
    id: "dunamis",
    name: "Dunamis Marketing",
    niche: "Agency Partner",
    tagline: "We Help Purpose-Driven Brands Grow, Scale, & Multiply Their Impact",
    description:
      "A faith-based marketing agency that does radio, TV, & media outreach for ministries. They refer churches to HLPR, we built their digital presence.",
  },
];

export const HERO = {
  eyebrow: "For senior pastors & church communications teams",
  // Headline formula: outcome-pair (kingdom + bottom-line) + timeframe
  // "More souls reached" carries the discipleship/eternal weight.
  // "More seats filled" carries the tithe/seats/reach weight.
  // Together they're inseparable, which mirrors the ministry truth.
  headline: {
    pre: "More souls reached. More seats filled.",
    bold: "Live in 14 days.",
  },
  sub: "Your worship is alive. Your preaching is anointed. Your website should match. We build modern, mobile-first ministry sites that turn Saturday-night searches into Wednesday-night faith — with a free homepage preview in 72 hours.",
  trust: [
    "Free preview in 72 hours",
    "No payment until you approve",
    "100% money-back",
  ],
};

export const VENDOR_PARTNERS = [
  "Google Partner",
  "Meta Business Partner",
  "Klaviyo Master Partner",
  "Stripe Verified",
  "GoHighLevel Certified",
];

export const FOUNDER_STATS = [
  { stat: "$916K+", label: "Google Ads managed" },
  { stat: "$341K+", label: "Meta Ads managed" },
  { stat: "$170K+", label: "Client revenue generated" },
  { stat: "68%", label: "Avg email open rate" },
];

export const PAIN_POINTS = [
  {
    bold: "First-time visitors search for you Saturday night,",
    rest: "& whatever they find decides whether they show up Sunday morning. Right now, what they find isn't doing your ministry justice.",
  },
  {
    bold: "Your site looks 10+ years old",
    rest: "& it's broken on mobile, where 87% of first-time visitors actually find you.",
  },
  {
    bold: "Web agencies quote $10K-25K & 4 months",
    rest: "for budgets ministries simply don't have.",
  },
  {
    bold: "Wix & Squarespace templates aren't built for ministry,",
    rest: "no real sermon library, no plan-a-visit, no one-tap giving.",
  },
  {
    bold: "There's no tech person at the church",
    rest: "to update, fix, or manage anything ongoing. So nothing changes.",
  },
];

export const VALUE_PROPS = [
  {
    id: "ministry-workflows",
    eyebrow: "Built for ministry, not retail",
    title:
      "Sermon library, plan-a-visit, & one-tap giving baked in",
    body: "Every site ships with a searchable sermon archive (YouTube or Vimeo), a Plan-Your-Visit form wired to your CRM, & one-tap giving via Tithe.ly, Pushpay, Givelify, or Stripe. The workflows your congregation actually uses, on day one.",
    bullets: [
      "Searchable sermon library by topic, series, & scripture",
      "Plan-Your-Visit form connected to your CRM",
      "One-tap giving with the platform you already use",
    ],
    visual: "ministry",
  },
  {
    id: "fourteen-days",
    eyebrow: "Live in 14 days, not 4 months",
    title: "Your homepage preview lands in 72 hours",
    body: "Most agencies take 4 months to deliver. We deliver a free, fully-designed homepage preview in 72 hours, then ship the full site live within 14 days, end to end. Your next visitor sees the new site this month.",
    bullets: [
      "72-hour free homepage preview",
      "14-day average launch, end to end",
      "No 6-figure quote, no 4-month wait",
    ],
    visual: "calendar",
  },
  {
    id: "fully-managed",
    eyebrow: "Fully managed, forever",
    title: "The 'tech person at church' never has to be you",
    body: "Hosting, security updates, sermon uploads, content tweaks, analytics — all included monthly. You email us, we ship. Your team gets back to ministry instead of fighting WordPress plugins at 11pm on Saturday.",
    bullets: [
      "Hosting + monthly security updates included",
      "Sermon & content updates handled for you",
      "Monthly analytics + recommendations call",
    ],
    visual: "managed",
  },
  {
    id: "kingdom-impact",
    eyebrow: "The reach you've been called to",
    title: "Meet your community where they actually are — on their phone",
    body: "Most Gen Z visitors discover churches on their phone first — long before they ever walk through your doors. Your site is the first sermon they'll experience. We design every page to turn first-time mobile visitors into in-person attenders, recurring givers, & lifelong members of your congregation.",
    bullets: [
      "Mobile-first design that holds up on any screen size",
      "First-visit conversion paths (plan-a-visit, give, sermon preview)",
      "Built for the generation rediscovering Christ on their phone",
    ],
    visual: "ministry",
  },
];

export const DIFFERENTIATOR = {
  heading: "Why HLPR works when other options don't",
  sub: "Most churches end up choosing between three bad doors. Here's what's behind each one, & the door we built for ministry.",
  comparison: [
    {
      title: "Traditional web agencies",
      tone: "negative",
      points: [
        "$10K-25K quotes",
        "3-4 month timelines",
        "No ongoing management included",
        "Built for SaaS startups, not Sundays",
      ],
    },
    {
      title: "DIY templates (Wix, Squarespace)",
      tone: "negative",
      points: [
        "Generic, looks like every other small business",
        "No real sermon library or giving workflows",
        "You build it, you fix it, you maintain it",
        "Mobile-broken out of the box",
      ],
    },
    {
      title: "The HLPR for Ministries way",
      tone: "positive",
      points: [
        "Free homepage preview in 72 hours",
        "Live in 14 days, fully managed forever",
        "Built specifically for ministry workflows",
        "Stewardship-priced & money-back guaranteed",
      ],
    },
  ],
};

export const HOW_IT_WORKS = [
  {
    n: "01",
    title: "Book your free homepage preview",
    body: "20-minute call. We listen to your ministry, your congregation, your goals. No sales pressure, no obligation.",
    timeframe: "Day 1",
  },
  {
    n: "02",
    title: "We design your homepage in 72 hours",
    body: "You get a real, fully-designed homepage preview in your inbox within 72 hours. If you love it, we build the full site. If you don't, you owe us nothing.",
    timeframe: "Day 4",
  },
  {
    n: "03",
    title: "Approve & launch in 14 days",
    body: "Sermon library, plan-a-visit, giving, & all core pages live within 14 days of approval. We handle hosting, updates, & ongoing management forever.",
    timeframe: "Day 14",
  },
];

export const FOUNDING_PARTNER = {
  badge: "Founding Partner Program",
  headline:
    "We're hand-picking our first 5 ministry partners.",
  body: "Founding-rate pricing locked in for life, plus direct text access to me throughout the build.",
  spots: "5 spots remaining.",
};

export const FOUNDER_TRACK_RECORD = {
  heading:
    "Our church client testimonials are still coming in. Here's what's already in our hands.",
  sub: "HLPR for Ministries is new. The team behind it isn't. These are real numbers from real client work across the last 5 years — the same systems we now bring to ministry.",
  cards: [
    {
      icon: "trending-up",
      stat: "$1.2M+",
      context: "In paid traffic managed across Google & Meta — the same playbook now driving Saturday-night searches to ministry sites",
      tag: "Reach",
    },
    {
      icon: "heart-handshake",
      stat: "$170K+",
      context: "In direct client revenue generated through the digital systems we now bring to ministry partners",
      tag: "Growth",
    },
    {
      icon: "mail-open",
      stat: "68%",
      context: "Average email open rate for our clients (industry average: 20%) — the engagement bar we hold ourselves to",
      tag: "Engagement",
    },
    {
      icon: "calendar-check",
      stat: "14 days",
      context: "From kickoff call to public launch — average ministry site go-live time, end to end",
      tag: "Speed",
    },
    {
      icon: "users",
      stat: "5",
      context: "Founding ministry partners we're hand-picking before public launch — founding-rate pricing locked in for life",
      tag: "Founding Partners",
    },
    {
      icon: "shield-check",
      stat: "100%",
      context: "Money-back guarantee if your finished site doesn't reflect your ministry — no hostage situations, no fine print",
      tag: "Stewardship",
    },
  ],
};

export const FOUNDER = {
  name: "Tim Godson",
  title: "Founder, HLPR",
  monogram: "T",
  story: [
    "I started HLPR because I watched too many ministries with powerful messages get trapped behind tired websites. Their pastor would preach to thousands on Sunday, then lose every first-time visitor who looked them up on Wednesday. The agencies quoting $25K and four months were never going to solve it. The 'tech person at church' was burned out trying. Wix templates were never built for ministry.",
    "HLPR is the answer I wish someone had given me twenty years ago when I sat in a pew wondering why our church's website looked nothing like our church. Modern. Mobile. Fully managed. At a price built for stewardship, not for agencies. Built for the kingdom, not for portfolios.",
    "I'd be honored to build yours.",
  ],
  signature: "Tim Godson",
  // TODO_MISSING_INPUT: founder Instagram handle — replace [MY_HANDLE] in the URL below
  instagramUrl: "https://instagram.com/[MY_HANDLE]",
};

export const PRICING_TIERS = [
  {
    name: "Growth",
    target: "Established churches, 150-500 members",
    anchorPrice: "$5,000",
    price: "$2,500",
    cadence: "build + $200/mo",
    savings: "Save $2,500",
    mostPopular: false,
    features: [
      "Custom homepage + up to 12 pages (About, Visit, Sermons, Give, Ministries, Staff, Events, Blog, Contact)",
      "Mobile-first responsive design",
      "Searchable sermon library by topic, series, & scripture",
      "Plan-Your-Visit form connected to your CRM",
      "One-tap giving (Tithe.ly, Pushpay, Givelify, or Stripe)",
      "Live stream embed + service archive",
      "Newsletter + welcome email automation",
      "Hosting + monthly security updates",
      "Monthly analytics + recommendations call",
      "Priority support (24h response)",
    ],
  },
  {
    name: "Established",
    target: "For 500+ congregations & multi-campus ministries",
    anchorPrice: "",
    price: "Custom",
    cadence: "tailored quote",
    savings: "Founding-partner pricing locked in",
    mostPopular: true,
    features: [
      "Everything in Growth, plus:",
      "Multi-campus / multi-site architecture",
      "Member portal (sign-in area for community)",
      "Custom integrations (Planning Center, CCB, Tithe.ly, Pushpay)",
      "Dedicated account manager",
      "Quarterly strategy sessions",
      "Direct text access to the founder throughout the build",
    ],
  },
];

export const PRICING_CROSSSELL =
  "After your site is live, we also offer email marketing retainers (Bronze, Silver, Gold) for ministries ready to grow their congregation digitally. Ask about it on your free homepage preview call.";

export const FUD_ITEMS = [
  { icon: "gift", label: "Free homepage preview" },
  { icon: "message-circle", label: "Direct founder access" },
  { icon: "sparkles", label: "Custom to your ministry" },
  { icon: "unlock", label: "No long-term contract" },
];

export const FINAL_CTA = {
  headline:
    "More souls reached. More seats filled. Live in 14 days.",
  sub: BUSINESS.riskReversal,
};

export const FAQS = [
  {
    q: "Does this work for non-denominational, mainline, charismatic, or Spanish-language churches?",
    a: "Yes. We've designed HLPR for Ministries to feel like home for non-denom, evangelical, mainline, charismatic, & Spanish-speaking congregations alike. Your site is custom-built to reflect your specific ministry's voice, language, & visual identity, never a one-size-fits-all template.",
  },
  {
    q: "Will my site reflect our doctrine and aesthetic, or will it look like every other 'church website'?",
    a: "Your site reflects your ministry — period. We start every build by listening: your statement of faith, your traditions, your visual language, the way your congregation actually talks. A Reformed Baptist site looks Reformed Baptist. A Pentecostal site looks Pentecostal. An Anglican site looks Anglican. We never push templates. We never paint your ministry into a generic 'evangelical brand.' If our first homepage preview misses your doctrine or aesthetic, we rebuild it until it doesn't — at no cost to you.",
  },
  {
    q: "How is this different from Sharefaith, Wix, or hiring a freelancer?",
    a: "Sharefaith & Ekklesia360 lock you into their templates. Wix & Squarespace look generic & weren't built for ministry workflows. Freelancers ghost. We design custom, build for ministry-specific needs (sermons, giving, plan-a-visit), launch in 14 days, & manage everything ongoing — all at a stewardship-priced flat rate.",
  },
  {
    q: "Can you really launch a full church website in 14 days?",
    a: "Yes. We deliver a free homepage preview in 72 hours. Once you approve, the full site (5-12 pages, sermon library, giving, plan-a-visit, hosting) is live within 14 days. We've built the entire production process around this timeline.",
  },
  {
    q: "How much work is required from our team?",
    a: "Roughly 2-3 hours total across the build. One 20-minute kickoff call, a Google Drive folder of your logo, photos, & service info, & a single approval call. We handle copy, design, build, integrations, & launch. You get back to ministry.",
  },
  {
    q: "What if we don't like the design? What if we want to leave later?",
    a: "If you don't approve the homepage preview, you owe us nothing, ever. After launch, you're on a month-to-month plan — no contract. If you ever want to leave, we'll hand off your site files cleanly. We also offer a 100% money-back guarantee if your finished site doesn't reflect your ministry.",
  },
  {
    q: "Who runs HLPR? We've never heard of you.",
    a: "HLPR is led by Tim Godson, who's managed over $1.2M in paid traffic across Google & Meta and generated $170K+ in direct client revenue across the last 5 years. The same systems that grew those businesses now power our ministry sites. HLPR for Ministries is a new offering, & we're hand-picking our first 5 partners with founding-rate pricing locked in for life. You'll work directly with Tim throughout the build.",
  },
  {
    q: "How does onboarding work? Who hosts the site? What happens to our existing content?",
    a: "We host everything (hosting included in your monthly fee). After your kickoff call, we migrate any existing sermons, photos, & content you want to keep, set up your domain (we'll handle the DNS), connect your giving & CRM tools, & launch. Your old site stays live until your new one is approved & ready to go.",
  },
  {
    q: "What happens after I book my free homepage preview?",
    a: "You'll get a calendar link to pick a 20-minute slot this week. On the call, we listen to your ministry & ask the questions we need to design your homepage. Within 72 hours, your custom homepage preview lands in your inbox. From there, you decide. No pressure, no payment until you approve.",
  },
];
