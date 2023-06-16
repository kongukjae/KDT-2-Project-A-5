import { Server as SocketIOServer } from "socket.io";
import { stockDataRequest } from "./stockDataRequest";
import { stockDataSend } from "./stockDataSend";
export function stockController (io : SocketIOServer) {
stockDataRequest()
.then((data : any)=> {
  ( async ()=> {
  let _data = await data;
  stockDataSend(_data, io);
  })
  ()
})
}