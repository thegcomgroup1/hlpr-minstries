# Architecture rules

- Bundle `react-helmet-async` through Vite's `ssr.noExternal` for prerendering; its ESM export uses a `.js` extension without declaring module type, which breaks native Node named imports.
- Use the shared click-to-play `VideoPlayer` in the homepage opening section and preview page; keeping one player implementation preserves consistent playback behavior.