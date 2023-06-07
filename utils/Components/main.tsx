import React from "react";
import "../../src/views/css/style";
import ContentBox from "./stockContentsBox";
import DriverContentsBox from "./driverContentsBox";
import NewsContentsBox from "./newsContentsBox";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="stockArea">
          <ContentBox
            stockName="애플"
            stockPrice="177.83 USD"
            stockChangePercentage="-1.73%"
            stockChartGraph="GRAPH"
          />{" "}
          <ContentBox
            stockName="삼성전자"
            stockPrice="63000 KRW"
            stockChangePercentage="+2.23%"
            stockChartGraph="GRAPH"
          />
        </div>
        <div className="myStockArea">
          <ContentBox
            stockName="삼성전자"
            stockPrice="63000 KRW"
            stockChangePercentage="+2.23%"
            stockChartGraph="GRAPH"
          />
        </div>
        <div className="driverArea">
          <DriverContentsBox
            driverName="박준형"
            driverNoAccidentCount="무사고 83일"
            driverGoodTag="방어운전"
            driverBadTag="급발진"
          />
          <DriverContentsBox
            driverName="운전수"
            driverNoAccidentCount="무사고 0일"
            driverGoodTag="방어운전"
            driverBadTag="급발진"
          />
        </div>
        <div className="newsArea">
          <NewsContentsBox
            NewsContentsBoxNewsPaper="한국경제"
            NewsContentsBoxThumbnail="썸네일 사진"
            NewsContentsBoxTitleText="환율 1380원 돌파 어쩌구"
          />
          <NewsContentsBox
            NewsContentsBoxNewsPaper="동아일보"
            NewsContentsBoxThumbnail="썸네일 사진"
            NewsContentsBoxTitleText="파월 자이언트스텝 어쩌구"
          />
        </div>
      </div>
    </>
  );
}
