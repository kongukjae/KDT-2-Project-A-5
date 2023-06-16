import React, { useContext, useState } from "react";
import { Line, LineChart, ResponsiveContainer, YAxis } from "recharts";
import "../../src/views/css/stockChart";
import stockContext from "../../src/views/js/stockContext";
import DayRange from "./dayRange";
import "../../src/views/css/stockArea.css";
import styles from "../../src/views/css/loading.module.css";
import "@dotlottie/player-component";

let priceArray: any[] = [];
const StockData = (): JSX.Element => {
  const socketStockData = useContext<any>(stockContext);
  const [priceState, setPriceState] = useState<any[]>([]);
  // 주식 데이터를 담을 배열
  // 데이터가 null인 동안 로딩 상태를 표시
  if (socketStockData === null) {
    return (
      <div className={styles.loading}>
        <dotlottie-player
          src="../../src/models/loading.lottie"
          autoplay
          loop
          style={{ width: "50%", height: "100%" }}
        />
      </div>
    );
  }
  let openPrice = socketStockData[1][1];
  priceArray.push(openPrice);
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
    <>
      {/* 배열에 데이터가 추가될 때만 차트가 렌더링 */}
      <div className="stockContentsBox">
        <SimpleLineChart />
        <DayRange />
      </div>
    </>
  );
};
export default StockData;
