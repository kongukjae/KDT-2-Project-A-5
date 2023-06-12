import React from "react";
import "../../src/views/css/newsData";
import "../../src/views/css/style";
import DriverContentBox from "./driverContentsBox";

// ? CSS
import "../../src/views/css/Area";

// ? 샘플 데이터

// ! 컨텐츠 박스
import NewsContentsBox from "./newsApiParse";
import StockContentsBox from "./stockContentsBox";

export default function Main() {
  return (
    <>
      <div className="main">
        <h3>국내 증시</h3>
        <div className="stockArea">
          <StockContentsBox />
        </div>
        <h3>내가 자주 본 종목</h3>
        <div className="myStockArea">
          <StockContentsBox />
        </div>
        <h3>모범 운전수</h3>
        <div className="driverArea">
          <DriverContentBox />
        </div>
        <h3>뉴스</h3>
        <div className="newsArea">
          <NewsContentsBox />
        </div>
      </div>
    </>
  );
}
