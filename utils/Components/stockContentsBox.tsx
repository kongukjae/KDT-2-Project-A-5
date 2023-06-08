import React, { useContext, useEffect, useState } from "react";
//가상의 주식 데이터
import { southKoreaStock } from "../../src/models/stockdata";
import stockContext, { stockContextType } from "../../src/views/js/stockContext";
interface ContentsBoxProps {
  stockName: string;
  stockPrice: string;
  stockChangePercentage: string;
  stockChartGraph: string;
}
const stockData = (): JSX.Element => {
  const [stock, setStocks] = useState<ContentsBoxProps[]>([]);
  let stocktest = useContext<stockContextType[] | null>(stockContext);
console.log("심볼 데이터 ", stocktest);
  useEffect(() => {
    setStocks(southKoreaStock);
    console.log("stockdata 컴포넌트 불러옴");
  }, []);
//

  return (
    <>
      {stock.length > 0 ? (
        stock.map((element: ContentsBoxProps) => (
          <div className="stockContentsBox">
            //회사
            <div className="stockName">{element.stockName}</div>
            //주가
            <div className="stockPrice">{element.stockPrice}</div>
            //등락율
            <div className="stockChangePercentage">
              {element.stockChangePercentage}
            </div>
            //그래프(차트)
            <div className="stockChartGraph">{element.stockChartGraph}</div>
          </div>
        ))
      ) : (
        <div>loading</div>
      )}
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
