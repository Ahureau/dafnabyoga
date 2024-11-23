const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|webp|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/yoga.html",
      filename: "yoga.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/bodywork.html",
      filename: "bodywork.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/corporate.html",
      filename: "corporate.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: '404.html',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      failOnError: false,
      failOnWarning: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images" },
      ],
    }),    
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: {
      app: {
        name: 'google-chrome',
      },
    },
    hot: true,
    watchFiles: ['src/**/*'],
    historyApiFallback: {
      index: '/index.html',
      rewrites: [
        { from: /^\/bodywork\/?$/, to: '/bodywork.html' },
        { from: /^\/yoga\/?$/, to: '/yoga.html' },
        { from: /^\/about\/?$/, to: '/about.html' },
        { from: /^\/contact\/?$/, to: '/contact.html' },
        { from: /^\/corporate\/?$/, to: '/corporate.html' },
      ],
    },
  },
};
