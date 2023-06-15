import React from "react";
import "../../src/views/css/style";
import BankAccount from "./bankAccount";
import DriverLicense from "../../src/views/js/accountPage/driverLicense";

export default function Main() {
  return (
    <>
      <div className="main">
        <div>
          <h3>계좌</h3>
          <BankAccount />
        </div>
        <h3>내 운전면허증</h3>
        <DriverLicense />
        <h3>운행중인 차량</h3>
      </div>
    </>
  );
}
