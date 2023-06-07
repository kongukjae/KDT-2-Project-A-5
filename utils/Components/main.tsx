import React from "react";
import StockContentsBox from "./stockComponents/stockContentsBoxArea";
import DriverContentsBox from "./driverComponents/driverContentsBoxArea";
import NewsContentsBox from "./newsComponents/newsContentsBoxArea";
import "../../src/views/css/style";

export default function Main() {
  return (
    <>
      <div className="main">
        <StockContentsBox h2="국내 증시" />
        <StockContentsBox h2="내가 자주 본 종목" />
        <DriverContentsBox h2="모범 운전수" />
        <NewsContentsBox h2="뉴스" />
      </div>
    </>
  );
}
