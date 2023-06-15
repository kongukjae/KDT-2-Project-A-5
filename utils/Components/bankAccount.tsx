import React, { useState, useEffect } from "react";
import "../../src/views/css/style";
import Modal from "react-modal";

const modalStyles = {
  content: {
    width: "340px",
    height: "340px",
    margin: "0 auto",
  },
};

export default function Account() {
  const [balance, setBalance] = useState(999999);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);

  /*  계좌에 숫자가 올라갈 때마다 호출되는 함수 */
  const handleDeposit = () => {
    setBalance(balance + amount);
    setAmount(0);
  };

  const handleWithdraw = () => {
    if (balance >= amount) {
      setBalance(balance - amount);
      setAmount(0);
    } else {
      alert("잔액이 부족합니다.");
    }
  };

  useEffect(() => {
    const savedBalance = localStorage.getItem("balance");
    if (savedBalance) {
      setBalance(parseFloat(savedBalance));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("balance", balance.toString());
  }, [balance]);

  /* 모달  */
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <p className="myAccount">계좌 잔액: {balance.toLocaleString()}</p>
      <p className="myAccount" onClick={openModal}>
        입출금
      </p>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyles}
      >
        <button onClick={closeModal}>X</button>
        <div>입출금창</div>
        <form>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <button onClick={handleDeposit}>입금</button>
          <button onClick={handleWithdraw}>출금</button>
        </form>
      </Modal>
    </div>
  );
}
