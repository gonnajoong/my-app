const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const config = {
    mode: 'development',
      output: {
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
      ]},
        {test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/, use: [
        'url-loader'
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
      })
    ]
}

module.exports = config;