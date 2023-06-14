import express ,{Request, Response , NextFunction}from 'express';
import crypto from 'crypto';
import dbConnect from "../../utils/DB/dbConfigure";
const app = express();


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
  constructor(userId: string, password: string, userName: string, phoneNum: number, userAccountNum: number) {
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

export function userCreate(req : Request, res : Response ,next : NextFunction){

  const { email, password, name, phoneNumber } = req.body; // 요청의 본문을 가져옵니다.
  const userInstance = new User(email, password, name, phoneNumber, 123412314)
  console.log('테스트 클래스', userInstance);
  // 비밀번호 암호화를 할 수 있도록 클래스 안에 암호화 해주는 함수를 추가 해주었다.
  console.log('테스트 클래스 비밀번호 암호화', userInstance._password);
  console.log("데이터", req.body); // 본문의 내용을 출력하거나 원하는 작업을 수행합니다.

  const keys = Object.keys(userInstance);
  const values = Object.values(userInstance);

  console.log('키값', keys.join(','));
  console.log('벨류', values.map(x => {
    return "'" + x + "'";
  }).join(','));

  dbConnect.query(`insert INTO user_infor(${keys.join(',')}) VALUES(?);`, [values], (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);

  });
  res.send('true');
  next();
}

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

export function signIn(req: Request, res: Response , next : NextFunction){
  let boxTest: boolean = true;
  const test = new Login(req.body.userId, req.body.password);
  // 로그인 키값 확인
  dbConnect.query(`select ${Object.keys(test).join(', ')} from user_infor where ${Object.keys(test)[0]}= '${test.userId}' and ${Object.keys(test)[1]}= '${test.password}';`, (err, result) => {
    if (err) {
      console.log('err', err)
    }
    if (Object.values(result).length === 0) {
      boxTest = false;
      res.send(boxTest);
    }
    // 로그인 실패
    else {
      res.send(boxTest);
      next();
    }
  })

}
