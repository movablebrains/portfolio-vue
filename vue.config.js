const GoogleFontsPlugin = require('google-fonts-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: "Playfair Display", variants: ["400", "700"] },
          { family: "Open Sans", variants: ["300", "400", "600", "700"] }
        ],
        formats: ["woff2"]
      }),
    ]
  }
}