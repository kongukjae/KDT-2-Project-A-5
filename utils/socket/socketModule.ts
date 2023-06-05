import { createServer } from "http";
import { Server, Socket } from "socket.io";
export default (app : any)=> {
  const ioServer = createServer(app);
  const io = new Server(ioServer);
  io.on("connect", (socket : Socket)=> {
    console.log("소켓 서버와 정상 연결 됐습니다.");
  });
  io.on("disconnect", (socket : Socket)=> {
    console.log("소켓 서버와 연결이 끊겼습니다")
  });
}