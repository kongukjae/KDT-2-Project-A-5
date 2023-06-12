// const axios = require("axios");
// const dotenv = require("dotenv");
// const fs = require("fs");
// const path = require("path");
// dotenv.config({ path: "../../.env" }); // env 경로 설정

// const root = path.join(__dirname, "..", "..");
// const apiKey = process.env.alphaApiKey; // 여기에 인증키를 입력하세요
// const sylbol = "IBM";
// console.log(apiKey);
// const endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${sylbol}&apikey=${apiKey}`; //벡틱처리 전 풀 주소

// // interface Response {
// //   data: string;
// // }

// axios
//   .get(endpoint)
//   .then((response: any) => {
//     // 응답을 처리하는 코드
//     const jsonData = response.data;
//     fs.writeFileSync(
//       root + "/stockData.json",
//       JSON.stringify(jsonData, null, 2)
//     ); //저장되는 파일은 .gitignore처리 함
//     console.log(jsonData);
//   })
//   .catch((error: Error) => {
//     // 에러를 처리하는 코드
//     console.error(error);
//   });
