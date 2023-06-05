import { useEffect } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:3030");

const SocketConnectModule: React.FC = () => {
  useEffect(() => {
    const socket = io("http://localhost:3030");

    socket.on("connect", () => {
      console.log("소켓 서버에 연결되었습니다.");
    });
    socket.on("disconnect", () => {
      console.log("소켓 서버와의 연결이 해제되었습니다.");
    });

    // 마운트 해제될 때 소켓 연결 해제
    return () => {
      socket.disconnect();
    };
  }, []);


  return null;
};

export default SocketConnectModule;