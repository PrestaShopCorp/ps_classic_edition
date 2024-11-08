import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";
import { PuikResolver } from "@prestashopcorp/puik";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({ resolvers: [PuikResolver()] }),
    cssInjectedByJsPlugin(),
  ],
  server: {
    origin: "http://localhost:5173",
  },
  base: '/modules/ps_edition_basic/views/js/vue/',
  build: {
    outDir: "../views/js/vue",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: () => "index.js",
        entryFileNames: `assets/[name].js`,
      },
    },
  },
  resolve: {
    alias: {
      "@/": fileURLToPath(new URL("./src/", import.meta.url)),
    },
  },
});
