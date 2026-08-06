import { Helmet } from "react-helmet-async";
import { StickyNav } from "@/components/landing/StickyNav";
import { Hero } from "@/components/landing/Hero";
import { SocialProofBar } from "@/components/landing/SocialProofBar";
import { PainPointSection } from "@/components/landing/PainPointSection";
import { RiskReversalStrip } from "@/components/landing/RiskReversalStrip";
import { ValueProps } from "@/components/landing/ValueProps";
import { Differentiator } from "@/components/landing/Differentiator";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { MinistryPortfolio } from "@/components/landing/MinistryPortfolio";
import { FounderSection } from "@/components/landing/FounderSection";
import { Pricing } from "@/components/landing/Pricing";
import { FudStrip } from "@/components/landing/FudStrip";
import { FinalCtaBand } from "@/components/landing/FinalCtaBand";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { FAQS } from "@/lib/content";

const OG_IMAGE = "https://ministries.hlpr.io/og-home.jpg";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HLPR Ministries",
  url: "https://ministries.hlpr.io",
  logo: "https://ministries.hlpr.io/favicon.ico",
  description:
    "Custom website design, build, and management for churches, podcasts, and digital ministries.",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom church and ministry website design",
  provider: {
    "@type": "Organization",
    name: "HLPR Ministries",
    url: "https://ministries.hlpr.io",
  },
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "Pastors, ministry leaders, and creator-ministers",
  },
  offers: [
    { "@type": "Offer", name: "Foundation", price: "500", priceCurrency: "USD" },
    { "@type": "Offer", name: "Growth", price: "750", priceCurrency: "USD" },
    { "@type": "Offer", name: "Established", price: "1500", priceCurrency: "USD" },
  ],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>HLPR Ministries — Custom Websites for Ministries</title>
        <meta
          name="description"
          content="We build your church website's homepage before you pay anything. See it live on a 20-minute call, launch in 14 days, cancel anytime."
        />
        <link rel="canonical" href="https://ministries.hlpr.io/" />
        <meta property="og:title" content="HLPR Ministries — Custom Websites for Ministries" />
        <meta
          property="og:description"
          content="We build your church website's homepage before you pay anything. See it live on a 20-minute call, launch in 14 days, cancel anytime."
        />
        <meta property="og:url" content="https://ministries.hlpr.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="HLPR Ministries — custom websites for ministries, live in 14 days" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HLPR Ministries — Custom Websites for Ministries" />
        <meta
          name="twitter:description"
          content="Your ministry's homepage, built before you pay. Live in 14 days. Cancel anytime."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      </Helmet>
      <StickyNav />
      <main id="main">
        <Hero />
        <SocialProofBar />
        <PainPointSection />
        <RiskReversalStrip />
        <ValueProps />
        <Differentiator />
        <HowItWorks />
        <MinistryPortfolio />
        <FounderSection />
        <Pricing />
        <FudStrip />
        <FinalCtaBand />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Index;
