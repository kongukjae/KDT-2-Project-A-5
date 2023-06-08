// * 리액트 주요 라이브러리
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import io from "socket.io-client";
// import Screen from "./screen";
// ? 리액트 컴포넌트
import Header from "../../../utils/Components/header";
import Nav from "../../../utils/Components/nav";
import AccountScreen from "./account/accountScreen";
import FirstPage from "./firstPage/firstPageScreen";
import IntroPage from "./IntroPage/IntroPageScreen";
import LoginScreen from "./loginPage/loginScreen";
import MainScreen from "./mainPage/mainScreen";
import SignUpScreen from "./signUp/signUpScreen";
import StationScreen from "./station/station";

export default () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  const socket = io('localhost:8085');
    // 소켓 연결
    socket.on("connect", () => {
      console.log("소켓 정상 연결 - 클라이언트");
      socket.on("stockDataUpdate", (updatedData)=> {
        console.log(updatedData);
      })
      });
  useEffect(() => {
    // URL 변화에 따라 pageTitle 상태를 업데이트함.
    switch (location.pathname) {
      case "/":
        setPageTitle("함께 투자하는 즐거움" + "Stock Together");
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
        setPageTitle("함께 투자하는 즐거움" + "Stock Together");
        break;
      case "/login":
        setPageTitle("함께 투자하는 즐거움" + "Stock Together");
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
          // 소켓이 필요한 아이들
          <Route path="/station" element={<StationScreen />} />
          <Route path="/home" element={<MainScreen />} />
          // 소켓이 필요 없는 아이들
          <Route path="/first" element={<FirstPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
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
