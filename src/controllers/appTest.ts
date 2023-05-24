import express from "express"
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import qs from "qs";
const app = express();
// root경로 지정
const root = path.join(__dirname, "../../");
// 포켓몬 데이터 저장된 json 파일 읽어오기
let pokeJSONFile = fs.readFileSync(
  `${root}/src/models/pokemonNames.json`,
  "utf8"
);
// 파싱 된 포켓몬 데이터
let parsedPoke = JSON.parse(pokeJSONFile);

// client input 포켓몬 데이터 처리 함수
function findPokeModule(urlValue : string) : string[] {
  const result = parsedPoke.filter((x : string) => {
    if (x === urlValue) {
      return true;
    }
  });
  return result;
}

// get요청 처리
app.get("/", (req, res)=> {
  res.send("hELLO WORLD");
})
app.get("/name", (req, res) => {
  const parseData = qs.parse(req.url, { ignoreQueryPrefix: true });
  const valueData = Object.values(parseData);
  const printData = findPokeModule(valueData[0] as string);
  console.log("모듈 결과 값" + printData);
  res.send(`${printData}`);
});
// MIME 별 파일 불러오는 곳
app.use(express.static(root));
// 서버 실행
app.listen(8080, ()=> {
  console.log("서버가 정상 실행됐습니다");
})

// findPokeMoudle("pikachu")

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
//       if (req.url && req.url.endsWith(".js")) {
//         res.writeHead(200, { "Content-Type": "text/javascript" });
//         res.write(fs.readFileSync(path.join(root, req.url)));
//         // res.write(
//         //   fs.readFileSync(path.join(root, "utils", "all-mighty-editor.js"),"utf-8")
//         // );
//         res.end();
//       }
//       // png 파일 요청
//       if (req.url && req.url.endsWith(".png")) {
//         res.writeHead(200, { "Content-Type": "image/png" });
//         res.write(fs.readFileSync(path.join(root, req.url)));
//         res.end();
//       }
//       if (req.url && req.url.includes("/name")) {
//         // console.log(req.url)

//         const parseData = qs.parse(req.url, { ignoreQueryPrefix: true });
//         // console.log(parseData);
//         const valueData = Object.values(parseData);
//         // console.log(valueData[0]);
//         const printData = findPokeMoudle(valueData[0] as string);
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
// server.listen(8080, (err? : Error) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("서버가 정상 연결 됐습니다");
// });
