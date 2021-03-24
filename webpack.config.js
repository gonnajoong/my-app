const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
console.log();
const config = {
  mode: 'development',
  entry: {
    bundle: ['./src/index.js'],

  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname + "/build"),
    filename: "bundle.js"
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