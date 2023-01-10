const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  entry: "./src/index",
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    chunkFilename: "js/[name].[contenthash].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "source-map",
  resolve: {
    modules: ["./node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    // contentBase: "./dist",
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        // exclude: [/node_modules/],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: false,
      template: "./src/index.html",
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
