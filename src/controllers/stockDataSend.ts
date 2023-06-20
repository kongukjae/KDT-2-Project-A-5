import { Server as SocketIOServer } from "socket.io";
// 주식 데이터 전송 모듈
export function stockDataSend(stockData : any, io : SocketIOServer) {
let increaseNum = 0;
let stockArray :any[] = [];
const stockDataLivetransmission = setInterval(async () => {
  // 데이터 가공
  const dataFormatt = stockData.map((element: object | any)   => {
    let allData : any;
    try {
      // 회사
      let symbol = element["Meta Data"]["2. Symbol"];
      // 시간별 주식 정보
      let stockObjectData = Object.entries(element["Time Series (5min)"]);
      // 객체에 담아서 전송
      allData = { symbol : symbol,
      price : stockObjectData[increaseNum]
      }
      stockArray.push(allData)
      // console.log(testArray)
    } catch (error) {
      console.error("stockDataLivetransmission 에러", error);
    }
    return allData;
  });
  // 가공 된 데이터 전송
  const dataSend = ()=> {
    io.emit("stockDataUpdate", dataFormatt);
  };
  // 가지고 있는 배열 길이 만큼만 전송
  if(increaseNum >= Object.values(stockData[0]['Time Series (5min)']).length) {
    //! 초기화
    clearInterval(stockDataLivetransmission);
    increaseNum = 0;
    // ? 데이터가 모두 소진됐을 때 요청 필요???
  }
  // 데이터 전송
  else {
    dataSend()
    increaseNum++
  }
  // 3초에 한번 전송
}, 3 * 1000);
}
