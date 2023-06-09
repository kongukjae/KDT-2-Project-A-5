import React, { useEffect, useState } from "react";
import { LineChart, Line } from "recharts";

interface DataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number; // 데이터 아이템의 속성을 여기에 정의합니다
}

// const updateData = (newData: DataItem) => {
//   setData((prevData) => [...prevData, newData]);
// };

const data = [
  { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 278, pv: 3908, amt: 2000 },
  { name: "May", uv: 189, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 239, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 349, pv: 4300, amt: 2100 },
];

const SimpleLineChart = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#e63946" />
    </LineChart>
  );
};

export default SimpleLineChart;
