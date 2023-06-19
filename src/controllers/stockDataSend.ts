import { Server as SocketIOServer } from "socket.io";
export function stockDataSend(stockData : any, io : SocketIOServer) {
let increaseNum = 0;
let testArray :any[] = [];
const stockDataLivetransmission = setInterval(async () => {

  // 데이터 가공
  const dataFormatt = stockData.map((element: object | any)   => {
    let allData : any;
    try {
      // 데이터가 없다면 취소
      let symbol = element["Meta Data"]["2. Symbol"];
      let stockObjectData = Object.entries(element["Time Series (5min)"]);
      allData = { symbol : symbol,
      price : stockObjectData[increaseNum]
      }
      testArray.push(allData)
      // console.log(testArray)
    } catch (error) {
      console.error("stockDataLivetransmission 에러", error);
    }
    return allData;
  });
  // 가공 된 데이터 전송
  const dataSend = ()=> {
    console.log("하이")
    io.emit("stockDataUpdate", dataFormatt);
  };
  // 가지고 있는 배열 길이 만큼만 전송
  if(increaseNum >= Object.values(stockData[0]['Time Series (5min)']).length) {
    clearInterval(stockDataLivetransmission);
    increaseNum = 0;
  }
  else {
    console.log()
    dataSend()
    increaseNum++
  }
}, 5 * 1000);
}
