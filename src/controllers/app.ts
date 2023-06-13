import axios from "axios";
import crypto from "crypto";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
import dbConnect from "../../utils/DB/dbConfigure";
import newsApp from "./newsController";

dotenv.config({ path: "../../.env" }); // env 경로 설정
const root = path.join(__dirname, "..", ".."); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5
const rootPublic = path.join(root, "public"); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5\public
const app = express();
const socketServer = http.createServer(app);
const io = new Server(socketServer);
//! 최초 주식 데이터 요청 함수
let jsonData: any;
async function stockDataRequest() {
  try {
    const symbol = "IBM";
    const apiKey = process.env.alphaApiKey;
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`
    );
    let stockData: any = response.data;
    //api로 받아온 데이터 json으로 전송
    jsonData = JSON.stringify(stockData);
  } catch (error) {
    console.error("주식 데이터를 받아오는데 실패했습니다", error);
  }
  // 서버에서 3분에 한번씩 주식데이터 요청
  setInterval(stockDataRequest, 3 * 60 * 1000);
}
stockDataRequest();
// 3분에 한번 데이터 쏴주기
const updateData = setInterval(() => {
  io.emit("stockDataUpdate", jsonData);
}, 5 * 1000);

// 최초 주식 데이터 요청
io.on("connect", (socket) => {
  console.log("소켓에 최초 연결 됐습니다 - 서버");
  // 소켓 연결 해제
  socket.on("disconnect", () => {
    console.log("소켓에 연결 해제됐습니다 - 서버");
  });
});
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
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(rootPublic, "index.html"));
});
app.use(express.json()); // JSON 형식의 본문을 파싱할 수 있도록 설정
app.use(express.urlencoded({ extended: true })); // URL-encoded 형식의 본문을 파싱할 수 있도록 설정

class User {
  // 타입스크립트에서 클래스의 속성을 초기화하기 위해서는 다음과 같이 클래스 내에 해당 속성을 선언하고, 생성자(Constructor)에서 초기값을 할당해야 합니다.
  private password: string;
  userName: string;
  userId: string;
  phoneNum: number;
  userAccountNum: number;

  // 출력 될 때 순서를 생각 해서 작서을 한다.
  constructor(
    userId: string,
    password: string,
    userName: string,
    phoneNum: number,
    userAccountNum: number
  ) {
    this.userId = userId; // userId 이다 헷갈려서 적어 놓기
    this.password = this.crypto(password); // 생성자에서 암호화 수행
    this.userName = userName;
    this.phoneNum = phoneNum;
    this.userAccountNum = userAccountNum;
    // userId password, userName, phoneNum,userAccountNum 테이블 어트리뷰트 순서
  }

  set _password(value: string) {
    this.password = this.crypto(value); // 암호화하여 속성에 저장
  }

  get _password() {
    return this.password; // 암호화된 비밀번호 반환
  }

  private crypto(pw: string) {
    return crypto.createHash("sha512").update(pw).digest("base64");
  }
}

app.post("/user", (req, res) => {
  const { email, password, name, phoneNumber } = req.body; // 요청의 본문을 가져옵니다.
  const userInstance = new User(email, password, name, phoneNumber, 123412314);
  console.log("테스트 클래스", userInstance);
  // 비밀번호 암호화를 할 수 있도록 클래스 안에 암호화 해주는 함수를 추가 해주었다.
  console.log("테스트 클래스 비밀번호 암호화", userInstance._password);
  console.log("데이터", req.body); // 본문의 내용을 출력하거나 원하는 작업을 수행합니다.

  const keys = Object.keys(userInstance);
  const values = Object.values(userInstance);

  console.log("키값", keys.join(","));
  console.log(
    "벨류",
    values
      .map((x) => {
        return "'" + x + "'";
      })
      .join(",")
  );

  dbConnect.query(
    `insert INTO user_infor(${keys.join(",")}) VALUES(?);`,
    [values],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
  res.send("true");
});

class Login {
  password: string;
  userId: string;
  constructor(userId: string, password: string) {
    // 출력 될 때 순서를 생각 해서 작서을 한다.
    this.userId = userId;
    this.password = this.crypto(password);
  }

  crypto(pw: string) {
    return crypto.createHash("sha512").update(pw).digest("base64");
  }
}
// 로그인 데이터 받기
app.post("/signIn", (req: Request, res: Response) => {
  let boxTest: boolean = true;
  const test = new Login(req.body.userId, req.body.password);
  // 로그인 키값 확인
  dbConnect.query(
    `select ${Object.keys(test).join(", ")} from user_infor where ${
      Object.keys(test)[0]
    }= '${test.userId}' and ${Object.keys(test)[1]}= '${test.password}';`,
    (err, result) => {
      if (err) {
        console.log("err", err);
      }
      if (Object.values(result).length === 0) {
        boxTest = false;
        res.send(boxTest);
      }
      // 로그인 실패
      else {
        res.send(boxTest);
      }
    }
  );
});
app.use((req, res) => {
  res.status(404).send("not found");
});

socketServer.listen(8080, () => {
  console.log("소켓 서버 on");
});
