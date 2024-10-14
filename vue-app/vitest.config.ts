/// <reference types="vitest" />

import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: "jsdom",
    include: ["tests/**/*.spec.ts", "src/**/*.spec.ts"],
  },
  resolve: {
    alias: {
      "@/": fileURLToPath(new URL("./src/", import.meta.url)),
    },
  },
});
