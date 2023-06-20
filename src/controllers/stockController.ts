import { Server as SocketIOServer } from "socket.io";
import { stockDataRequest } from "./stockDataRequest";
import { stockDataSend } from "./stockDataSend";

export function stockController(io: SocketIOServer) {
  // 주식 데이터 요청 및 전송 함수
  const requestAndSendData = async () => {
    try {
      const data = await stockDataRequest();
      stockDataSend(data, io);
    } catch (error) {
      console.error("주식 데이터 요청 및 전송 중 오류 발생:", error);
    }
  };

  // 초기 데이터 요청 및 전송 수행
  requestAndSendData();

  // 3분마다 주식 데이터 요청 및 전송 수행
  setInterval(requestAndSendData, 60 * 1000 *3); // 3분을 밀리초로 변환
}
