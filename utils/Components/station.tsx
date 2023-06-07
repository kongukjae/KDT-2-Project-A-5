import React from "react";
import ContentsBox from "./ContentsBoxArea";
import "../../src/views/css/style";

export default function Main() {
  return (
    <>
      <div className="main">
        <ContentsBox h2="정류장" />
        <ContentsBox h2="포르쉐" />
        <ContentsBox h2="람보르기니" />
      </div>
    </>
  );
}
