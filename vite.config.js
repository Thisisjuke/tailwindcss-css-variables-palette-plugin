import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "tailwindcss-palette-css-variables",
      fileName: (format) => `plugin.${format}.js`
    }
  },
});
