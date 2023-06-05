import React, { useState, useEffect } from "react";
// import Screen from "./screen";
import Header from "../../../utils/Components/header";
import MainScreen from "./mainPage/mainScreen";
import StationScreen from "./station/station";
import AccountScreen from "./account/accountScreen";
import LoginScreen from "./loginPage/loginScreen";
import SignUpScreen from "./signUp/signUp";
import Nav from "../../../utils/Components/nav";
import { Routes, Route, useLocation } from "react-router-dom";
import FirstPage from "./firstPage/firstPageScreen";
import IntroPage from "./IntroPage/IntroPageScreen";

export default () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    // URL 변화에 따라 pageTitle 상태를 업데이트함.
    switch (location.pathname) {
      case "/home":
        setPageTitle("홈");
        break;
      case "/account":
        setPageTitle("계좌");
        break;
      case "/station":
        setPageTitle("정류장");
        break;
      case "/":
        setPageTitle("함께 투자하는 즐거움" + "Stock TOGETHER");
        break;
      case "/login":
        setPageTitle("함께 투자하는 즐거움" + "Stock TOGETHER");
        break;
      case "/signup":
        setPageTitle("회원가입");
        break;
      default:
        setPageTitle("홈");
        break;
    }
  }, [location.pathname]); // location.pathname이 바뀔 때마다 실행된다.

  return (
    <>
      <div className="container">
        <Header title={pageTitle} />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/login" element={<FirstPage />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/home" element={<MainScreen />} />
          <Route path="/station" element={<StationScreen />} />
          <Route path="/account" element={<AccountScreen />} />
        </Routes>
        {[
          "/",
          "/signup",
          "/login",
          // 다른 관련된 페이지들
        ].includes(location.pathname) ? null : (
          <Nav />
        )}
        {/* <Nav /> */}
      </div>
    </>
  );
};
