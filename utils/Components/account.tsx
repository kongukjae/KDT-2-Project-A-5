import React, { useState } from "react";
import "../../src/views/css/style";
import BankAccount from "./bankAccount";
import DrivingCar from "./drivingCar";
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from './cookie';
import DriverLicense from "../../src/views/js/accountPage/driverLicense";

export default function Main() {
  const navigate = useNavigate();
  const cookieId = getCookie('userId');
  const backToTheLogin = () => {
    navigate('/login');
  }

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
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
      removeCookie('userName');
      removeCookie('userId');
      removeCookie('userNum');
    // 새로고침
    window.location.reload();
  };

  if (cookieId) {
    return (
        <div className="main">
        <div className="mainInBox">
          <button onClick={handleLogout}>LogOut</button>
          <div>
            <h2>계좌</h2>
            <BankAccount />
          </div>
          <div>
            <h3>내 운전면허증</h3>
            <DriverLicense />
          </div>
          <div className="showTaxiContainerBox">
            <h3>운행중인 차량</h3>
            <DrivingCar />
          </div>
        </div>
        </div>
    );
  }
  else {
    // 쿠키가 없을 경우
    return (
      <>
        <div className="main">
          <h3>권한이 없습니다. 로그인이 필요합니다.</h3>
          <button onClick={backToTheLogin}>로그인 하러 가기</button>
        </div>
      </>
    );
  }
}
