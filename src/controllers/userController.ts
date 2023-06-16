import crypto from 'crypto';
import moment from 'moment';
import { Request, Response } from 'express';
import dbConnect from "../../utils/DB/dbConfigure";

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

export function userCreate(req : Request, res : Response ){

  const { email, password, name, phoneNumber } = req.body; // 요청의 본문을 가져옵니다.
  const userInstance = new User(email, password, name, phoneNumber, 123412314)
  const keys = Object.keys(userInstance);
  const values = Object.values(userInstance);
  dbConnect.query(`insert INTO user_infor(${keys.join(',')}) VALUES(?);`, [values], (err, result) => {
    if (err) {
      console.log(err);
    }


  });
  res.send('true');

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

export function signIn(req: Request, res: Response ){
  let boxTest: boolean = true;
  const test = new Login(req.body.userId, req.body.password);
  // 로그인 키값 확인
  dbConnect.query(`select ${Object.keys(test).join(', ')} ,userNum ,userName ,lastAccess from user_infor where ${Object.keys(test)[0]}= '${test.userId}' and ${Object.keys(test)[1]}= '${test.password}';`, (err, result) => {
    if (err) {
      console.log('err', err)
    }
    // 로그인 실패
    if (Object.values(result).length === 0) {
      boxTest = false;
      res.send(boxTest);
    }
    else {
      console.log({boolean : boxTest,result:result})
      res.send({boolean : boxTest,result:result});
    }
  })

}

// 로그아웃 요청 받아 최종 접속 값 추가 하기
class logOut {
  userId: string[]
  userValues: string[]
  constructor(userId: string[], userValues: string[]) {
    this.userId = userId;
    this.userValues = userValues;
  }
}

export function logOutDate(req: Request, res: Response) {
  // 현재 시간 체크
  const currentDate =  new Date();
  const formattedDateTime  =  moment(currentDate).format('YYYY-MM-DD HH:mm:ss');
  const logOutDate = new logOut(Object.keys(req.body), Object.values(req.body));
  // 유저가 요청한 DB요청 처리를 할 로직
  dbConnect.query(
    `UPDATE user_infor
    SET lastAccess = '${formattedDateTime}'
    WHERE ${logOutDate.userId.join('')} = '${logOutDate.userValues.join('')}'`,
    (err, results) => {
      if (err) {
        console.log("데이터를 업데이트하는데 실패함: ", err);
      } else {
        console.log('로그아웃 성공', results);
      }
    }
  );
}
