let path = require("path");

module.exports = {
  entry: "./src/views/js/index.js", // 클라이언트의 시작 파일 (엔트리 포인트)를 설정해준다.
  output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js",
    // 번들을 dist/bundle.js 라는 자바스크립트 파일로 생성하라고 지정했다.
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }],
  },
  // rules 필드는 웹팩에 사용할 여러가지 유형의 로더를 포함해야 하기 때문에 배열로 작성한다.
  resolve: {
    extensions: [".jsx", ".js"],
  },
  mode: "developement",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: true,
  },
  // Webpack Dev Server의 최신 버전에서는
  //contentBase 대신 static 속성을 사용해야 한다.
};
