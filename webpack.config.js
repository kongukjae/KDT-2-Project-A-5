const path = require('path');
const HtmlWebpackPlugin = requrie('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use: [
          "babel-loader",
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 8085,
    // path: path.join(__dirname),
    hot: true,
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
  ]
}