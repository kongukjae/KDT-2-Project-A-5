import React, { useState } from "react";
// import "../../src/views/css/style";
import Modal from "react-modal";
import "../../src/views/css/myAccount.css";

const modalStyles = {
  content: {
    width: "360px",
    height: "360px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
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
    if (balance >= amount) {
      setBalance(balance - amount);
      setAmount(0);
    } else {
      alert("잔액이 부족합니다.");
    }
    setModalIsOpen(false); // 모달 닫기
    setAmount(0); // 입력 필드 초기화
  };

  const handleDelete = () => {
    setAmount((prevAmount) => Math.floor(prevAmount / 10));
  };

  /* 모달창 */
  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    setAmount(0); // 입력 필드 초기화
  };

  const handleNumberButtonClick = (num: string | number) => {
    if (num === "00") {
      setAmount((prevAmount) => prevAmount * 100);
    } else {
      setAmount((prevAmount) => prevAmount * 10 + Number(num));
    }
  };

  return (
    <div className="myAccountBox">
      <div className="myAccount">{balance.toLocaleString()} 원</div>
      <div className="depositAndWithdrawalBox">
        <input
          type="button"
          value="충전"
          onClick={handleModalOpen}
          className="deposit"
        />
        <input
          type="button"
          value="출금"
          onClick={handleModalOpen}
          className="withdrawal"
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        contentLabel="Withdrawal Modal"
        style={modalStyles}
      >
        <div>
          <button onClick={handleModalClose}>X</button>
          <div>충전할 금액을 입력해주세요.</div>
        </div>
        <div className="inputMoney">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="currentMoney"
          />
        </div>
        <div className="numpadArea">
          <div className="number-buttons">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "00", 0].map((num) => (
              <button
                className="button"
                key={num}
                onClick={() => handleNumberButtonClick(num)}
              >
                {num}
              </button>
            ))}
            <button key="del" className="button" onClick={handleDelete}>
              backspace
            </button>
          </div>
          <div className="depositAndWithdrawalButtons">
            <button className="button" onClick={handleDeposit}>
              입금
            </button>
            <button className="button" onClick={handleWithdraw}>
              출금
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
