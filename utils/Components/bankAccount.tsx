import React, { useState } from 'react';
import { Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Deposit from './deposit'

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
        <p className='myAccount'>계좌 잔액: {addCommasToNumber(balance)}</p>
        
        <Link to="/deposit">
        <button>입금</button>
      </Link>
        {/* 추가적인 버튼 또는 로직을 여기에 추가할 수 있습니다 */}
    </div>

  );
}
