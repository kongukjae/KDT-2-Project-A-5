import React from "react";
import "../../src/views/css/style";
import StockContentBox from "./stockContentsBox";
import DriverContentBox from "./driverContentsBox";
import NewsContentBox from "./newsContentsBox";

// ? CSS
import "../../src/views/css/Area";

// ? 샘플 데이터
// ? 가상으로 만들어진 주식 데이터를 불러옵니다.
import { southKoreaStock } from "../../src/models/stockdata";
import { bestDriverData } from "../../src/models/driverdata";
import { newsData } from "../../src/models/newsData";

export default function Main() {
  // ? 주식 데이터를 넣는 비어있는 배열
  // ? domesticStockMarket : 국내 증시
  let domesticStockMarket = [];

  // ? 가상으로 만들어진 주식 데이터의 length만큼 반복문 실행
  for (let i = 0; i < southKoreaStock.length; i++) {
    domesticStockMarket.push(
      <StockContentBox
        stockName={southKoreaStock[i].stockName}
        stockPrice={southKoreaStock[i].stockPrice}
        stockChangePercentage={southKoreaStock[i].stockChangePercentage}
        stockChartGraph={southKoreaStock[i].stockChartGraph}
        key={southKoreaStock[i].id}
      />
    );
  }

  // ? 모범 운전수 데이터를 넣는 비어있는 비열
  let bestDriverDataBox = [];

  for (let i = 0; i < bestDriverData.length; i++) {
    bestDriverDataBox.push(
      <DriverContentBox
        driverName={bestDriverData[i].driverName}
        driverNoAccidentCount={bestDriverData[i].driverNoAccidentCount}
        driverGoodTag={bestDriverData[i].driverGoodTag}
        driverBadTag={bestDriverData[i].driverBadTag}
      />
    );
  }

  let newsDataBox = [];

  for (let i = 0; i < newsData.length; i++) {
    newsDataBox.push(
      <NewsContentBox
        NewsPaper={newsData[i].NewsPaper}
        NewsThumbnail={newsData[i].NewsThumbnail}
        NewsTitleText={newsData[i].NewsTitleText}
      />
    );
  }

  return (
    <>
      <div className="main">
        <h3>국내 증시</h3>
        <div className="stockArea">{domesticStockMarket}</div>
        <h3>내가 자주 본 종목</h3>
        <div className="myStockArea">{domesticStockMarket}</div>
        <h3>모범 운전수</h3>
        <div className="driverArea">{bestDriverDataBox}</div>
        <h3>뉴스</h3>
        <div className="newsArea">{newsDataBox}</div>
      </div>
    </>
  );
}
