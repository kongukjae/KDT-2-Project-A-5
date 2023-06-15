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
    const newBalance = balance + amount;
    setBalance(newBalance);
    setModalIsOpen(false); // 모달 닫기
    setAmount(0); // 입력 필드 초기화
  };

  const handleWithdraw = () => {
    const newBalance = balance - amount;
    setBalance(newBalance);
    setModalIsOpen(false); // 모달 닫기
    setAmount(0); // 입력 필드 초기화
  };

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    setAmount(0); // 입력 필드 초기화
  };

  const handleNumberButtonClick = (num: number) => {
    setAmount((prevAmount) => prevAmount * 10 + num);
  };

  return (
    <div>
      <p className="myAccount">계좌 잔액: {balance.toLocaleString()}</p>
      <input type="button" value="입출금" onClick={handleModalOpen} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        contentLabel="Example Modal"
        style={modalStyles}
      >
        <button onClick={handleModalClose}>X</button>
        <div>입출금창</div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => handleNumberButtonClick(num)}>
              {num}
            </button>
          ))}
          {/* 추가적인 숫자 버튼을 여기에 추가할 수 있습니다 */}
        </div>
        <button onClick={handleDeposit}>입금</button>
        <button onClick={handleWithdraw}>출금</button>
      </Modal>
    </div>
  );
}
