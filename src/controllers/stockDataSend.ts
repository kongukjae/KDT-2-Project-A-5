import { Server as SocketIOServer } from "socket.io";
export function stockDataSend(stockData : any, io : SocketIOServer) {
let increaseNum = 0;
const stockDataLivetransmission = setInterval(async () => {
  // 데이터 가공
  const dataFormatt = stockData.map((element: object | any)   => {
    let jsonData : any;
    try {
      // 데이터가 없다면 취소
      const symbol = element["Meta Data"]["2. Symbol"];
      const stockObjectData = Object.entries(element["Time Series (5min)"]);
      jsonData = JSON.stringify([
        symbol,
        stockObjectData[increaseNum],
      ]);
    } catch (error) {
      console.error("stockDataLivetransmission 에러", error);
    }
    console.log(jsonData)
    return jsonData;
  });
  // 가공 된 데이터 전송
  const dataSend = ()=> {
    io.emit("stockDataUpdate", dataFormatt);
  };
  increaseNum++
}, 3 * 1000);
}
