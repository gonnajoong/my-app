const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ["./src/index.js"],
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
    output: {
      path: __dirname + "./dist",
      publicPath: "/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: "./dist"
    },
    plugins: [
      new miniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].css'
    }),
    ]
  };