import http from "http";
// 서버
const server = http.createServer((req, res) => {
  if(req.method === 'GET') {

  }
  if(req.method === 'POST') {

  }
});
server.listen(8080, (err)=> {
  if(err) {
    console.log(err);
  }
  console.log("서버가 정상적으로 연결 됐습니다.");
})
// 서버 호출