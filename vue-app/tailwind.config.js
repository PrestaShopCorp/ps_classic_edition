const { puikTailwindPreset } = require("@prestashopcorp/puik");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [puikTailwindPreset],
  corePlugins: {
    preflight: false,
  },
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  variants: {
    extend: {},
  },
  theme: {},
  plugins: [],
  important: true,
};
