import React from "react";
import "../../src/views/css/style";
import ContentBox from "./stockContentsBox";
import DriverContentBox from "./driverContentsBox";
import NewsContentBox from "./newsContentsBox";

// ? CSS
import "../../src/views/css/Area";

// ? 샘플 데이터
// ? 가상으로 만들어진 주식 데이터를 불러옵니다.
import { southKoreaStock } from "../../src/models/stockdata";
import { bestDriverData } from "../../src/models/driverdata";

export default function Main() {
  // ? 주식 데이터를 넣기 위해 우선 비어있는 배열을 선언합니다.
  // ? domesticStockMarket : 국내 증시
  let domesticStockMarket = [];

  // ? 가상으로 만들어진 주식 데이터의 length만큼 반복문을 실행합니다.
  for (let i = 0; i < southKoreaStock.length; i++) {
    domesticStockMarket.push(
      <ContentBox
        stockName={southKoreaStock[i].stockName}
        stockPrice={southKoreaStock[i].stockPrice}
        stockChangePercentage={southKoreaStock[i].stockChangePercentage}
        stockChartGraph={southKoreaStock[i].stockChartGraph}
        key={southKoreaStock[i].id}
      />
    );
  }

  let bestDriverdata = [];

  for (let i = 0; i < bestDriverdata.length; i++) {
    bestDriverData.push(
      <DriverContentBox/>
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
