import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

const SocketComponent = (): JSX.Element => {
  // 주식 데이터 변화 감지
  const [stockData, setStockData] = useState<any>(null);

  // 주식 데이터 웹소켓으로 받아오기
  useEffect(() => {
    const socket = io('localhost:8080');

    // 소켓 연결 시
    socket.on("connect", () => {
      console.log("소켓 정상 연결(클라이언트)");
      //연결 테스트
      socket.on("hello", (data)=> {
        console.log(data);
      })
      // 주식 데이터 받아오는 구간
      socket.on("stockDataUpdate", (updatedData: string) => {
        console.log(updatedData);
        // 파싱
        let parsedData = JSON.parse(updatedData);
        // 업데이트 된 데이터 담기
        setStockData(parsedData);
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
      {stockData && stockData['Time Series (Daily)'] && (
        <div>
          <h2>종목: {stockData['Meta Data']['2. Symbol']}</h2>
          <h2>최근 갱신일: {stockData['Meta Data']['3. Last Refreshed']}</h2>
          <h2>가격: {stockData['Time Series (Daily)']['2023-06-06']['4. close']}</h2>
        </div>
      )}
    </div>
  );
};

export default SocketComponent;
