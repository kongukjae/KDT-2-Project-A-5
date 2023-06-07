import { useEffect, useState } from 'react';
import io from "socket.io-client";
const socketComponent = ()=> {
    const [stockData, setStockData] = useState(null);
    useEffect(()=> {
        const socket = io('localhost:8080');
        // ! 소켓 이벤트를 넣는 구간
        socket.on("connect", ()=> {
            console.log("소켓 정상 연결(클라이언트)")
            socket.on("stockDataUpdate", (data)=> {
                console.log(data);
                setStockData(data);
            })
        })
        return ()=> {socket.disconnect();};
    }, []);
}
export default socketComponent;