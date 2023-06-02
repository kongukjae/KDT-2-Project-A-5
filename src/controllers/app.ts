import express from "express";
import path from "path";
import * as fs from 'fs';
import dotenv from "dotenv";
import dbConnect from "../../utils/DB/dbConfigure";
const root = path.join(__dirname, "..", ".."); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5
console.log(root);
const rootPublic = path.join(root, "public"); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5\public
console.log(rootPublic);

const app = express();
// DB 연결
dbConnect.connect((err) => {
  if (err) {
    console.error("DB연결에 실패했습니다", err);
    return;
  }
  console.log("DB연결에 성공했습니다");
});

app.use(express.static(root)); //root 디렉토리
app.use(express.static(rootPublic)); //root의 하위 디렉토리는 첫번째만 접근 가능하기 때문에 별도로 지정.
const apiKey = `${process.env.apiKey}`;

const headers = new Headers();
headers.append('x-api-key', apiKey);

const controller = new AbortController();
const signal = controller.signal;

const timeout = setTimeout(() => {
  controller.abort();
}, 5000);

// ! 애플 데이터를 가지고 와서 
// fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=AAPL&apikey=${apiKey}`, {
//   method: 'GET',
//   headers: headers
// })
// .then(response => {
//   return response.json();
// })
// .then(data => {
//   const datatest = JSON.stringify(data,null,2);
// fs.writeFile('test.json', datatest, (error) => {

// });
//   console.log("이게 데이터야",data); // 여기서 데이터를 사용합니다
// })
// .catch(error => {
//   console.error(error);
// })
// .finally(() => {
//   clearTimeout(timeout);
// });

// 회사 명으로 테이블을 생성을 하고 데이터를 날짜 별로 튜플을 생성을 하였다.
addData();
function addData(): void {

  const datatest = fs.readFileSync('./test.json', 'utf8');
  const parseData = JSON.parse(datatest);
  let dayList : string[] = [];
  // console.log(parseData["Weekly Time Series"]);
  for (const key in parseData["Weekly Time Series"]) {
    dayList.push(key)
  }
  // 애플 주가의 날짜 스트링값 배열 길이 값 찾기
  console.log()

  // 데이터 값
  console.log(Object.values(parseData["Weekly Time Series"][dayList[0]]))

  // 주식 종목 회사 이름
  const stockName = parseData["Meta Data"]["2. Symbol"];
 
  dbConnect.query(`create table ${stockName}(
    day DATE NOT NULL,
    open DOUBLE,
    high DOUBLE,
    low DOUBLE,
    close DOUBLE,
    volume DOUBLE
  );`, (err, result) => {
    console.log(result);
    if(err){
      console.log(err)
    }
    for (let i = 0; i < dayList.length; i++) {
      const test = Object.values(parseData["Weekly Time Series"][dayList[i]])
      dbConnect.query(`insert  INTO ${stockName}(day, open, high, low,close, volume) VALUES("${dayList[i]}",${test[0]}, ${test[1]}, ${test[2]}, ${test[3]},${test[4]});`, (err, result) =>{
        if(err){
          console.log(err)
        }
        // console.log("성공")
      })
    }
  })
}



app.use((req, res) => {
  res.status(404).send("not found");
});

app.listen(8080, () => {
  console.log("connected");
});
