import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import { PostLayout } from "@/components/landing/PostLayout";
import NotFound from "./NotFound";
import { getPost, postUrl, SITE_URL } from "@/lib/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!slug) return <NotFound />;
  if (typeof window !== "undefined" && window.location.pathname.endsWith("/")) {
    return <Navigate replace to={`/blog/${slug}`} />;
  }
  if (!post) return <NotFound />;

  const url = postUrl(post.slug);
  const absolute = (src: string) => (src.startsWith("http") ? src : `${SITE_URL}${src}`);
  const image = absolute(post.featuredImage);
  const shareImage = absolute(post.ogImage);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image,
    datePublished: post.publishDate,
    author: { "@type": "Person", name: "Tim Godson" },
    publisher: {
      "@type": "Organization",
      name: "hlpr Ministries",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/hlpr-logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={shareImage} />
        <meta property="article:published_time" content={post.publishDate} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <PostLayout post={post} />
    </>
  );
};

export default BlogPost;
