import React from "react";
import ContentsBox from "./contentsBoxArea";
// import "../../src/views/css/style";
import style from "../../src/views/css/style.module.css"

export default function Main() {
  return (
    <>
      <div className={style.main}>
        <ContentsBox h2="국내 증시" />
        <ContentsBox h2="내가 자주 본 종목" />
        <ContentsBox h2="모범 운전수" />
        <ContentsBox h2="뉴스" />
      </div>
    </>
  );
}
