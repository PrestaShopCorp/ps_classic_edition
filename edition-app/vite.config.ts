import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";
import { PuikResolver } from "@prestashopcorp/puik";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components({ resolvers: [PuikResolver()] }), cssInjectedByJsPlugin()],
  server: {
    origin: "http://localhost:5173",
  },
  build: {
    // TODO: dist in views/js/vue (can be also in dist)
    rollupOptions: {
      output: {
        manualChunks: () => "index.js",
        entryFileNames: `assets/[name].js`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
