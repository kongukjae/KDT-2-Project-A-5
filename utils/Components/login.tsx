import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/views/css/style";
import loginStyle from "../../src/views/css/login.module.css";
import styles from "../../src/views/css/welcome.module.css";

import StockTogetherTitle from "./stockTogetherTitle";
import { setCookie } from "./cookie";
export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      userId: email,
      password: password,
    };

    fetch("/signIn", {
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
        if (data.boolean === true) {
          console.log("테스트", data.result[0].userName);
          if (data.result[0].lastAccess === null) {
            setCookie("userId", data.result[0].userId);
            setCookie("userName", data.result[0].userName);
            navigate("/welcome_1");
          } else {
            setCookie("userId", data.result[0].userId);
            setCookie("userName", data.result[0].userName);
            navigate("/home");
            // 로그인 성공했을 때 쿠키 생성
          }
        } else {
          alert("로그인 실패");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className={loginStyle.main}>
        <StockTogetherTitle />

        <form className="main" onSubmit={handleSubmit}>
          <div className={loginStyle.loginBox}>
            <div className={loginStyle.loginTitle}>로그인</div>
            <div className={loginStyle.loginSubTitle}>
              회원 정보를 입력해주세요.
            </div>
          </div>
          <div className={loginStyle.loginForm}>
            <input
              className="inputText"
              name="userId"
              type="email"
              placeholder="이메일"
              value={email}
              onChange={handleChangeEmail}
            />
            <input
              className="inputText"
              name="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handleChangePassword}
            />
            <button type="submit" className={styles.nextButton}>
              로그인
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
