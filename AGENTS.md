# Architecture rules

- Bundle `react-helmet-async` through Vite's `ssr.noExternal` for prerendering; its ESM export uses a `.js` extension without declaring module type, which breaks native Node named imports.