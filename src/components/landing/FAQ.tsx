import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, BUSINESS } from "@/lib/content";
import { CtaButton } from "./CtaButton";

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-navy-soft">
            Common questions
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy text-balance leading-tight">
            Honest answers to the questions you're already thinking.
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="faq-0"
          className="mt-12 space-y-3"
        >
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-5 sm:px-6 shadow-soft data-[state=open]:shadow-elevated"
            >
              <AccordionTrigger className="text-left font-serif text-lg sm:text-xl font-bold text-brand-navy hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-brand-navy-soft leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-14 text-center">
          <p className="font-serif text-xl sm:text-2xl font-bold text-brand-navy">
            Still have questions?
          </p>
          <p className="mt-2 text-base text-brand-navy-soft">
            Bring them to your free homepage preview call. No obligation.
          </p>
          <div className="mt-6 inline-flex flex-col items-center gap-3">
            <CtaButton href={BUSINESS.ctaUrl} label={BUSINESS.ctaLabel} size="lg" />
            <p className="text-xs text-brand-navy-soft">
              {BUSINESS.riskReversalShort}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
