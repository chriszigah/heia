const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const { InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const webpackPlugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public/index.html"),
    filename: "index.html",
  }),
  new CopyPlugin({
    patterns: [
      { from: "./src/favicon.png", to: "" },
      { from: "./src/manifest.json", to: "" },
      { from: "./src/logo192.png", to: "" },
      { from: "./src/logo512.png", to: "" },
    ],
  }),
  new InjectManifest({
    swSrc: "./src/src-sw.js",
    swDest: "sw.js",
    maximumFileSizeToCacheInBytes: 52428800,
  }),
];

if ("production" === process.env.NODE_ENV) {
  webpackPlugins.push(
    new InjectManifest({
      swSrc: "./src/src-sw.js",
      swDest: "sw.js",
      maximumFileSizeToCacheInBytes: 52428800,
    })
  );
}

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)?$/,
        use: "file-loader?name=./images/[name].[ext]",
      },
    ],
  },
  plugins: webpackPlugins,
};
