import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

const StockDataComponent = (): JSX.Element => {
  // 주식 데이터 변화 감지
  const [stockData, setStockData] = useState<any>(null);
  // 주식 데이터 웹소켓으로 받아오기
  useEffect(() => {
    const socket = io('localhost:8085');

    // 소켓 연결 시
    socket.on("connect", () => {
      console.log("소켓 정상 연결 - 클라이언트");
      // 주식 데이터 받아오는 구간
      socket.on("stockDataUpdate", (updatedData: any) => {
        let parsedData = JSON.parse(updatedData);
        console.log(parsedData);
        // 파싱
        // let parsedData = JSON.parse(updatedData);
        // 업데이트 된 데이터 담기
        setStockData(parsedData['Meta Data']['2. Symbol']);
      });
    });

    // 언마운트 시 소켓 연결 끊음
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div>
      <h1>안녕</h1>
      {stockData}
    </div>
  );
};

export default StockDataComponent;
