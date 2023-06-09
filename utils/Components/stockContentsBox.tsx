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



let test : number[] = [];
  //주가 데이터
  useEffect(()=> {
    if(stocktest) {
      setContextData(stocktest);
      // 주식 데이터(객체) -> 배열로 변환
      const priceArray : any = Object.entries(stocktest?.price).map(([date, price]) => {
        return { date, ...price };
      });
      console.log("컨텍스트의 주가 데이터 = 배열로 변환한 것 : ",priceArray);
      // 3초마다 test[]에 주식 데이터 push 하는 로직
      let intervalNumber = 0;
      let interval = setInterval(()=> {
        // n++번째 배열의 'open'데이터를 push 해줌
        let lastPrcie = priceArray[intervalNumber]['1. open'];
        test.push(lastPrcie);
        console.log(test);
        intervalNumber++;
        // 배열 길이보다 길어지면 interval 함수 중지
        if(intervalNumber >= priceArray.length) {
          clearInterval(interval);
        };
      }, 3000);
    }
  }, [stocktest])

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
