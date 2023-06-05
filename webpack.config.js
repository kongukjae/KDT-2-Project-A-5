const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/views/js/index.tsx",
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: ["babel-loader"],
      },
      {
        test: [/\.ts$/, /\.tsx$/],
        use: ["ts-loader"],
      },
      {
        test: [/\.css$/],
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 3030,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/views/html/testIndex.html",
    }),
  ],
};
