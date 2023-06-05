import React from "react";
import ContentsBox from "./contentsBoxArea";
import "../../src/views/css/style";

export default function Main() {
  return (
    <>
      <div className="main">
        <ContentsBox h2="국내 증시" />
        <ContentsBox h2="내가 자주 본 종목" />
      </div>
    </>
  );
}
