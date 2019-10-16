const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin')
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

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
      new ImageminWebpWebpackPlugin()
    ]
  }
}