import React from "react";
import ContentsBox from "./contentsBoxArea";
import "../../src/views/css/style";

export default function Main() {
  return (
    <>
      <div className="main">
        <ContentsBox h2="부릉부릉 정류장" />
        <ContentsBox h2="포르쉐" />
        <ContentsBox h2="람보르기니" />
      </div>
    </>
  );
}
