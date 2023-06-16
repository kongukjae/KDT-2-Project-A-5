import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config({ path: "../../.env" }); // env 경로 설정

export async function stockDataRequest () {
  let stockData: any[] = [];
  // !회사명 읽는 구간
  const readSymbolData = fs.readFileSync(
    path.join(__dirname, "../models/stock.data.json"),
    "utf-8"
  );
  // 회사
  const symbolArray = JSON.parse(readSymbolData);
  // api 키
  const apiKey = process.env.alphaApiKey;
    // 주식 데이터 요청
    for(let i=0; i<4; i++) {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbolArray[i][0]}&interval=5min&apikey=${apiKey}`
        );
        // console.log("response.data : ", response.data)
        stockData.push(response.data)
      } catch (error) {
        console.error("주식 데이터를 받아오는데 실패했습니다", error);
        return null;
      }
    }
    // console.log(stockData)
    return stockData;
  }
  stockDataRequest()
// 요청 횟수제한 함수
// async function requestAndSleep() {
//   for (let i = 0; i < symbolArray.length; i++) {
//     if (i % 2 === 0) {
//       const responseData = await stockDataRequest(symbolArray[i][0]);
//       console.log("requestAndSleep :", symbolArray[i][0]);
//     }
//     // ! API : 2회 요청당 3초의 딜레이
//     await sleep(3000);
//   }
// }
//   requestAndSleep();
//   // 함수를 잠시 정지하는데 사용할 sleep함수
// function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
//   }
//   console.log("stockData:", stockData)
//   return stockData;
// };
