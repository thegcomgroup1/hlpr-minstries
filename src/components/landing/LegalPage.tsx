import { ReactNode } from "react";
import { StickyNav } from "./StickyNav";
import { Footer } from "./Footer";

interface LegalPageProps {
  title: string;
  intro: string;
  lastUpdated: string;
  children: ReactNode;
}

export const LegalPage = ({ title, intro, lastUpdated, children }: LegalPageProps) => {
  return (
    <>
      <StickyNav />
      <main id="main">
        <section className="bg-gradient-cream pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
            <h1 className="font-serif font-bold tracking-tight text-brand-navy text-balance text-[clamp(2rem,4.5vw,3rem)] leading-[1.05]">
              {title}
            </h1>
            <p className="mt-5 text-lg text-brand-navy-soft leading-relaxed">
              {intro}
            </p>
            <p className="mt-4 text-sm text-brand-navy-soft">
              <span className="font-semibold">Last updated:</span> {lastUpdated}
            </p>
          </div>
        </section>

        <section className="bg-background py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
            <article
              className="
                text-brand-navy-soft leading-relaxed
                [&_h2]:font-serif [&_h2]:text-brand-navy [&_h2]:text-2xl sm:[&_h2]:text-3xl
                [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4
                [&_h3]:font-serif [&_h3]:text-brand-navy [&_h3]:text-xl
                [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
                [&_h4]:font-sans [&_h4]:text-brand-navy [&_h4]:text-base
                [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-2
                [&_p]:my-4 [&_p]:text-base
                [&_ul]:my-4 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2
                [&_li]:text-base
                [&_a]:text-brand-blue [&_a]:underline hover:[&_a]:text-brand-blue-deep
                [&_strong]:text-brand-navy [&_strong]:font-semibold
              "
            >
              {children}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
