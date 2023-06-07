import React from "react";
import "../../src/views/css/style";
import ContentBox from "./stockContentsBox";
import DriverContentBox from "./driverContentsBox";
import NewsContentBox from "./newsContentsBox";

// ? CSS
import "../../src/views/css/Area";

// ? 샘플 데이터
import { southKoreaStock } from "../../src/models/stockdata";

export default function Main() {
  // domesticStockMarket : 국내 증시
  let domesticStockMarket = [];
  for (let i = 0; i < southKoreaStock.length; i++) {
    domesticStockMarket.push(
      <ContentBox
        stockName={southKoreaStock[i].stockName}
        stockPrice={southKoreaStock[i].stockPrice}
        stockChangePercentage={southKoreaStock[i].stockChangePercentage}
        stockChartGraph={southKoreaStock[i].stockChartGraph}
      />
    );
  }
  return (
    <>
      <div className="main">
        <h3>국내 증시</h3>
        <div className="stockArea">
          {/* <ContentBox
            stockName="애플"
            stockPrice="177.83 USD"
            stockChangePercentage="-1.73%"
            stockChartGraph="GRAPH"
          />
          <ContentBox
            stockName="삼성전자"
            stockPrice="63000 KRW"
            stockChangePercentage="+2.23%"
            stockChartGraph="GRAPH"
          /> */}
          {domesticStockMarket}
        </div>
        <h3>내가 자주 본 종목</h3>

        <div className="myStockArea">
          <ContentBox
            stockName="삼성전자"
            stockPrice="63000 KRW"
            stockChangePercentage="+2.23%"
            stockChartGraph="GRAPH"
          />
        </div>
        <h3>모범 운전수</h3>

        <div className="driverArea">
          <DriverContentBox
            driverName="박준형"
            driverNoAccidentCount="무사고 83일"
            driverGoodTag="방어운전"
            driverBadTag="급발진"
          />
          <DriverContentBox
            driverName="운전수"
            driverNoAccidentCount="무사고 0일"
            driverGoodTag="방어운전"
            driverBadTag="급발진"
          />
        </div>
        <h3>뉴스</h3>
        <div className="newsArea">
          <NewsContentBox
            NewsPaper="한국경제"
            NewsThumbnail="썸네일 사진"
            NewsTitleText="환율 1380원 돌파 어쩌구"
          />
          <NewsContentBox
            NewsPaper="동아일보"
            NewsThumbnail="썸네일 사진"
            NewsTitleText="파월 자이언트스텝 어쩌구"
          />
        </div>
      </div>
    </>
  );
}
