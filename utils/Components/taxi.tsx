import React, { useEffect, useState, useRef } from "react";
import StockSearch from "./stockSearch";
import Modal from "react-modal";
import { getCookie } from "./cookie";
import { useNavigate, Link } from "react-router-dom";

import { IoMdArrowBack } from "react-icons/io";
import styles from "../../src/views/css/welcome.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const inputStock = useRef<any>("");
  const navigate = useNavigate();
  // 모달을 열기 위한 함수.
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  useEffect(() => {
    const cookieValue = getCookie("userName");
    setUserName(cookieValue);
  }, []);

  // 모달을 닫기 위한 함수입니다.
  const handleCloseModal = () => {
    setModalIsOpen(false);
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
    const userNum = getCookie("userNum");
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
      userNum: userNum,
    };

    fetch("/taxi", {
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
        console.log("data", data);
        if (data.boolean === true) {
          console.log("제출 확인", data);
          navigate("/station");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main">
      <form action="" method="" onSubmit={handleSubmit}>
        <div className="flexBetween">
          <input
            type="hidden"
            placeholder="기사이름"
            name="userName"
            value={userName}
            readOnly
            required
          />
        </div>
        <div className="flexBetween">
          종목 이름
          <div>
            <input
              type="text"
              placeholder="종목을 검색해주세요"
              name="stocks"
              value={stocks}
              onChange={handleChangeStocks}
              onClick={handleOpenModal}
              ref={inputStock}
              readOnly
              required
            ></input>
            <a href="#" onClick={handleOpenModal}>
              <button type="button" value="클릭">
                검색
              </button>
            </a>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          {/* 모달창 띄우기 */}
          <div className="serachInterface">
            <h2>원하는 종목 혹은 코드를 입력해주세요</h2>
            <button onClick={handleCloseModal}>돌아가기</button>
          </div>
          <StockSearch setStocks={setStocks} closeModal={handleCloseModal} />
          {/* 기존에 생성했던 컴포넌트*/}
        </Modal>
        <div className="flexBetween">
          모집 마감 기간
          <input
            type="date"
            placeholder="모집 마감 기간"
            name="recruitmentPeriod"
            value={recruitmentPeriod}
            onChange={handleChangeRecruitmentPeriod}
            required
          ></input>
        </div>
        <div className="flexBetween">
          최대 운행 기간
          <input
            type="date"
            placeholder="최대 운행 기간"
            name="maximumDrivePeriod"
            value={maximumDrivePeriod}
            onChange={handleChangeMaximumDrivePeriod}
            required
          ></input>
        </div>
        <div className="flexBetween">
          구매 희망 금액
          <input
            type="number"
            placeholder="구매 희망 금액"
            name="purchasePrice"
            value={purchasePrice}
            onChange={handleChangePurchasePrice}
            required
          ></input>
        </div>
        <div className="flexBetween">
          구매 희망 수량
          <input
            type="number"
            placeholder="구매 희망 수량"
            name="stockAmount"
            value={stockAmount}
            onChange={handleChangeStockAmount}
            required
          ></input>
        </div>
        <div className="flexBetween">
          희망 목표 금액
          <input
            type="number"
            placeholder="희망 목표 금액"
            name="targetPrice"
            value={targetPrice}
            onChange={handleChangeTargetPrice}
            required
          ></input>
        </div>
        <div className="flexBetween">
          절망 폭파 금액
          <input
            type="number"
            placeholder="절망 폭파 금액"
            name="stopLossPrice"
            value={stopLossPrice}
            onChange={handleChangeStopLossPrice}
            required
          ></input>
        </div>
        <div className="flexBetween">
          최대 인원 수
          <input
            type="number"
            placeholder="최대 인원수"
            name="maxPerson"
            min="1"
            max="10"
            value={maxPerson}
            onChange={handleChangeMaxPerson}
            required
          ></input>
        </div>

        <div className="flexBetween">
          <Link to={"/station"}>
            <div className={styles.backButton}>
              <p>돌아가기</p>
              <IoMdArrowBack />
            </div>
          </Link>
          <button type="submit">택시 생성</button>
        </div>
      </form>
    </div>
  );
};

export default corpAutoComp;
