import { defineConfig } from "dumi";

const isProd = process.env.NODE_ENV === "production";

const config = isProd
  ? {
      base: "/htmls/",
      publicPath: "/htmls/",
      // exportStatic: false,
      // history: { type: "hash" },
    }
  : {};

export default defineConfig({
  themeConfig: {
    name: "kl_doc",
  },
  ...config,
});
