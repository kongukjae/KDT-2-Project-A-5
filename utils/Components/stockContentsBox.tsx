import React, { useEffect, useState } from "react";
import { southKoreaStock } from "../../src/models/stockdata";
import StockChart from "./stockChart";

interface ContentsBoxProps {
  stockName: string;
  stockPrice: string;
  stockChangePercentage: string;
}

const StockData = (): JSX.Element => {
  const [stocks, setStocks] = useState<ContentsBoxProps[]>([]);

  useEffect(() => {
    setStocks(southKoreaStock);
    console.log("stockdata 컴포넌트 불러옴");
  }, []);

  return (
    <>
      {stocks.length > 0 ? (
        stocks.map((element: ContentsBoxProps) => (
          <div className="stockContentsBox">
            <div className="stockName">{element.stockName}</div>
            <div className="stockPrice">{element.stockPrice}</div>
            <div className="stockChangePercentage">
              {element.stockChangePercentage}
            </div>
            <div className="stockChartGraph">
              <StockChart />
            </div>
          </div>
        ))
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default StockData;
