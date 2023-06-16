import React from "react";
import { NavLink } from "react-router-dom";
import loginStyle from "../../src/views/css/login.module.css";
import StockTogetherTitle from "./stockTogetherTitle";
import { AiFillGoogleCircle } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/Hi";
import { log } from "console";

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
          <div className={loginStyle.googleLoginButton}>
            <AiFillGoogleCircle className={loginStyle.googleLoginIcon} />
            {/* <button type="submit" className={loginStyle.googleLoginButton}> */}
            Google을 이용하여 시작하기
            {/* </button> */}
          </div>
          <div className={loginStyle.signUpButton}>
            <HiOutlinePencilAlt className={loginStyle.createAccountIcon} />
            <NavLink to="/signup" className={loginStyle.link}>
              {/* <button type="submit" className={loginStyle.signUpButton}> */}
              회원가입
              {/* </button> */}
            </NavLink>
          </div>
        </div>
        <NavLink to="/login">
          <div className={loginStyle.moveToLogin}>
            <p>계정이 이미 있으신가요?</p>
          </div>
        </NavLink>
      </div>
    </>
  );
}
