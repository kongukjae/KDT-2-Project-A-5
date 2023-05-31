import express, { Request, Response } from 'express';

const app = express();
// const __filename = fileURLToPath(__dirname(import.meta.url))
app.use(express.static('/'));
app.get('/', (req : Request, res : Response)=> {
  res.send("HelloWorld");
})
app.listen(8080, (err : Error) : void => {
  if(err) {
    console.log(err);
  }
  console.log("서버 접속")
})