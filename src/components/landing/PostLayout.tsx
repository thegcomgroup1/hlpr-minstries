import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { StickyNav } from "./StickyNav";
import { Footer } from "./Footer";
import { CtaButton } from "./CtaButton";
import { BUSINESS, BLOG_CTA } from "@/lib/content";
import type { BlogPost } from "@/lib/blog";

const formatDate = (iso: string) => {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
};

export const PostLayout = ({ post }: { post: BlogPost }) => {
  return (
    <>
      <StickyNav />
      <main id="main">
        <section className="bg-gradient-cream pt-28 sm:pt-36 lg:pt-40 pb-10 sm:pb-14">
          <div className="mx-auto max-w-[700px] px-5 sm:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-navy-soft hover:text-brand-navy transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <h1 className="mt-6 font-serif font-bold tracking-tight text-brand-navy text-balance text-[clamp(2rem,4.5vw,3rem)] leading-[1.05]">
              {post.title}
            </h1>
            <p className="mt-5 text-sm text-brand-navy-soft">
              <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
            </p>
          </div>
        </section>

        <section className="bg-background py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[700px] px-5 sm:px-8">
            {post.featuredImage ? (
              <img
                src={post.featuredImage}
                alt={post.title}
                loading="lazy"
                className="w-full h-auto rounded-2xl border border-border"
              />
            ) : null}

            <article
              className="
                mt-10 text-brand-navy-soft leading-relaxed
                [&_h2]:font-serif [&_h2]:text-brand-navy [&_h2]:text-2xl sm:[&_h2]:text-3xl
                [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4
                [&_h3]:font-serif [&_h3]:text-brand-navy [&_h3]:text-xl
                [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
                [&_p]:my-4 [&_p]:text-base
                [&_ul]:my-4 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2
                [&_ol]:my-4 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2
                [&_li]:text-base
                [&_a]:text-brand-blue [&_a]:underline hover:[&_a]:text-brand-blue-deep
                [&_strong]:text-brand-navy [&_strong]:font-semibold
                [&_blockquote]:border-l-4 [&_blockquote]:border-brand-blue/40
                [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:my-6
                [&_blockquote]:text-brand-navy
              "
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
            </article>

            {/* Edit this CTA in one place: BLOG_CTA in src/lib/content.ts */}
            <div className="mt-16 rounded-2xl bg-brand-navy text-brand-cream p-8 sm:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                {BLOG_CTA.heading}
              </h2>
              <p className="mt-3 text-brand-cream/90 leading-relaxed">{BLOG_CTA.body}</p>
              <div className="mt-6">
                <CtaButton href={BUSINESS.ctaUrl} label={BLOG_CTA.buttonLabel} size="lg" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
