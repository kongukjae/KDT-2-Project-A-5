import React, { useEffect, useState } from "react";
import StockSearch from "./stockSearch";
import { Link } from "react-router-dom";

const corpAutoComp = () => {
  const [userName, setUserName] = useState("");
  const [stocks, setStocks] = useState("");
  const [recruitmentPeriod, setRecruitmentPeriod] = useState("");
  const [maximumDrivePeriod, setMaximumDrivePeriod] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [stockAmount, setStockAmount] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [stopLossPrice, setStopLossPrice] = useState("");
  const [maxPerson, setMaxPerson] = useState("");

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleChangeStocks = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStocks(e.target.value);
  };

  const handleChangeRecruitmentPeriod = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecruitmentPeriod(e.target.value);
  };
  const handleChangeMaximumDrivePeriod = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMaximumDrivePeriod(e.target.value);
  };

  const handleChangePurchasePrice = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPurchasePrice(e.target.value);
  };
  const handleChangeStockAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStockAmount(e.target.value);
  };
  const handleChangeTargetPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetPrice(e.target.value);
  };
  const handleChangeStopLossPrice = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStopLossPrice(e.target.value);
  };
  const handleChangeMaxPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPerson(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("제출 확인");
    const data = {
      userName: userName,
      stocks: stocks,
      recruitmentPeriod: recruitmentPeriod,
      maximumDrivePeriod: maximumDrivePeriod,
      purchasePrice: purchasePrice,
      stockAmount: stockAmount,
      targetPrice: targetPrice,
      stopLossPrice: stopLossPrice,
      maxPerson: maxPerson,
    };

    fetch("/taxiCreate", {
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




  };

  return (
    <div className="main">
      <form action="" method="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="기사이름"
          name="userName"
          value={userName}
          onChange={handleChangeUserName}
        />
        <input
          type="text"
          placeholder="회사명"
          name="stocks"
          value={stocks}
          onChange={handleChangeStocks}
        ></input>
        <Link to={"/stockSearch"}>
          <button type="button" value="클릭">
            검색
          </button>
        </Link>
        <input
          type="date"
          placeholder="모집 마감 기간"
          name="recruitmentPeriod"
          value={recruitmentPeriod}
          onChange={handleChangeRecruitmentPeriod}
        ></input>
        <input
          type="date"
          placeholder="최대 운행 기간"
          name="maximumDrivePeriod"
          value={maximumDrivePeriod}
          onChange={handleChangeMaximumDrivePeriod}
        ></input>
        <input
          type="number"
          placeholder="구매 희망 금액"
          name="purchasePrice"
          value={purchasePrice}
          onChange={handleChangePurchasePrice}
        ></input>
        <input
          type="number"
          placeholder="구매 희망 수량"
          name="stockAmount"
          value={stockAmount}
          onChange={handleChangeStockAmount}
        ></input>
        <input
          type="number"
          placeholder="희망 목표 금액"
          name="targetPrice"
          value={targetPrice}
          onChange={handleChangeTargetPrice}
        ></input>
        <input
          type="number"
          placeholder="절망 폭파 금액"
          name="stopLossPrice"
          value={stopLossPrice}
          onChange={handleChangeStopLossPrice}
        ></input>
        <input
          type="number"
          placeholder="최대 인원수"
          name="maxPerson"
          min="1"
          max="10"
          value={maxPerson}
          onChange={handleChangeMaxPerson}
        ></input>
        <button type="submit">택시 생성</button>
      </form>
    </div>
  );
};

export default corpAutoComp;
