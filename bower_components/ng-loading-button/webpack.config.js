module.exports = {
  entry: "./src/directive.js",
  output: {
      path: __dirname,
      filename: "ngLoadingButton.js"
  },
  loaders: [
    {
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
      ]
    }
  ]
};
