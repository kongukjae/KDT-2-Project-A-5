import http from "http";

const server = http.createServer((req, res)=> {
  if(req.method === 'GET') {
    
  }
  if(req.method === 'POST') {
    
  }
});
server.listen(8080,(err)=> {
  if(err) {
    console.log(err);
  }
  console.log("서버가 정상 연결 됐습니다");
})