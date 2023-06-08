import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import io from "socket.io-client";
import Header from "../../../utils/Components/header";
import Nav from "../../../utils/Components/nav";
import StockContentsBox from "../../../utils/Components/stockContentsBox";
import AccountScreen from "./account/accountScreen";
import FirstPage from "./firstPage/firstPageScreen";
import IntroPage from "./IntroPage/IntroPageScreen";
import LoginScreen from "./loginPage/loginScreen";
import MainScreen from "./mainPage/mainScreen";
import SignUpScreen from "./signUp/signUpScreen";
import StationScreen from "./station/station";
import stockContext from './stockContext';

export default function App() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const socket = io('localhost:8085');
  const [stockContextData, setStockContextData] = useState<any>(null);


  useEffect(() => {
    socket.on("connect", () => {
      console.log("소켓 정상 연결 - 클라이언트");
      socket.on("stockDataUpdate", (updatedData) => {
        const parsedData = JSON.parse(updatedData);
        setStockContextData(parsedData);
      });
    });
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageTitle("함께 투자하는 즐거움 Stock Together");
        break;
      case "/home":
        setPageTitle("홈");
        break;
      case "/account":
        setPageTitle("계좌");
        break;
      case "/station":
        setPageTitle("정류장");
        break;
      case "/first":
        setPageTitle("함께 투자하는 즐거움 Stock Together");
        break;
      case "/login":
        setPageTitle("함께 투자하는 즐거움 Stock Together");
        break;
      case "/signup":
        setPageTitle("회원가입");
        break;
      default:
        setPageTitle("홈");
        break;
    }
  }, [location.pathname]);

  return (
    <>
      <div className="container">
        <Header title={pageTitle} />
        {/* context를 활용하여 주식데이터 사용 가능 -> 사용할 땐 useContext */}
        <stockContext.Provider value={stockContext}>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            {/* 소켓이 필요한 아이들 */}
            <Route path="/station" element={<StationScreen />} />
            <Route path="/home" element={<MainScreen />} />
            {/* 소켓이 필요 없는 아이들 */}
            <Route path="/first" element={<FirstPage />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/account" element={<AccountScreen />} />
            <Route path="/stock" element={<StockContentsBox />} />
          </Routes>
        </stockContext.Provider>
        {[
          "/",
          "/first",
          "/signup",
          "/login",
        ].includes(location.pathname) ? null : (
          <Nav />
        )}
      </div>
    </>
  );
}
