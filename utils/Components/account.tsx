import React, { useState } from "react";
// import "../../src/views/css/style";
import "../../src/views/css/myDriverLicense.css"
import BankAccount from "./bankAccount";
import DrivingCar from "./drivingCar";
import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "./cookie";
import DriverLicense from "../../src/views/js/accountPage/driverLicense";

export default function Main() {
  const navigate = useNavigate();
  const cookieId = getCookie("userId");
  // const backToTheLogin = () => {
  //   navigate('/first');
  // }

  // 로그아웃 로직 수행
  const handleLogout = () => {
    const data = {
      userId: decodeURIComponent(cookieId),
    };
    fetch("/logOut", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("POST 요청이 실패했습니다.");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    removeCookie("userName");
    removeCookie("userId");
    removeCookie("userNum");
    // 새로고침
    navigate("/first");
  };

  if (cookieId) {
    return (
      <div className="main">
        <div className="mainInBox">
          <div className="accountBox">
            <h2>계좌</h2>
            <BankAccount />
          </div>
          <div className="driverLicenseBox">
            <h2>내 운전면허증</h2>
            <DriverLicense />
          </div>
          <div className="showTaxiContainerBox">
            <h2>운행중인 차량</h2>
            <DrivingCar />
          </div>
          <button onClick={handleLogout} className="logoutButton">로그아웃</button>
        </div>
      </div>
    );
  } else {
    // 쿠키가 없을 경우
    return <></>;
  }
}
