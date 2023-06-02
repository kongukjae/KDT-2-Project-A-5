import React from "react";
import ContentsBox from "../../../../utils/Components/contentsBoxArea";
import "../../css/style";

export default function Main() {
  return (
    <>
      <div className="main">
        <ContentsBox h2="국내 증시" />
        <ContentsBox h2="내가 자주 본 종목" />
        <ContentsBox h2="모범 운전수" />
        <ContentsBox h2="뉴스" />
      </div>
    </>
  );
}
