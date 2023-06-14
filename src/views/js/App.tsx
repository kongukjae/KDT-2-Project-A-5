import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import io from "socket.io-client";
import CorpAutoComp from "../../../utils/Components/corpAutoComplete";
import DayRange from "../../../utils/Components/dayRange";
import Header from "../../../utils/Components/header";
import Nav from "../../../utils/Components/nav";
import StockData from "../../../utils/Components/stockContentsBox";
import AccountScreen from "./accountPage/accountScreen";
import FirstPage from "./firstPage/firstPageScreen";
import IntroPage from "./IntroPage/IntroPageScreen";
import LoginScreen from "./loginPage/loginScreen";
import MainScreen from "./mainPage/mainScreen";
import SignUpScreen from "./signUp/signUpScreen";
import StationScreen from "./station/stationScreen";
import stockContext from "./stockContext";
import TaxiScreen from "./taxiPage/taxiScreen";
import StockSearch from "../../../utils/Components/stockSearch";
const socket = io("localhost:8080");
export default function App() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  // let socketStockData : any = [];
  // ! 소켓 연결 및 주식 데이터 파싱 구간
  const [stockContextData, setStockContextData] = useState<any>(null);
  useEffect(() => {
    socket.on("stockDataUpdate", (updatedData) => {
      try {
        const parsedData = JSON.parse(updatedData);
        setStockContextData(parsedData);
      } catch (error) {
        console.error("주식 데이터 쿨타임");
      }
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
      case "/deposit":
        setPageTitle("계좌");
        break;
      case "/signup":
        setPageTitle("회원가입");
        break;
      case "/taxi":
        setPageTitle("조회");
        break;
      case "/stockSearch":
        setPageTitle("종목 검색");
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
            <Route path="/stock" element={<DayRange />} />
            <Route path="/taxi" element={<TaxiScreen />} />
            <Route path="/stockSearch" element={<StockSearch />} />
            <Route path="/chart" element={<StockData />} />
          </Routes>
        </stockContext.Provider>
        {["/", "/first", "/signup", "/login"].includes(
          location.pathname
        ) ? null : (
          <Nav />
        )}
      </div>
    </>
  );
}
