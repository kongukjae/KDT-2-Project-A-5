import React from "react";
import "../../src/views/css/style";
import "../../src/views/css/newsData";
import StockData from "./stockContentsBox";
import DriverContentBox from "./driverContentsBox";
import NewsContentBox from "./newsContentsBox";

// ? CSS
import "../../src/views/css/Area";

// ? 샘플 데이터
// ? 가상으로 만들어진 주식 데이터를 불러옵니다.
import { southKoreaStock } from "../../src/models/stockdata";
import { bestDriverData } from "../../src/models/driverdata";
import { newsData } from "../../src/models/newsData";
import { DriverData } from "./driver";

// ! 데이터
import NewsAPI from "./newsApiParse";

export default function Main() {
  let driverArea = [];

  for (let i = 0; i < DriverData.length && i < 5; i++) {
    const driver = DriverData[i];
    driverArea.push(
      <DriverContentBox
        driverName={driver.driverName}
        driverOperationsCount={""}
        driverNoAccidentCount={driver.driverNoAccidentCount}
        driverGoodTag={driver.driverGoodTag}
        driverBadTag={driver.driverBadTag}
      />
    );
  }

  return (
    <>
      <div className="main">
        <h3>국내 증시</h3>
        <div className="stockArea">
          <StockData />
        </div>
        <h3>내가 자주 본 종목</h3>
        <div className="myStockArea">
          <StockData />
        </div>
        <h3>모범 운전수</h3>
        <div className="driverArea">{driverArea}</div>
        <h3>뉴스</h3>
        <div className="newsArea">
          {/* {newsDataBox} */}
          <NewsAPI />
        </div>
      </div>
    </>
  );
}
