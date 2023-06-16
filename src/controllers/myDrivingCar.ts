import express ,{ Request, Response } from 'express';
import dbConnect from "../../utils/DB/dbConfigure";


// const app = express();


// app.use(express.json()); // JSON 형식의 본문을 파싱할 수 있도록 설정
// app.use(express.urlencoded({ extended: true })); // URL-encoded 형식의 본문을 파싱할 수 있도록 설정
// // 증가률 구하기 위한 전날 날짜

export default function myDrivingCarJoin(res: Response, req: Request) {

  console.log('test',req.body);


}