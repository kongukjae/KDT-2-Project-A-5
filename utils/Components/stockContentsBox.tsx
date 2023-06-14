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
      {/* 배열에 데이터가 추가될 때만 차트가 렌더링 */}
      {<SimpleLineChart />}
    </div>
  );
};
export default StockData