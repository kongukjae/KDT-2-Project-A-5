import { Server as SocketIOServer } from "socket.io";
export function stockDataSend(stockData : any, io : SocketIOServer) {
  // 주식 데이터 전송
let increaseNum = 0;
const stockDataLivetransmission = setInterval(async () => {
  stockData.map((element: object | any, index : number)   => {
    try {
      // 데이터가 없다면 취소
      if (!element) return;
      const symbol = element["Meta Data"]["2. Symbol"];
      const stockObjectData = Object.entries(element["Time Series (5min)"]);
      const allData = [symbol, stockObjectData[increaseNum]];
      // const jsonData = JSON.stringify([
      //   symbol,
      //   stockObjectData[increaseNum],
      // ]);
      console.log(allData)
      io.emit("stockDataUpdate", allData);
      increaseNum++;
      if (increaseNum >= stockObjectData.length) {
        clearInterval(stockDataLivetransmission);
      }
    } catch (error) {
      console.error("stockDataLivetransmission 에러", error);
    }
  })
}, 2 * 1000);
}
