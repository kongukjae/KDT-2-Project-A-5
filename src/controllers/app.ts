import express, { Request, Response } from "express";
import path from "path";
import dbConnect from "../../utils/DB/dbConfigure";
import * as fs from "fs";
import dotenv from "dotenv";
import axios from "axios";
import { Server } from "socket.io";
import http from "http";
import cryto from "crypto";
import cheerio from "cheerio";

const $ = cheerio.load(path.join(__dirname)); // 테스트용

// import fs from "fs";
dotenv.config({ path: "../../.env" }); // env 경로 설정
// root 디렉토리 경로 설정(express용)
const root = path.join(__dirname, "..", ".."); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5
const rootPublic = path.join(root, "public"); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5\public
const app: express.Application = express();
const server = http.createServer(app);
const io = new Server(server);
// DB 연결
dbConnect.connect((err) => {
  if (err) {
    console.error("DB연결에 실패했습니다", err);
    return;
  }
  console.log("DB연결에 성공했습니다");
});
// let stockData = null;
// // 알파벤티지에 주식 데이터 요청하는 함수
//   async function stockDataRequest() {
//     try {
//       const symbol = "IBM";
//       const apiKey = process.env.alphaApiKey;
//       const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`)
//       stockData = response.data;
//       console.log(stockData);
//       // 주식 데이터 업데이트 될 때마다 클라이언트에게 전송
//       io.emit("stockDataUpdate", stockData);
//     } catch (error) {
//       console.error('주식 데이터를 받아오는데 실패했습니다', error);
//     }
//     // 3분에 한번씩 주식데이터 요청
//     setTimeout(stockDataRequest, 3 * 60 * 1000);
//   }
//   // 최초 주식 데이터 요청
//   stockDataRequest();
app.use(express.static(root)); //root 디렉토리
app.use(express.static(rootPublic)); //root의 하위 디렉토리는 첫번째만 접근 가능하기 때문에 별도로 지정.
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(rootPublic, "index.html"));
});

app.get("/", (req, res) => {
  console.log({ root: rootPublic });
  res.sendFile(`index.html`, { root: rootPublic });
});
// 회사 명으로 테이블을 생성을 하고 데이터를 날짜 별로 튜플을 생성을 하였다.
// addData();
// function addData(): void {

//naver news api key, parameters들
const client_id = `${process.env.naverDevClientId}`;
const client_secret = `${process.env.naverDevClientSec}`;
const displayLength = 1;
// 검색할 카테고리 코드 (정치: 100, 경제: 101, 사회: 102, 생활/문화: 103, 세계: 104, IT/과학: 105)
const category = 101;
// const apiKey = `${process.env.apiKey}`;

//html head 부분의 meta 데이터를 읽는 로직
const getPageData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // og:image 태그 추출
    const ogImageTag = $('meta[property="og:image"]');
    const ogImageUrl = ogImageTag.attr("content");
    // const headers = new Headers();
    // headers.append('x-api-key', apiKey);

    return ogImageUrl;
  } catch (error) {
    console.error("에러:", error);
    return null;
  }
};
// const controller = new AbortController();
// const signal = controller.signal;

// const timeout = setTimeout(() => {
//   controller.abort();
// }, 5000);

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

//   const datatest = fs.readFileSync('./test.json', 'utf8');
//   const parseData = JSON.parse(datatest);
//   let dayList: string[] = [];
//   // console.log(parseData["Weekly Time Series"]);
//   for (const key in parseData["Weekly Time Series"]) {
//     dayList.push(key)
//   }
//   // 애플 주가의 날짜 스트링값 배열 길이 값 찾기
//   console.log()

//   // 데이터 값
//   console.log(Object.values(parseData["Weekly Time Series"][dayList[0]]))

//   // 주식 종목 회사 이름
//   const stockName = parseData["Meta Data"]["2. Symbol"];

