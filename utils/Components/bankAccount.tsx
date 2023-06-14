import React, { useState } from "react";
import { Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Deposit from "./deposit";

import "../../src/views/css/style";

export default function Account() {
  const [balance, setBalance] = useState(999999999);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // 계좌에 숫자가 올라갈 때마다 호출되는 함수
  const handleDeposit = (amount: number) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleWithdraw = () => {
    navigate("/withdraw");
    handleModalClose();
  };

  return (
    <div>
      <p className="myAccount">계좌 잔액: {balance.toLocaleString()}</p>
      <button onClick={handleModalOpen}>충전</button>
      <button onClick={handleModalOpen}>입금</button>
      {/* 추가적인 버튼 또는 로직을 여기에 추가할 수 있습니다 */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleModalClose}>
              X
            </button>
            <p>입출금 화면</p>
            <button onClick={handleWithdraw}>출금</button>
          </div>
        </div>
      )}
    </div>
  );
}
