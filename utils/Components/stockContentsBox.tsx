import React, { useContext, useEffect, useState, useRef } from "react";
import { Line, LineChart, ResponsiveContainer, YAxis } from "recharts";
import stockContext, {
  stockContextType,
} from "../../src/views/js/stockContext";

const StockData = (): JSX.Element => {
  const stockData = useContext<stockContextType | null>(stockContext);
  const [contextData, setContextData] = useState<any>({
    symbol: "잠시만 기다려주세요",
    price: {
      "2023-06-07": { open: 0, high: 0, low: 0, close: 0 },
      "2023-06-06": { open: 0, high: 0, low: 0, close: 0 },
      "2023-06-05": { open: 0, high: 0, low: 0, close: 0 },
    },
  });
  const [stockPrice, setStockPrice] = useState<any[]>([]);
  const lineChartRef = useRef<any>(null);

  useEffect(() => {
    if (stockData) {
      setContextData(stockData);
      const priceArray: any[] = Object.entries(stockData?.price).map(
        ([date, price]) => {
          return { date, ...price };
        }
      );
      let intervalNumber = 0;
      let interval = setInterval(() => {
        let lastPrice = priceArray[intervalNumber];
        setStockPrice((prevTest) => [...prevTest, lastPrice]);
        intervalNumber++;

        if (intervalNumber >= priceArray.length) {
          clearInterval(interval);
        }
      }, 5000);
    }
  }, [stockData]);

  useEffect(() => {
    if (lineChartRef.current) {
      lineChartRef.current.update();
    }
  }, [stockPrice]);

  const addNewPriceToChart = (newPrice: any) => {
    setStockPrice((prevPrices) => [...prevPrices, newPrice]);
  };

  const SimpleLineChart = () => {
    return (
      <div className="stockChart">
        <ResponsiveContainer width={110} height={80}>
          <LineChart width={110} height={40} data={stockPrice}>
            <YAxis hide={true} domain={["auto", "auto"]} />
            <Line
              ref={lineChartRef}
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
      {stockPrice.length > 0 && <SimpleLineChart />}
    </div>
  );
};

export default StockData;
