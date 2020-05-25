const html = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new html({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: "./build",
    hot: true,
    port: 8080, // use any port suitable for your configuration
    host: "0.0.0.0", // to accept connections from outside container
    watchOptions: {
      aggregateTimeout: 800, // delay before reloading
      poll: 1000, // enable polling since fsevents are not supported in docker
    },
  },
};
