import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
const root = path.join(__dirName, "../../");

const server = http.createServer((req, res)=> {
  if(req.method === 'GET') {
    if(req.url === '/') {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.write("HelloWorld");
      res.end();
    }
    // html파일 요청
    if(req.url.endsWith('.html')) {

    }
    // css파일 요청
    if(req.url.endsWith('.css')) {
      
    }
    // js파일 요청
    if(req.url.endsWith('.js')) {
      
    }

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