import React from "react";
import ContentsBox from "./contentsBoxArea";
// import "../../src/views/css/style";
import style from "../../src/views/css/style.module.css"


export default function Main() {
  return (
    <>
      <div className={style.main}>
        <ContentsBox h2="정류장" />
        <ContentsBox h2="포르쉐" />
        <ContentsBox h2="람보르기니" />
      </div>
    </>
  );
}
