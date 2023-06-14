import React, { useContext, useState } from "react";
import { Line, LineChart, ResponsiveContainer, YAxis } from 'recharts';
import stockContext from "../../src/views/js/stockContext";
let priceArray : any[] = [];
const StockData = (): JSX.Element => {
  const socketStockData = useContext<any>(stockContext);
  const [priceState, setPriceState] = useState<any[]>([])
  // 주식 데이터를 담을 배열
  // 데이터가 null인 동안 로딩 상태를 표시
  if (socketStockData === null) {
    return <div>Loading...</div>;
  }
    let openPrice = socketStockData[1][1];
    priceArray.push(openPrice)
    console.log(priceArray)



    // chartArray.push(socketStockData[1][1]['1. open'])
  

  // console.log(chartArray)
  // const stocktest = useContext<stockContextType | null>(stockContext);
  // const [contextData, setContextData] = useState<any>({
  //   symbol: "잠시만 기다려주세요",
  //   price: {
  //     "2023-06-07": { open: 0, high: 0, low: 0, close: 0 },
  //     "2023-06-06": { open: 0, high: 0, low: 0, close: 0 },
  //     "2023-06-05": { open: 0, high: 0, low: 0, close: 0 },
  //   },
  // });
  // const [test, setTest] = useState<any[]>([]);

  // useEffect(() => {
  //   if (stocktest) {
  //     setContextData(stocktest);
  //     const priceArray: any[] = Object.entries(stocktest?.price).map(
  //       ([date, price]) => {
  //         return { date, ...price };
  //       }
  //     );
  //     let intervalNumber = 0;
  //     let interval = setInterval(() => {
  //       let lastPrice = priceArray[intervalNumber];
  //       setTest((prevTest) => [...prevTest, lastPrice]);
  //       intervalNumber++;

  //       if (intervalNumber >= priceArray.length) {
  //         clearInterval(interval);
  //       }
  //     }, 5000);
  //   }
  // }, [stocktest]);

  const SimpleLineChart = () => {
    return (
      <div className="stockChart">
        <ResponsiveContainer width="100%" height={80}>
          <LineChart width={110} height={40} data={priceArray}>
            <YAxis hide={true} domain={["auto", "auto"]} />
            <Line
              isAnimationActive={false}
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
      {/* {contextData?.symbol} */}
      {/* 배열에 데이터가 추가될 때만 차트가 렌더링 */}
      {<SimpleLineChart />}
    </div>
  );
};

export default StockData;
