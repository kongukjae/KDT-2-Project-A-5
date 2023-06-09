import React, { useContext, useEffect, useState } from "react";
import stockContext, { stockContextType } from "../../src/views/js/stockContext";

const StockData = (): JSX.Element => {
  let stocktest = useContext<stockContextType | null>(stockContext);
  // 최초에 값 받아올 때 에러를 피하기 위해 더미데이터
  const [contextData, setContextData] = useState<any>({
    symbol: '잠시만 기다려주세요',
    price: {
      '2023-06-07': { open: 0, high: 0, low: 0, close: 0 },
      '2023-06-06': { open: 0, high: 0, low: 0, close: 0 },
      '2023-06-05': { open: 0, high: 0, low: 0, close: 0 },
    },
  });

// 회사 데이터
  useEffect(() => {
    if (stocktest) {
      setContextData(stocktest.symbol);
    }
    // 테스트 하기 위해 랜더링 될 때마다 재실행
  }, [stocktest]);
  //주가 데이터
  useEffect(()=> {
    if(stocktest) {
      const priceArray = Object.entries(stocktest?.price).map(([date, price]) => {
        return { date, ...price };
      });
      console.log("컨텍스트의 주가 데이터 = 배열",priceArray[0]);
    }
  }, [stocktest])

  return (
    <>
      <div>
        {stocktest?.symbol}
      </div>
    </>
  );
};

export default StockData;
