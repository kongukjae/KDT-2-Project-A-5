import React from "react";
import "../../src/views/css/style";
import BankAccount from './bankAccount'

export default function Main() {
  return (
    <>
      <div className="main">
        <h3>계좌</h3>
        <BankAccount></BankAccount>
      </div>
    </>
  );
}
