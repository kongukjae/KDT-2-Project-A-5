import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/views/css/style";

export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*   const [passwordConfirm, setpasswordConfirm] = useState(""); */
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [termOfUseCheck, setTermOfUseCheck] = useState(false);
  const [eftUseCheck, setEftUseCheck] = useState(false);
  const [piaUseCheck, setPiaUseCheck] = useState(false);
  const [marketingUseCheck, setMarketingUseCheck] = useState(false);
  const [advertisementCheck, setAdvertisementCheck] = useState(false);
  // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다. 이후 navigate 함수를 사용하여 페이지 전환 및 브라우저 내비게이션을 수행할 수 있습니다.
  const navigate = useNavigate();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  /*   const handleChangePasswordConfirm = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };
 */
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  // ! 이 영역부터 약관 동의에 관한 내용

  const handleAgeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgeCheck(e.target.checked);
  };

  const handleTermsOfUseCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermOfUseCheck(e.target.checked);
  };

  const handleEftUseCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEftUseCheck(e.target.checked);
  };

  const handlePiaUseCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPiaUseCheck(e.target.checked);
  };

  const handleMarketingUseCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMarketingUseCheck(e.target.checked);
  };

  const handleAdvertisementCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdvertisementCheck(e.target.checked);
  };

  const handleAllCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setAllCheck(isChecked);
    setAgeCheck(isChecked);
    setTermOfUseCheck(isChecked);
    setEftUseCheck(isChecked);
    setPiaUseCheck(isChecked);
    setMarketingUseCheck(isChecked);
    setAdvertisementCheck(isChecked);
  };
  // ! 이 영역까지 약관 동의에 관한 내용

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("제출 확인");

    const data = {
      email: email,
      password: password,
      name: name,
      phoneNumber: phoneNumber,
    };

    fetch("/user", {
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
        if (data === true) {
          console.log("data =", data); // 서버의 응답을 출력하거나 원하는 작업을 수행합니다.
          navigate("/first");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="main ">
        <form className="BackgroundColorGray" onSubmit={handleSubmit}>
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
          {/* <input
            className="inputText"
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={handleChangePasswordConfirm}
          />      비밀번호 확인용  input 
          차후 수정 예정- 
          */}
          <input
            className="inputText"
            name="userName"
            type="text"
            placeholder="이름"
            value={name}
            onChange={handleChangeName}
          />
          <input
            className="inputText"
            name="phoneNum"
            type="number"
            placeholder="휴대전화번호"
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
          />
          <div>
            <div>
              <input
                id="allCheck"
                type="checkbox"
                checked={allCheck}
                onChange={handleAllCheckChange}
              />
              <label htmlFor="allCheck">전체 동의하기</label>
            </div>
            {/* <input id="allCheck" type="checkbox" /> */}

            <div className="inputWhiteBox">
              <div>
                <input
                  id="ageCheck"
                  name="ageCheck"
                  type="checkbox"
                  checked={ageCheck}
                  onChange={handleAgeCheck}
                />
                <label htmlFor="ageCheck">[필수] 만 나이 14세</label>
              </div>
              <div>
                <input
                  id="TermOfUseCheck"
                  name="TermOfUseCheck"
                  type="checkbox"
                  checked={termOfUseCheck}
                  onChange={handleTermsOfUseCheck}
                />
                <label htmlFor="TermOfUseCheck">
                  [필수] 스톡투게더 이용약관 동의
                </label>
                {/* EFT : Electronic Financial Transaction, 전자금융거래  */}
              </div>
              <div>
                <input
                  id="EFTUseCheck"
                  name="TermOfUseCheck"
                  type="checkbox"
                  checked={eftUseCheck}
                  onChange={handleEftUseCheck}
                />{" "}
                <label htmlFor="EFTUseCheck">
                  [필수] 전자금융거래 이용약관 동의
                </label>
              </div>
              {/* Personal Information Agreement, 개인정보 제 3자 제공 동의) */}
              <div>
                <input
                  id="PIAUseCheck"
                  name="PIAUseCheck"
                  type="checkbox"
                  checked={piaUseCheck}
                  onChange={handlePiaUseCheck}
                />
                <label htmlFor="PIAUseCheck">
                  [필수] 개인정보 제 3자 제공 동의
                </label>
              </div>
              <div>
                <input
                  id="marketingUseCheck"
                  name="marketingUseCheck"
                  type="checkbox"
                  checked={marketingUseCheck}
                  onChange={handleMarketingUseCheck}
                />
                <label htmlFor="marketingUseCheck">
                  [선택] 마케팅 목적의 개인정보 수집 및 이용 동의
                </label>
              </div>
              <div>
                <input
                  id="advertisement"
                  name="advertisement"
                  type="checkbox"
                  checked={advertisementCheck}
                  onChange={handleAdvertisementCheck}
                />
                <label htmlFor="advertisement">
                  [선택] 광고성 정보 수신 동의
                </label>
              </div>
            </div>
          </div>
          <button type="submit">회원가입</button>
        </form>
      </div>
    </>
  );
}
