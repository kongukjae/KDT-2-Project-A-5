import React, { useContext, useEffect, useState } from "react";
//가상의 주식 데이터
import stockContext, { stockContextType } from "../../src/views/js/stockContext";
const StockData = (): JSX.Element => {
  // context 가져오기
  let stocktest = useContext<stockContextType | null>(stockContext);
  console.log('stocktest의 데이터',stocktest);
  const [contextData, setContextData] = useState<any>({
    // 더미 데이터
      symbol: '잠시만 기다려주세요',
      price: {
        // 더미 데이터
        '2023-06-07': { open: 0, high: 0, low: 0, close: 0 },
        '2023-06-06': { open: 0, high: 0, low: 0, close: 0 },
        '2023-06-05': { open: 0, high: 0, low: 0, close: 0 },
      },
    });
  // setContextData(stocktest)
// console.log("심볼 데이터 ", stocktest);
  // useEffect(() => {
  //   setStocks(southKoreaStock);
  //   console.log("stockdata 컴포넌트 불러옴");
  // }, []);
// 컨텍스트 데이터 가져오기 테스트
console.log(stocktest?.price)
// 주식 회사 이름
useEffect(() => {
  if(stocktest) {
    setContextData(stocktest.symbol);
  }
}, []);
// 주가 데이터
useEffect(() => {
  if(stocktest) {
    setContextData(stocktest.price);
  }
}, [stocktest]);
  return (
    <>
      <div>
      {contextData.symbol}
      {/* {contextData.price} */}
      </div>
      : (
        <div>loading</div>
      )
    </>
  );
};

export default StockData;

// export default function ContentBox(props: ContentsBoxProps) {
//   const { stockName, stockPrice, stockChangePercentage, stockChartGraph } =
//     props;

//   return (
//     <div className="stockContentsBox">
//       <div className="stockName">{stockName}</div>
//       <div className="stockPrice">{stockPrice}</div>
//       <div className="stockChangePercentage">{stockChangePercentage}</div>
//       <div className="stockChartGraph">{stockChartGraph}</div>
//     </div>
//   );
// }
