import React from "react";
import NewsAPI from "./newsApiParse"
// import "../../src/views/css/style";
// import ContentsBox from "./contentsBoxArea";

export default function Main() {
  return (
    <>
      <div className="main">
        <NewsAPI />
      </div>
    </>
  );
}
