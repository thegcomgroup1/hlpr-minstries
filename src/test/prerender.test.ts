// @vitest-environment node
import { createServer, type ViteDevServer } from "vite";
import { renderToString } from "react-dom/server";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("production SSR module compatibility", () => {
  let server: ViteDevServer;

  beforeAll(async () => {
    server = await createServer({
      mode: "production",
      server: { middlewareMode: true, hmr: false },
      appType: "custom",
    });
  });

  afterAll(async () => {
    await server?.close();
  });

  it.each(["/preview", "/blog", "/blog/church-website-cost-2026"])(
    "loads and renders %s with page metadata",
    async (location) => {
      const { SsrApp } = await server.ssrLoadModule("/src/ssr.tsx");
      const helmetContext: Record<string, unknown> = {};
      expect(() => renderToString(SsrApp({ location, helmetContext }))).not.toThrow();
      expect(helmetContext.helmet).toBeDefined();
    },
  );
});