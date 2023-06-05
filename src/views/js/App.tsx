// * 리액트 관련 라이브러리
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";


// * 페이지 관련 컴포넌트
import Header from "../../../utils/Components/header";
import MainScreen from "./mainPage/mainScreen";
import StationScreen from "./station/station";
import AccountScreen from "./account/accountScreen";
import LoginScreen from "./loginPage/loginScreen";
import SignUpScreen from "./signUp/signUpScreen";
import Nav from "../../../utils/Components/nav";
import FirstPage from "./firstPage/firstPageScreen";
import IntroPage from "./IntroPage/IntroPageScreen";

import style from "../css/style.module.css"


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
      case "/first":
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
      <div className={style.container}>
        <Header title={pageTitle} />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/first" element={<FirstPage />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/home" element={<MainScreen />} />
          <Route path="/station" element={<StationScreen />} />
          <Route path="/account" element={<AccountScreen />} />
        </Routes>
        {[
          "/",
          "/first",
          "/signup",
          "/login",
          // 애플리케이션의 현재 주소가 해당 객체 안에 있을 경우
          // Nav 컴포넌트를 null 처리한다. (숨긴다)
          // 추가적으로 Nav 컴포넌트가 필요하지 않은 페이지를 제작할 경우
          // 이 영역에서 주소를 처리하는 식으로 Nav 컴포넌트를 숨길 수 있다.
        ].includes(location.pathname) ? null : (
          <Nav />
        )}
        {/* <Nav /> */}
      </div>
    </>
  );
};
