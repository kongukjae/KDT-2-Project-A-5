import React, { useEffect, useState } from "react";
import priceArray from "../../src/models/virtualstockdata";
interface ContentsBoxProps {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

const stockData = (): JSX.Element => {
  const [stock, setStocks] = useState<ContentsBoxProps[]>([]);

  useEffect(() => {
    setStocks(priceArray);
    console.log("stockdata 컴포넌트 불러옴");
  }, []);
  //

  return (
    <>
      {stock.length > 0 ? (
        stock.map((element: ContentsBoxProps) => (
          <div className="stockContentsBox">
            <div className="stockDate">{element.date}</div>
            <div className="stockOpenPrice">{element.open}</div>
            <div className="stockHighPrice">{element.high}</div>
            <div className="stockLowPrice">{element.low}</div>
            <div className="stockClosePrice">{element.close}</div>
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
