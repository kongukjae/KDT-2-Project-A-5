import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
const root = path.join(__dirName, "../../");
console.log("루트 경로입니다 :  " + root );
const server = http.createServer((req, res)=> {
  if(req.method === 'GET') {
    if(req.url === '/') {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.write("Hello World");
      res.end();
    }
    // html파일 요청
    if(req.url.endsWith('.html')) {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.write(
        fs.readFileSync(path.join(root, "src", "views", "html", "index.html"),"utf-8")
      );
      res.end();
    }
    // css파일 요청
    if(req.url.endsWith('.css')) {
      res.writeHead(200, {'Content-Type' : 'text/css'});
      res.write("");
      res.end();
    }
    // js파일 요청
    if(req.url.endsWith('.js')) {
      res.writeHead(200, {'Content-Type' : 'text/javascript'});
      res.write(fs.readFileSync(path.join(req.url)));
      // res.write(
      //   fs.readFileSync(path.join(root, "utils", "all-mighty-editor.js"),"utf-8")
      // );
      res.end();
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