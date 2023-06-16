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
    for(let i=0; i<3; i++) {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbolArray[i][0]}&interval=5min&apikey=${apiKey}`
        );
        stockData.push(response.data)
      } catch (error) {
        console.error("주식 데이터를 받아오는데 실패했습니다", error);
        return null;
      }
    }
    return stockData;
  }