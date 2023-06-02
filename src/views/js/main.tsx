import React from "react";
import Creat from "./createBox";
import "../css/style.css";

export default function Main() {
  return (
    <>
      <div className="main">
        <Creat h2="국내 증시" />
        <Creat h2="내가 자주 본 종목" />
        <Creat h2="모범 운전수" />
        <Creat h2="뉴스" />
      </div>
    </>
  );
}
