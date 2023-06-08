import React, { useState } from 'react';
import "../../src/views/css/style";

function addCommasToNumber(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function Account() {
  const [balance, setBalance] = useState(0);

  // 계좌에 숫자가 올라갈 때마다 호출되는 함수
  const handleDeposit = (amount: number) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
  };

  return (
    <div>
      <p>계좌 잔액: {addCommasToNumber(balance)}</p>
      <button onClick={() => handleDeposit(1000)}>1000 추가</button>
      {/* 추가적인 버튼 또는 로직을 여기에 추가할 수 있습니다 */}
    </div>
  );
}
