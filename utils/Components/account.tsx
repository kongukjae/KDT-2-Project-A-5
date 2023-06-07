import React from "react";
import "../../src/views/css/style";
import ContentsBox from "./contentsBoxArea";

export default function Main() {
  return (
    <>
      <div className="main">
        <ContentsBox h2="계좌" />
        <ContentsBox h2="내 운전면허증" />
      </div>
    </>
  );
}
