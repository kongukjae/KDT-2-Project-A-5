import express from "express";
import dbConnect from "../../utils/DB/dbConfigure";
export default function (req: express.Request, res: express.Response) {
  // 유저가 요청한 DB요청 처리를 할 로직
  dbConnect.query(`SELECT * from taxi WHERE state=1;
  `, (err, results) => {
    if(err) {
      console.log("데이터를 가져오는데 실패함 : ",err);
    }
    else {
      res.json(results);
    }
  })
}