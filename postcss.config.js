module.exports = {
  plugins: {
    'postcss-nesting': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      "browsers": "last 2 versions",
      "features": {
        "nesting-rules": true,
        "custom-media-queries": true,
        "color-mod-function": true
      }
    }
  }
}