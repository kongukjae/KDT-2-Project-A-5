import * as http from "http";
import * as path from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";
import * as qs from "qs";
// const __fileName = (__dirname);
// const __dirName = path.dirname(__fileName);
const root = path.join(__dirname, "../../");
// // console.log("루트 경로입니다 :  " + root );
// ? 찾았다 내 루트
console.log(root)
// console.log(__fileName)
// let pokeJSONFile = fs.readFileSync(
//   `${root}/src/models/pokemonNames.json`,
//   "utf8"
// );
// // 파싱 된 포켓몬 데이터
// let parsedPoke = JSON.parse(pokeJSONFile);

// // client input 포켓몬 데이터 처리 함수
// function findPokeMoudle(urlValue : string) : boolean {
//   const result = parsedPoke.filter((x : string) => {
//     if (x === urlValue) {
//       return true;
//     }
//   });
//   return result;
// }

// const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
//   try {
//     if (req.method === "GET") {
//       // const parseData = qs.parse(req.url, true);
//       //   console.log(parseData);
//       // const parseData = qs.parse(req.url, true);
//       // const urlValue = Object.values(parseData);
//       // console.log(urlValue);
//       // console.log(findPokeMoudle(urlValue[0]));
//       // res.write(`test${findPokeMoudle(urlValue[0])}`);
//       // ? 들어온 요청에 맞는 데이터를 찾아주는 함수 -> 나중에는 GET 요청 데이터를 매개변수로 넣을 것
//       if (req.url === "/") {
//         // ! 호출 할 파일이 없어서 임시로 해 놓음
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write("Hello World");
//         res.end();
//       }
//       // html파일 요청
//       if (req.url && req.url.endsWith(".html")) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(fs.readFileSync(path.join(root, req.url), "utf-8"));
//         // const urlValue = Object.values(parseData);
//         // console.log(urlValue);
//         // console.log(findPokeMoudle(urlValue[0]));
//         // req.on("data", (chunk)=> {
//         //   let urlData = "";
//         //   const parsedData = qs.parse(req.url);
//         //   urlData += parsedData;
//         //   console.log(urlData);
//         // })
//         res.end();
//       }
//       // css파일 요청
//       if (req.url && req.url.endsWith(".css")) {
//         res.writeHead(200, { "Content-Type": "text/css" });
//         fs.readFileSync(path.join(root, req.url), "utf-8");
//         res.end();
//       }
//       // js파일 요청
//       if (req.url.endsWith(".js")) {
//         res.writeHead(200, { "Content-Type": "text/javascript" });
//         res.write(fs.readFileSync(path.join(root, req.url)));
//         // res.write(
//         //   fs.readFileSync(path.join(root, "utils", "all-mighty-editor.js"),"utf-8")
//         // );
//         res.end();
//       }
//       // png 파일 요청
//       if (req.url.endsWith(".png")) {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(fs.readFileSync(path.join(root, req.url)));
//         res.end();
//       }
//       if (req.url.includes("/name")) {
//         // console.log(req.url)

//         const parseData = qs.parse(req.url, true);
//         // console.log(parseData);
//         const valueData = Object.values(parseData);
//         // console.log(valueData[0]);
//         const printData = findPokeMoudle(valueData[0]);
//         console.log("모듈 결과 값" + printData);
//         // res.writeHead(200, {'Content-Type' : 'text/html'})
//         // res.write("hello");
//         res.end(`${printData}`);
//         // console.log("이거는 url이 파싱된 데이터 :" + parseData);
//         // const parseData = qs.parse(req.url, true);
//         // const urlValue = Object.values(parseData);
//         // console.log(urlValue);
//         // console.log(findPokeMoudle(urlValue[0]));
//         // res.write(`test${findPokeMoudle(urlValue[0])}`);
//       }
//     }
//     if (req.method === "POST") {
//     }
//   } catch (err) {
//     console.log(err);
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.write("서버 연결이 원할하지 않습니다");
//     res.end();
//   }
// });
// server.listen(8080, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("서버가 정상 연결 됐습니다");
// });
