import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import io from "socket.io-client";
import { getCookie } from "../../../utils/Components/cookie";
import CorpAutoComp from "../../../utils/Components/corpAutoComplete";
import Header from "../../../utils/Components/header";
import Nav from "../../../utils/Components/nav";
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
import FirstLoginPage from "../../../src/views/js/firstLoginPage/firstLoginScreen";
import WelcomeFirst from "../../../src/views/js/firstLoginPage/welcomeFirst";
import WelcomeSecond from "../../../src/views/js/firstLoginPage/welcomeSecond";
import WelcomeThird from "../../../src/views/js/firstLoginPage/welcomeThird";
const socket = io("localhost:8080");
export default function App() {
  const userData = getCookie("userName");
  console.log(userData);
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
        setPageTitle("");
        break;
      case "/home":
        setPageTitle("홈");
        break;
      case "/account":
        setPageTitle("내 정보");
        break;
      case "/station":
        setPageTitle("정류장");
        break;
      case "/first":
        setPageTitle("");
        break;
      case "/login":
        setPageTitle("");
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
      case "/welcome_1":
        setPageTitle("");
        break;
      case "/welcome_2":
        setPageTitle("");
        break;
      case "/welcome_3":
        setPageTitle("");
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
            <Route path="/taxi" element={<TaxiScreen />} />
            <Route path="/stockSearch" element={<StockSearch />} />
            <Route path="/welcome_1" element={<FirstLoginPage />} />
            <Route path="/welcome_2" element={<WelcomeSecond />} />
            <Route path="/welcome_3" element={<WelcomeThird />} />
          </Routes>
        </stockContext.Provider>
        {[
          "/",
          "/first",
          "/signup",
          "/login",
          "/welcome_1",
          "/welcome_2",
          "/welcome_3",
        ].includes(location.pathname) ? null : (
          <Nav />
        )}
      </div>
    </>
  );
}
