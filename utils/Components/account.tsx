import React from "react";
import ContentsBox from "./ContentsBoxArea";
import "../../src/views/css/style";

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
