import React from "react";
import "../../src/views/css/style";

// ? CSS
import "../../src/views/css/Area";

// ? 샘플 데이터
// ? 가상으로 만들어진 주식 데이터를 불러옵니다.

import { DriverData } from "../../src/models/driver";

// ! 컨텐츠 박스
import StockContentsBox from "./stockContentsBox";
import DriverContentsBox from "./driverContentsBox";
import NewsContentsBox from "./newsApiParse";

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
          <DriverContentsBox />
        </div>
        <h3>뉴스</h3>
        <div className="newsArea">
          <NewsContentsBox />
        </div>
      </div>
    </>
  );
}
