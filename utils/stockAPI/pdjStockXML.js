const axios = require("axios");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config({ path: "../../.env" });
const root = path.join(__dirname, "..", "..");
console.log(root);
const apiKey = process.env.apiKey; // 여기에 인증키를 입력하세요
const maxNum = 2178976; // 토탈 카운트
const numOfRows = maxNum; // 임의의 숫자로 입력.
const pageNo = 1;
const endpoint = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${apiKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&resultType=json`;
// const endpoint = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=6wMJY1qQYOLCEIYgaZb6eFt4aJ6MPuk%2B0OpXJ4o4rQgOFvRbvzJbI%2BhtE7CpvoAgiw6v0YDe%2FU%2ByjH0CP2Fpyg%3D%3D&numOfRows=10&pageNo=1&resultType=json`; //벡틱처리 전 풀 주소

axios
  .get(endpoint)
  .then((response) => {
    // 응답을 처리하는 코드
    const jsonData = response.data;
    fs.writeFileSync(
      root + "/stockData.json",
      JSON.stringify(jsonData, null, 2)
    ); //저장되는 파일은 .gitignore처리 함
    console.log(jsonData);
  })
  .catch((error) => {
    // 에러를 처리하는 코드
    console.error(error);
  });
