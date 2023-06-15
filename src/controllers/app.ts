import axios from "axios";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
import dbConnect from "../../utils/DB/dbConfigure";
import newsApp from "./newsController";
import { signIn, userCreate } from './userController';
import yesterDayStockData from './yesterDayStockData';
import taxiCreate from './taxiController';
dotenv.config({ path: "../../.env" }); // env 경로 설정
const root = path.join(__dirname, "..", ".."); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5
const rootPublic = path.join(root, "public"); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5\public
const app = express();
const socketServer = http.createServer(app);
const io = new Server(socketServer);
//! 최초 주식 데이터 요청 함수
// let jsonData : any;
let stockData: any
async function stockDataRequest() {
  try {
    const symbol = "IBM";
    const apiKey = process.env.alphaApiKey;
    const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`)
    stockData = response.data;
    //api로 받아온 데이터 json으로 전송

  } catch (error) {
    console.error('주식 데이터를 받아오는데 실패했습니다', error);
  }
  // 서버에서 3분에 한번씩 주식데이터 요청
  setInterval(stockDataRequest, 3 * 60 * 1000);
}
stockDataRequest();
// 3분에 한번 데이터 쏴주기
let increaseNum = 0;
const stockDataLivetransmission = setInterval(() => {
  try {
    let symbol = stockData["Meta Data"]["2. Symbol"];
    let stockObjectData: any = Object.entries(stockData['Time Series (5min)'])
    let jsonData = JSON.stringify([symbol, stockObjectData[increaseNum]]);
    // console.log(jsonData);
    io.emit("stockDataUpdate", jsonData);
    increaseNum++
    if (increaseNum >= stockObjectData.length) {
      clearInterval(stockDataLivetransmission);
    }
  } catch (error) {
    console.error('stockDataLivetransmission 에러', error);
  }
}, 1 * 2000);

// DB 연결
dbConnect.connect((err) => {
  if (err) {
    console.error("DB연결에 실패했습니다", err);
    return;
  }
  console.log("DB연결에 성공했습니다");
});
app.use("/news", newsApp);

app.use(express.static(root)); //root 디렉토리
app.use(express.static(rootPublic)); //root의 하위 디렉토리는 첫번째만 접근 가능하기 때문에 별도로 지정.
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(rootPublic, "index.html"));
})
app.use(express.json()); // JSON 형식의 본문을 파싱할 수 있도록 설정
app.use(express.urlencoded({ extended: true })); // URL-encoded 
app.post('/user', userCreate); // 회원가입 요청 미들워에
app.use('/signIn', signIn); // 로그인 요청 미들웨어
app.use('/yesterDayDataRequest',yesterDayStockData); //전날 데이터 요청 하는 미들웨어
app.post('/taxi',taxiCreate) // 택시방 만들기 요청 하는 미들웨어

app.use((req, res) => {
  res.status(404).send("not found");
});


socketServer.listen(8080, () => {
  console.log("소켓 서버 on")
})