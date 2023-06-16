import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginStyle from "../../src/views/css/login.module.css";
import StockTogetherTitle from "./stockTogetherTitle";
import stockContext from "../../src/views/js/stockContext";
export default function Login() {
  return (
    <>
      <div className={loginStyle.main}>
        <StockTogetherTitle />
        <img
          className={loginStyle.titleImg}
          src="img/stock_together_logo.png"
          width="80%"
          alt="이미지"
        />
        <div className={loginStyle.loginTypeBox}>
          <button type="submit" className={loginStyle.googleLoginButton}>
            Google을 이용하여 시작하기
          </button>
          <Link to="/signup">
            <button type="submit" className={loginStyle.signUpButton}>
              회원가입
            </button>
          </Link>
        </div>
        <Link to="/login">
          <div className={loginStyle.moveToLogin}>
            <p>계정이 이미 있으신가요?</p>
          </div>
        </Link>
      </div>
    </>
  );
}
