import React, { useContext, useEffect, useState } from "react";
//가상의 주식 데이터
import stockContext, { stockContextType } from "../../src/views/js/stockContext";
interface ContentsBoxProps {
  stockName: string;
  stockPrice: string;
  stockChangePercentage: string;
  stockChartGraph: string;
}
const stockData = (): JSX.Element => {
  // const [stock, setStocks] = useState<ContentsBoxProps[]>([]);
  // context 가져오기
  let stocktest = useContext<stockContextType | null>(stockContext);
  // console.log('stocktest의 데이터',stocktest)
  const [contextData, setContextData] = useState<any>(null);
  // setContextData(stocktest)
// console.log("심볼 데이터 ", stocktest);
  // useEffect(() => {
  //   setStocks(southKoreaStock);
  //   console.log("stockdata 컴포넌트 불러옴");
  // }, []);
// 컨텍스트 데이터 가져오기 테스트
useEffect(() => {
  setContextData(stocktest);
}, []);
  return (
    <>
      <div>
      {contextData && contextData.symbol}
      </div>
      : (
        <div>loading</div>
      )
    </>
  );
};

export default stockData;

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
