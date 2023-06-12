import React, { useContext, useEffect, useState } from "react";
import {
  Line,
  LineChart, ResponsiveContainer, YAxis
} from "recharts";
import stockContext, {
  stockContextType
} from "../../src/views/js/stockContext";

const StockData = (): JSX.Element => {
  const stocktest = useContext<stockContextType | null>(stockContext);
  const [contextData, setContextData] = useState<any>({
    symbol: "잠시만 기다려주세요",
    price: {
      "2023-06-07": { open: 0, high: 0, low: 0, close: 0 },
      "2023-06-06": { open: 0, high: 0, low: 0, close: 0 },
      "2023-06-05": { open: 0, high: 0, low: 0, close: 0 },
    },
  });
  const [test, setTest] = useState<any[]>([]);

  useEffect(() => {
    if (stocktest) {
      setContextData(stocktest);
      const priceArray: any[] = Object.entries(stocktest?.price).map(
        ([date, price]) => {
          return { date, ...price };
        }
      );
      let intervalNumber = 0;
      let interval = setInterval(() => {
        let lastPrice = priceArray[intervalNumber];
        setTest((prevTest) => [...prevTest, lastPrice]);
        intervalNumber++;

        if (intervalNumber >= priceArray.length) {
          clearInterval(interval);
        }
      }, 5000);
    }
  }, [stocktest]);

  const SimpleLineChart = () => {
    return (
      <div className="stockChart">
        <ResponsiveContainer width={110} height={80}>
          <LineChart width={110} height={40} data={test}>
            <YAxis hide={true} domain={["auto", "auto"]} />
            <Line
              type="monotone"
              dataKey="1. open"
              stroke="#E63946"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };


  return (
    <div>
      {contextData?.symbol}
      {/* 배열에 데이터가 추가될 때만 차트가 렌더링 */}
      {test.length > 0 && <SimpleLineChart />}
    </div>
  );
};

export default StockData;
