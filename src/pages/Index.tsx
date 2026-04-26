import { StickyNav } from "@/components/landing/StickyNav";
import { Hero } from "@/components/landing/Hero";
import { SocialProofBar } from "@/components/landing/SocialProofBar";
import { PainPointSection } from "@/components/landing/PainPointSection";
import { RiskReversalStrip } from "@/components/landing/RiskReversalStrip";
import { ValueProps } from "@/components/landing/ValueProps";
import { Differentiator } from "@/components/landing/Differentiator";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FounderTrackRecord } from "@/components/landing/FounderTrackRecord";
import { FounderSection } from "@/components/landing/FounderSection";
import { Pricing } from "@/components/landing/Pricing";
import { FudStrip } from "@/components/landing/FudStrip";
import { FinalCtaBand } from "@/components/landing/FinalCtaBand";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <StickyNav />
      <main id="main">
        <Hero />
        <SocialProofBar />
        <PainPointSection />
        <RiskReversalStrip />
        <ValueProps />
        <Differentiator />
        <HowItWorks />
        <FounderTrackRecord />
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
