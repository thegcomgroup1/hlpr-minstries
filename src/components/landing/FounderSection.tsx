import { Linkedin } from "lucide-react";
import { FOUNDER, BUSINESS } from "@/lib/content";
import founderHeadshot from "@/assets/founder-headshot.png";

export const FounderSection = () => {
  return (
    <section
      id="founder"
      className="py-20 sm:py-28 bg-brand-navy text-brand-navy-foreground"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-4 flex md:flex-col items-center md:items-start gap-5">
            <div className="relative">
              <div
                className="absolute -inset-1.5 rounded-full bg-brand-blue/40 blur-md"
                aria-hidden
              />
              <img
                src={founderHeadshot}
                alt={`${FOUNDER.name}, ${FOUNDER.title}`}
                className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full object-cover border-2 border-brand-blue/60 shadow-elevated"
              />
            </div>
            <div>
              <p className="font-serif text-xl font-bold">{FOUNDER.name}</p>
              <p className="text-sm text-brand-cream/70">{FOUNDER.title}</p>
              {FOUNDER.linkedinUrl && (
                <a
                  href={FOUNDER.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm text-brand-blue hover:underline"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                  Connect on LinkedIn
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-8">
            <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-blue">
              A note from the founder
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-balance leading-tight">
              Why {BUSINESS.name} exists.
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-brand-cream/90">
              {FOUNDER.story.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="mt-8 font-signature text-4xl sm:text-5xl text-brand-blue leading-none">
              {FOUNDER.signature}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
