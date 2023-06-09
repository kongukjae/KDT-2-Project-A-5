import React, { useContext, useEffect, useState } from "react";
import stockContext, { stockContextType } from "../../src/views/js/stockContext";

const StockData = (): JSX.Element => {
  let stocktest = useContext<stockContextType | null>(stockContext);
  console.log("useContext : ",stocktest);
  // 최초에 값 받아올 때 에러를 피하기 위해 더미데이터
  const [contextData, setContextData] = useState<any>({
    symbol: '잠시만 기다려주세요',
    price: {
      '2023-06-07': { open: 0, high: 0, low: 0, close: 0 },
      '2023-06-06': { open: 0, high: 0, low: 0, close: 0 },
      '2023-06-05': { open: 0, high: 0, low: 0, close: 0 },
    },
  });
  let price : any;
// 회사 데이터
  useEffect(() => {
    if (stocktest) {
      setContextData(stocktest);
    }
    // 테스트 하기 위해 랜더링 될 때마다 재실행
  }, [stocktest]);
// let test = {
  
// }




  //주가 데이터
  useEffect(()=> {
    if(stocktest) {
      setContextData(stocktest);
      // 주식 데이터(객체) -> 배열로 변환
      const priceArray : any = Object.entries(stocktest?.price).map(([date, price]) => {
        return { date, ...price };
      });
      console.log("컨텍스트의 주가 데이터 = 배열로 변환한 것 : ",priceArray);
      price = priceArray[0][price];
        console.log("priceArray[0]['1. open'] : ",price);
    }
  }, [setContextData])

  return (
    <>
      <div>
        {contextData?.symbol}
        {price}
      </div>
    </>
  );
};

export default StockData;
