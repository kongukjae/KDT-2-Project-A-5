import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:2020");

const SocketConnectModule = (): JSX.Element => {
  const [stockData, setStockData] = useState(null);
  useEffect(() => {

    // socket.on("connect", () => {
    //   console.log("소켓 서버에 연결되었습니다.");
    // });
    // socket.on("disconnect", () => {
    //   console.log("소켓 서버와의 연결이 해제되었습니다.");
    // });
    socket.on("connect", ()=> {
      socket.emit("hello", "대머리")
    })
    socket.on("stockDataUpdate", (data)=> {
      console.log(data);
      setStockData(data);
    })

    // 마운트 해제될 때 소켓 연결 해제
    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    //@ts-ignore
    <>
    {stockData}
    </>
  );
};

export default SocketConnectModule;