//   dbConnect.query(`create table ${stockName}(
//     day DATE NOT NULL,
//     open DOUBLE,
//     high DOUBLE,
//     low DOUBLE,
//     close DOUBLE,
//     volume DOUBLE
//   );`, (err, result) => {
//     console.log(result);
//     if (err) {
//       console.log(err)
//     }
//     for (let i = 0; i < dayList.length; i++) {
//       const test = Object.values(parseData["Weekly Time Series"][dayList[i]])
//       dbConnect.query(`insert  INTO ${stockName}(day, open, high, low,close, volume) VALUES("${dayList[i]}",${test[0]}, ${test[1]}, ${test[2]}, ${test[3]},${test[4]});`, (err, result) => {
//         if (err) {
//           console.log(err)
//         }
//         // console.log("성공")
//       })
//     }
//   })
// }
app.use(express.json()); // JSON 형식의 본문을 파싱할 수 있도록 설정
app.use(express.urlencoded({ extended: true })); // URL-encoded 형식의 본문을 파싱할 수 있도록 설정
class User {
  // 타입스크립트에서 클래스의 속성을 초기화하기 위해서는 다음과 같이 클래스 내에 해당 속성을 선언하고, 생성자(Constructor)에서 초기값을 할당해야 합니다.
  email: string;
  userName: string;
  _password: string;
  userphoneNum: number;
  userAccountNum: number;
  constructor(
    email: string,
    password: string,
    userName: string,
    userphoneNum: number,
    userAccountNum: number
  ) {
    this.email = email;
    this._password = password;
    this.userName = userName;
    this.userphoneNum = userphoneNum;
    this.userAccountNum = userAccountNum;
  }
  crypto = (pw: string) => {
    this._password = cryto.createHash("sha512").update(pw).digest("base64");
    return this._password;
  };
}

app.post("/creataccount", (req, res) => {
  const postData = req.body; // 요청의 본문을 가져옵니다.
  const test = new User(
    postData.email,
    postData.password,
    postData.name,
    postData.phoneNumber,
    123412314
  );
  // 비밀번호 암호화를 할 수 있도록 클래스 안에 암호화 해주는 함수를 추가 해주었다.
  console.log("테스트 클래스 비밀번호 암호화", test.crypto(postData.password));
  console.log("데이터", req.body); // 본문의 내용을 출력하거나 원하는 작업을 수행합니다.
  // dbConnect.query(`insert INTO user_infor(userId, password, userName, phoneNum,userAccountNum) VALUES('${postData.email}','${postData.password}','${postData.name}','${postData.phoneNumber}',${123412314});`, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(result);

  // });
  res.send("POST 요청이 성공적으로 처리되었습니다.");
});

//search/news의 경로로 GET요청이 오면 응답으로 객체를 보내는 메서드.
app.get("/search/news", async (req: express.Request, res: express.Response) => {
  const query: string = req.query.query as string;

  try {
    let api_url = "";
    if (!query) {
      //* 요청 url의 끝이 /search/new일때는 경제 카테고리의 최신 기사만 10개 보여줌
      api_url = `https://openapi.naver.com/v1/search/news?query=${encodeURIComponent(
        "경제"
      )}&display=${displayLength}&category=${category}`;
    } else {
      //* 요청 url의 끝이 /search/news?query=검색어 가 있다면 보여줄 주소
      api_url = `https://openapi.naver.com/v1/search/news?query=${encodeURIComponent(
        query
      )}&display=${displayLength}&category=${category}`;
    }
    const options = {
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
      },
    };

    const response = await axios.get(api_url, options);

    //* getPageData 함수를 사용하여 og:image url 추출(썸네일 사진)
    const ogImageUrl = await getPageData(response.data.items[0].link);
    //임시로 보낼 객체. 삭제가능
    console.log(response.data.items[0].title);
    console.log(response.data.items[0].link);
    console.log(`썸네일 사진: ${ogImageUrl}`);
    console.log(response.data.items[0].description);
    console.log("------------------");
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).end();
      console.log("에러 =", error.response.status);
    } else {
      res.status(500).end();
      console.error(error);
    }
  }
});

app.use((req, res) => {
  res.status(404).send("not found");
});

app.listen(8080, () => {
  console.log("connected");
});
