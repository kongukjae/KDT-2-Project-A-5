import React from "react";
import ContentsBox from "./contentsBoxArea";
import "../../src/views/css/style";

export default function Main() {
  return (
    <>
      <div className="main">
        <ContentsBox h2="회원 정보를 입력해주세요." />
        {/* <ContentsBox h2="회원 정보를 입력해라" /> */}
      </div>
    </>
  );
}
