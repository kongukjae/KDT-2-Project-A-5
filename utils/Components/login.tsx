import React, { useState } from "react";
import ContentsBox from "./ContentsBoxArea";
import "../../src/views/css/style";

export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    console.log("제출 확인");
    e.preventDefault();
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
