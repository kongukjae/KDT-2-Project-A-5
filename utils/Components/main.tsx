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

export default function Main() {
  // ? domesticStockMarket : 국내 증시

  // ? 주식 데이터를 넣기 위해 우선 비어있는 배열을 선언합니다.
  let domesticStockMarket = [];

  // ? 가상으로 만들어진 주식 데이터의 length만큼 반복문을 실행합니다.
  // ! 주식 데이터가 길어진다면, 매우 많은 수의 ContentBox가 만들어질테니
  // ! 필요에 따라 length 값을 넣지 말고 숫자를 넣는 것도 좋을 것 같습니다.
  for (let i = 0; i < southKoreaStock.length; i++) {
    // ! 아까 만든 비어있는 배열에
    // ! 가상 주식 데이터의 length만큼 push() 메서드를 실행합니다.
    domesticStockMarket.push(
      <ContentBox
        stockName={southKoreaStock[i].stockName}
        stockPrice={southKoreaStock[i].stockPrice}
        stockChangePercentage={southKoreaStock[i].stockChangePercentage}
        stockChartGraph={southKoreaStock[i].stockChartGraph}
        // ! 컴포넌트의 props에는 가상 주식 데이터의 key값을 넣어줍니다.
        // ! 이렇게 추가된 배열은 이후 render 할 때 호출해줍니다.
        // ! (현재 55번째 줄에 들어가있음)
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
