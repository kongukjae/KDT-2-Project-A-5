import { Request, Response } from 'express';
import dbConnect from "../../utils/DB/dbConfigure";

class myDrivingCar {
  userName: string[]
  userValues : string[]
  constructor(userName : string[],userValues: string[]) {
    this.userName = userName;
    this.userValues = userValues;
  }
}

export default function myDrivingCarJoin(req: Request, res: Response) {
  const myDrivingCarData = new myDrivingCar(Object.keys(req.body),Object.values(req.body));
  // 유저가 요청한 DB요청 처리를 할 로직
  dbConnect.query(`SELECT * from taxi WHERE state=1 and ${myDrivingCarData.userName}='${myDrivingCarData.userValues}';`
  , (err, results) => {
    if (err) {
      console.log("데이터를 가져오는데 실패함 : ", err);
    }
    else {
      res.json(results);
    }
  })
}
