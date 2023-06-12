import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import io from "socket.io-client";
import Header from "../../../utils/Components/header";
import Nav from "../../../utils/Components/nav";
import StockContentsBox from "../../../utils/Components/stockContentsBox";
import AccountScreen from "./account/accountScreen";
import FirstPage from "./firstPage/firstPageScreen";
import IntroPage from "./IntroPage/IntroPageScreen";
<<<<<<< HEAD
import Recruitment from "./station/recruitment";

export default () => {
=======
import LoginScreen from "./loginPage/loginScreen";
import MainScreen from "./mainPage/mainScreen";
import SignUpScreen from "./signUp/signUpScreen";
import StationScreen from "./station/station";
import stockContext, { stockContextType } from "./stockContext";
const socket = io("localhost:8080");
export default function App() {
>>>>>>> 8d8c5eba5f285b6b0140e94510757885bc11ffa6
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
    // ! 소켓 연결 및 주식 데이터 파싱 구간
    const [stockContextData, setStockContextData] = useState<any>(null);
    socket.on("stockDataUpdate", (updatedData) => {
      try {
        const parsedData = JSON.parse(updatedData);
        console.log("App.tsx의",parsedData);
        // 알파벤티지에서 제공하는 데이터가 쿨타임이 있어서 에러가 생길 때가 있음
        // 데이터를 찾지 못함
        let symbol = parsedData['Meta Data']['2. Symbol'];
        let openPrice = parsedData['Time Series (5min)'];
        const priceArray: stockContextType = {
          symbol: symbol,
          price: openPrice
        };
        setStockContextData(priceArray);
      } catch (error){
        console.error("주식 데이터 쿨타임");
      }
      });
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
      case "/deposit":
        setPageTitle("계좌");
        break;
      case "/signup":
        setPageTitle("회원가입");
        break;
      case "/Recruitment":
        setPageTitle("모집창");
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
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/first" element={<FirstPage />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/home" element={<MainScreen />} />
          <Route path="/station" element={<StationScreen />} />
          <Route path="/account" element={<AccountScreen />} />
          <Route path="/Recruitment" element={<Recruitment />} />
        </Routes>
=======
        <stockContext.Provider value={stockContextData}>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/station" element={<StationScreen />} />
            <Route path="/home" element={<MainScreen />} />
            <Route path="/first" element={<FirstPage />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/account" element={<AccountScreen />} />
            <Route path="/stock" element={<StockContentsBox />} />
          </Routes>
        </stockContext.Provider>
>>>>>>> 8d8c5eba5f285b6b0140e94510757885bc11ffa6
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
