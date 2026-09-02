import { Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { BlogProvider } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

export const SsrApp = ({ location, helmetContext }: { location: string; helmetContext: Record<string, unknown> }) => (
  <HelmetProvider context={helmetContext}>
    <StaticRouter location={location}>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StaticRouter>
  </HelmetProvider>
);
