import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { StickyNav } from "@/components/landing/StickyNav";
import { Footer } from "@/components/landing/Footer";
import { posts, SITE_URL, postUrl } from "@/lib/blog";

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

const Blog = () => {
  const description = "Practical guides on church website design, ministry SEO, online giving, podcast sites, and growing your ministry online.";

  return (
    <>
      <Helmet>
        <title>Blog — HLPR Ministries</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="Blog — HLPR Ministries" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/og-home.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}/og-home.jpg`} />
      </Helmet>
      <StickyNav />
      <main id="main">
        <section className="bg-gradient-cream pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
            <p className="text-xs uppercase tracking-[0.18em] font-semibold text-brand-blue">
              The HLPR Journal
            </p>
            <h1 className="mt-3 font-serif font-bold tracking-tight text-brand-navy text-balance text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05]">
              Honest guides for ministries building online.
            </h1>
            <p className="mt-5 text-lg text-brand-navy-soft leading-relaxed max-w-2xl">
              Costs, comparisons, checklists, and SEO playbooks — written for
              pastors, ministry leaders, and church admins (no agency jargon).
            </p>
          </div>
        </section>

        <section className="bg-background py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
            {posts.length === 0 ? (
              <p className="text-brand-navy-soft">New articles coming soon.</p>
            ) : (
              <ul className="grid gap-6 sm:gap-8">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block group rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-brand-blue/40 hover:shadow-soft transition-all"
                    >
                      <img
                        src={post.featuredImage}
                        alt=""
                        loading="lazy"
                        className="mb-6 w-full h-auto rounded-xl"
                      />
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy group-hover:text-brand-blue-deep transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-brand-navy-soft leading-relaxed">
                        {post.excerpt}
                      </p>
                      <p className="mt-4 text-sm text-brand-navy-soft">
                        <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
