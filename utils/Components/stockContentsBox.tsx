import React, { useContext, useEffect, useState } from "react";
import stockContext, { stockContextType } from "../../src/views/js/stockContext";

const StockData = (): JSX.Element => {
  let stocktest = useContext<stockContextType | null>(stockContext);
  // 최초에 값 받아올 때 에러를 피하기 위해 더미 데이터 넣음
  const [contextData, setContextData] = useState<any>({
    symbol: '잠시만 기다려주세요',
    price: {
      '2023-06-07': { open: 0, high: 0, low: 0, close: 0 },
      '2023-06-06': { open: 0, high: 0, low: 0, close: 0 },
      '2023-06-05': { open: 0, high: 0, low: 0, close: 0 },
    },
  });
  interface PriceData {
    open: string;
    high: string;
    low: string;
    close: string;
  }
  
  let stockPrice: { [date: string]: PriceData } | undefined = stocktest?.price;

  useEffect(() => {
    if (stocktest) {
      setContextData(stocktest.symbol);
    }
  }, [stocktest]);

  let priceArray: { date: string, price: PriceData }[] = [];
  if (stockPrice) {
    priceArray = Object.entries(stockPrice).map(([date, price]) => {
      return { date, price };
    });
  }

  console.log("컨텍스트의 주식 가격입니다", priceArray[0]);

  return (
    <>
      <div>
        {contextData.symbol}
      </div>
      {priceArray.length > 0 ? (
        <div>{priceArray[0].date} - {priceArray[0].price.open}</div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default StockData;
