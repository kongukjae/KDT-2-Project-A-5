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
import stockContext, { stockContextType } from "./stockContext";


export default function App() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const socket = io("localhost:8080");
  const [stockContextData, setStockContextData] = useState<
    stockContextType | undefined
  >(undefined);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("소켓 정상 연결 - 클라이언트");
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
        console.error("주식 데이터 쿨타임 ㅠ");
      }
      });
    });
  }, [setStockContextData]);

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
      default:
        setPageTitle("홈");
        break;
    }
  }, [location.pathname]);

  return (
    <>
      <div className="container">
        <Header title={pageTitle} />
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
