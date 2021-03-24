const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
console.log();
const config = {
  mode: 'development',
  output: {
    publicPath: "/public",
    path: path.resolve(__dirname + "/public"),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.scss$/, use: [{
          loader: miniCssExtractPlugin.loader,
        },
        "css-loader",
        "sass-loader"
      ]},
      {test: /\.css$/, use: [
        'style-loader',
        'css-loader'
    ]},
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: [
        'babel-loader'
    ]}
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
  }),
  ]
}

module.exports = config;