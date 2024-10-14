module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-prefix-selector": {
      prefix: ".puik-style",
      transform: function (prefix, selector, prefixedSelector, path) {
        if (path.match(/(puik|edition-app)/)) {
          return prefixedSelector;
        } else {
          return selector;
        }
      },
    },
  },
};
