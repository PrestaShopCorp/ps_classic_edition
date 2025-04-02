import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";
import { PuikResolver } from "@prestashopcorp/puik";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['prestashop-accounts', 'swiper-slide', 'swiper-container'].includes(tag),
        }
      }
    }),
    Components({ resolvers: [PuikResolver()] }),
    cssInjectedByJsPlugin(),
  ],
  server: {
    origin: "http://localhost:5173",
  },
  base: '/modules/ps_classic_edition/views/js/vue/',
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
