import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../src/views/css/style";
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
        if(data.boolean === true){
          console.log("테스트",data.result[0].userName)
          let test = decodeURIComponent(data.result[0].userName)
          setCookie('userName', test,)
          navigate('/home');
          // 로그인 성공했을 때 쿠키 생성
        }
        else{
          alert('로그인 실패')
        }
      })
      .catch((error) => {
        console.error(error);
      });

  };

  return (
    <>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <input
            name="userId"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={handleChangeEmail}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleChangePassword}
          />
          <button type="submit">로그인</button>
        </form>
      </div>
    </>
  );
}
