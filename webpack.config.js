const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: "./src/views/js/index.js",
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename : "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test:[/\.js$/,/\.jsx$/,/\.ts$/,/\.tsx$/],
        use: [
          "babel-loader",
          "ts-loader"
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 8085,
    hot: true,
  },
  resolve: {
    extensions: [".js",".jsx",".ts",".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/views/html/testIndex.html"
    }),
  ]
}