import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config({ path: "../../.env" }); // env 경로 설정
// 주식 데이터 요청 모듈
export async function stockDataRequest () {
  let stockSymoblData: any[] = [];
  // 해외 주식(회사) 데이터 불러오기
  const readSymbolData = fs.readFileSync(
    path.join(__dirname, "../models/stock.data.json"),
    "utf-8"
  );
  // 회사
  const symbolArray = JSON.parse(readSymbolData);
  // api 키
  const apiKey = process.env.alphaApiKey;
    //! 주식 데이터 요청 -> 무료 버전 요청 횟수 제한으로 인해 3회로 제한해둠.
    // ? 4700개가 넘는 회사의 데이터를 어떻게 나눠서 요청 할 것인지?
    for(let i=0; i<3; i++) {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbolArray[i][0]}&interval=5min&apikey=${apiKey}`
        );
        stockSymoblData.push(response.data)
      } catch (error) {
        // ? 주식 데이터를 받아오지 못했을 때 어떻게 처리할지?
        console.error("주식 데이터를 받아오는데 실패했습니다", error);
        return ;
      }
    }
        // 회사별 데이터(배열) 리턴
        // ? 어느 시점에 요청을 보내고, 언제 갱신을 할 것인지
    return stockSymoblData;
  }