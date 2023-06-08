import React, { useEffect, useState, createContext, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import stockContext, { stockContextType } from './stockContext';
import io from "socket.io-client";
import Header from "../../../utils/Components/header";
import Nav from "../../../utils/Components/nav";
import AccountScreen from "./account/accountScreen";
import FirstPage from "./firstPage/firstPageScreen";
import IntroPage from "./IntroPage/IntroPageScreen";
import LoginScreen from "./loginPage/loginScreen";
import MainScreen from "./mainPage/mainScreen";
import SignUpScreen from "./signUp/signUpScreen";
import StationScreen from "./station/station";



export default function App() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const socket = io('localhost:8085');
  const [stockContextData, setStockContextData] = useState<stockContextType | undefined>(undefined);


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
        setPageTitle("내 정보");
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
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/first" element={<FirstPage />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/home" element={<MainScreen />} />
          <Route path="/station" element={<StationScreen />} />
          <Route path="/account" element={<AccountScreen />} />
          {/* <Route path="/deposit" element={<Deposit />} /> */}
        </Routes>
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
