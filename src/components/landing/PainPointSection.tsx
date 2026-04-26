import { XCircle } from "lucide-react";
import { PAIN_POINTS } from "@/lib/content";

export const PainPointSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="font-serif text-2xl sm:text-3xl font-semibold text-brand-navy">
          Dear Pastor,
        </p>

        <p className="mt-5 text-lg text-brand-navy-soft leading-relaxed">
          You're preaching to a full sanctuary on Sunday. Then on Wednesday, a
          first-time visitor pulls up your website on her phone, & it's broken.
          The hero image won't load. The service times are from 2019. The give
          button goes nowhere.
        </p>

        <p className="mt-4 text-lg text-brand-navy-soft leading-relaxed">
          She closes the tab. She doesn't come Sunday. You'll never know she
          almost did.
        </p>

        <h2 className="mt-12 font-serif text-3xl sm:text-4xl font-bold text-brand-navy text-balance leading-tight">
          If any of this sounds familiar, you're not alone:
        </h2>

        <ul className="mt-8 space-y-5">
          {PAIN_POINTS.map((p) => (
            <li key={p.bold} className="flex gap-4">
              <XCircle className="h-6 w-6 flex-shrink-0 text-brand-navy mt-0.5" aria-hidden />
              <p className="text-base sm:text-lg text-brand-navy-soft leading-relaxed">
                <span className="font-semibold text-brand-navy">{p.bold}</span>{" "}
                {p.rest}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl bg-brand-cream-deep border border-border p-6 sm:p-8">
          <p className="text-base sm:text-lg text-brand-navy leading-relaxed">
            <span className="font-bold">None of this is your fault.</span> Your
            calling is to shepherd people, not to learn WordPress at 11pm on
            Saturday. You shouldn't have to choose between a $25K agency quote
            & a Wix template that looks like a small-business landing page.
          </p>
          <p className="mt-4 text-base sm:text-lg text-brand-navy leading-relaxed">
            That's why we built HLPR for Ministries.
          </p>
        </div>
      </div>
    </section>
  );
};
