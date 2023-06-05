import React, { useState } from "react";
import ContentsBox from "./contentsBoxArea";
import "../../src/views/css/style";

export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handleChangePhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
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
          <input
            name="userName"
            type="text"
            placeholder="이름"
            value={name}
            onChange={handleChangeName}
          />
          <input
            name="phoneNum"
            type="number"
            placeholder="휴대전화번호"
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
          />
          <label htmlFor="allCheck">전체 동의하기</label>
          <input id="allCheck" type="checkbox" />
          <label htmlFor="ageCheck">만 나이 14세</label>
          <input id="ageCheck" name="ageCheck" type="checkbox" />
          <label htmlFor="TermOfUseCheck">스톡투게더 이용약관 동의</label>
          <input id="TermOfUseCheck" name="TermOfUseCheck" type="checkbox" />
          {/* EFT : Electronic Financial Transaction, 전자금융거래  */}
          <label htmlFor="EFTUseCheck">전자금융거래 이용약관 동의</label>
          <input id="EFTUseCheck" name="TermOfUseCheck" type="checkbox" />
          {/* Personal Information Agreement, 개인정보 제 3자 제공 동의) */}
          <label htmlFor="PIAUseCheck">개인정보 제 3자 제공 동의</label>
          <input id="PIAUseCheck" name="PIAUseCheck" type="checkbox" />
          <label htmlFor="marketingUseCheck">
            마케팅 목적의 개인정보 수집 및 이용 동의
          </label>
          <input
            id="marketingUseCheck"
            name="marketingUseCheck"
            type="checkbox"
          />
          <label htmlFor="advertisement">광고성 정보 수신 동의</label>
          <input id="advertisement" name="advertisement" type="checkbox" />
          <button type="submit">회원가입</button>
        </form>
      </div>
    </>
  );
}
