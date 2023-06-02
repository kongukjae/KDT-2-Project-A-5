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

fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=${apiKey}`, {
  method: 'GET',
  headers: headers
})
.then(response => {
  return response.json();
})
.then(data => {
  const datatest = JSON.stringify(data,null,2);
fs.writeFile('test.json', datatest, (error) => {
 
});
  console.log("이게 데이터야",data); // 여기서 데이터를 사용합니다
})
.catch(error => {
  console.error(error);
})
.finally(() => {
  clearTimeout(timeout);
});



app.use((req, res) => {
  res.status(404).send("not found");
});

app.listen(8080, () => {
  console.log("connected");
});
