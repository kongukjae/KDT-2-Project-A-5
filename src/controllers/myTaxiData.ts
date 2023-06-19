import {Connection} from "mysql2"
import { Response } from "express";


export default function (userName: string, db: Connection, res: Response) {
  const _userName = decodeURIComponent(userName)
  console.log(_userName)
  // 유저가 요청한 DB요청 처리를 할 로직
  db.query(
    // `SELECT * from taxi WHERE state=1;`,//원본
    `SELECT * from taxi WHERE userName="${_userName}"`,
    // `SELECT * from taxi WHERE userName="박달재"`,
    (err, results) => {
      if (err) {
        console.log("데이터를 가져오는데 실패함 : ", err);
      } else {
        res.json(results);
        console.log(results);
      }
    }
  );
}
