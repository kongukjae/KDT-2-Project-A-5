import React, { useState, useEffect } from "react";
// import Screen from "./screen";
import Header from "../../../utils/Components/header";
import MainScreen from "./mainPage/mainScreen";
import StationScreen from "./station/station"
import AccountScreen from "./account/accountScreen";
import Nav from "../../../utils/Components/nav";
import { Routes, Route, useLocation } from "react-router-dom";
import socketComponent from "../../../utils/Components/socket/socketComponent";
console.log(socketComponent)
export default () => {
  const location = useLocation();
  const [pageTitle, setPageTtle] = useState("호옴");

  useEffect(() => {
    // URL 변화에 따라 pageTitle 상태를 업데이트함.
    switch (location.pathname) {
      case "/home":
        setPageTtle("홈");
        break;
      case "/account":
        setPageTtle("계좌");
        break;
      case "/station":
        setPageTtle("정류장");
        break;
      default:
        setPageTtle("홈");
        break;
    }
  }, [location.pathname]); // location.pathname이 바뀔 때마다 실행된다.
  // const [title, setTitle] = useState("홈");
  // const changeTitle = () => {
  //   setTitle("다른 페이지");
  // };
  // // useEffect(() => {
  // //   const url = useParams();
  // // });
  return (
    <>
      <div className="container">
        <socketComponent>
        <Header title={pageTitle} />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/home" element={<MainScreen />} />
          <Route path="/station" element={<StationScreen />} />
          <Route path="/account" element={<AccountScreen />} />
        </Routes>
        <Nav />
        </socketComponent>
      </div>
    </>
  );
};
