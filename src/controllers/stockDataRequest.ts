import axios from "axios";
import path from "path";
// console.log(path.join(__dirname,'../models'))
import dotenv from "dotenv";
import fs from "fs";
dotenv.config({ path: "../../.env" }); // env 경로 설정
// json 데이터 불러오기
const readSymbolData = fs.readFileSync(path.join(__dirname,'../models/stock.data.json'), 'utf-8')
const symbolArray = JSON.parse(readSymbolData)
// 회사 이름만 떼오기
// console.log(symbolArray)
// console.log("심볼리스트 :", readSymbolData)
//! 최초 주식 데이터 요청 함수
let stockData: any
const apiKey = process.env.alphaApiKey;
const stockDataRequest = async()=> {
  for(let i=0; i<symbolArray.length; i++) {
    try {
      let symbol = symbolArray[i][0];
      console.log(symbol)
      const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`)
      stockData = response.data;
      // console.log(stockData);
    } catch (error) {
      console.error('주식 데이터를 받아오는데 실패했습니다', error);
    }
  }
  // 서버에서 3분에 한번씩 주식데이터 요청
  setInterval(stockDataRequest, 3 * 60 * 1000);
}
stockDataRequest()