import React, { useContext, useEffect, useState } from "react";
import stockContext, {
  stockContextType,
} from "../../src/views/js/stockContext";

// // ! socket을 여기서 불러와볼까?
// import io from "socket.io-client";
// const socket = io("localhost:8085");
// const [stockContextData, setStockContextData] =
//   useState<stockContextType | null>(null);

// useEffect(() => {
//   socket.on("connect", () => {
//     console.log("소켓 정상 연결 - 클라이언트");
//     socket.on("stockDataUpdate", (updatedData) => {
//       const parsedData = JSON.parse(updatedData);
//       let symbol = parsedData["Meta Data"]["2. Symbol"];
//       let openPrice = parsedData["Time Series (Daily)"];
//       const priceArray: stockContextType = {
//         symbol: symbol,
//         price: openPrice,
//       };
//       setStockContextData(priceArray);
//     });
//   });
// }, [setStockContextData]);

const StockData = (): JSX.Element => {
  let stocktest = useContext<stockContextType | null>(stockContext);
  // 최초에 값 받아올 때 에러를 피하기 위해 더미데이터
  const [contextData, setContextData] = useState<any>({
    symbol: "잠시만 기다려주세요",
    price: {
      "2023-06-07": { open: 0, high: 0, low: 0, close: 0 },
      "2023-06-06": { open: 0, high: 0, low: 0, close: 0 },
      "2023-06-05": { open: 0, high: 0, low: 0, close: 0 },
    },
  });

  // 회사 데이터
  useEffect(() => {
    if (stocktest) {
      setContextData(stocktest.symbol);
    }
  }, []);
  //주가 데이터
  useEffect(() => {
    if (stocktest?.price) {
      const stockData = {
        price: {
          "2023-06-07": { open: 0, high: 0, low: 0, close: 0 },
          "2023-06-06": { open: 0, high: 0, low: 0, close: 0 },
          "2023-06-05": { open: 0, high: 0, low: 0, close: 0 },
        },
      };

      const priceArray = Object.entries(stockData.price).map(
        ([date, price]) => {
          return { date, ...price };
        }
      );
      console.log(priceArray[0]);
    }
  });

  return (
    <>
      <div>{contextData.symbol}</div>: (<div>loading</div>)
    </>
  );
};

export default StockData;
