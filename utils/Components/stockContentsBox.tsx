import React, { useEffect, useState } from "react";
import { southKoreaStock } from "../../src/models/stockdata";
interface ContentsBoxProps {
  stockName: string;
  stockPrice: string;
  stockChangePercentage: string;
  stockChartGraph: string;
}

const stockData = (): JSX.Element => {
  const [stock, setStocks] = useState<ContentsBoxProps[]>([]);

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
            <div className="stockName">{element.stockName}</div>
            <div className="stockPrice">{element.stockPrice}</div>
            <div className="stockChangePercentage">
              {element.stockChangePercentage}
            </div>
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
