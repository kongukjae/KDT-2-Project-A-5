import express from "express";

const app = express();


app.use(express.json()); // JSON 형식의 본문을 파싱할 수 있도록 설정
app.use(express.urlencoded({ extended: true })); // URL-encoded 형식의 본문을 파싱할 수 있도록 설정
// 증가률 구하기 위한 전날 날짜
export default function(req: express.Request, res: express.Response, next: express.NextFunction){
  
    console.log('이것은 data', req.body);

}
