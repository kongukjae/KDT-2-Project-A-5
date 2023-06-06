import io from "socket.io-client"
import { useEffect } from 'react';
const socketComponent = ()=> {
    useEffect(()=> {
        const socket = io('localhost:8080');
        // ! 소켓 이벤트를 넣는 구간
        socket.on("connect", ()=> {
            console.log("소켓 정상 연결(클라이언트)")
        })
        return ()=> {socket.disconnect();};
    }, []);
}
export default socketComponent;