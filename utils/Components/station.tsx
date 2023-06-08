import React from "react";
import NewsAPI from "./newsApiParse";
import ChartGraph from "./stockChart";
// import "../../src/views/css/style";
// import ContentsBox from "./contentsBoxArea";

export default function Main() {
  return (
    <>
      <div className="main">
        <button>생성</button>
        <ChartGraph />
      </div>
    </>
  );
}
