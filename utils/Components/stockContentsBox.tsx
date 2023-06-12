import React, { useContext, useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import stockContext, { stockContextType } from "../../src/views/js/stockContext";

const StockData = (): JSX.Element => {
  const stocktest = useContext<stockContextType | null>(stockContext);
  const [contextData, setContextData] = useState<any>({
    symbol: '잠시만 기다려주세요',
    price: {
      '2023-06-07': { open: 0, high: 0, low: 0, close: 0 },
      '2023-06-06': { open: 0, high: 0, low: 0, close: 0 },
      '2023-06-05': { open: 0, high: 0, low: 0, close: 0 },
    },
  });
  const [test, setTest] = useState<any[]>([]);

  useEffect(() => {
    if (stocktest) {
      setContextData(stocktest);
      const priceArray: any[] = Object.entries(stocktest?.price).map(([date, price]) => {
        return { date, ...price };
      });
      console.log("컨텍스트의 주가 데이터 = 배열로 변환한 것 : ", priceArray);

      let intervalNumber = 0;
      let interval = setInterval(() => {
        let lastPrice = priceArray[intervalNumber];
        setTest((prevTest) => [...prevTest, lastPrice]);
        intervalNumber++;

        if (intervalNumber >= priceArray.length) {
          clearInterval(interval);
          console.log("interval 함수를 종료합니다");
        }
      }, 5000);
    }
  }, [stocktest]);

  const SimpleLineChart = () => {
    return (
      <LineChart width={500} height={300} data={test}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="1. open" />
        <YAxis type="number" domain={[0, 150000]} tickFormatter={(value) => `${value}원`}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="1. open" stroke="#E63946" />
      </LineChart>
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
