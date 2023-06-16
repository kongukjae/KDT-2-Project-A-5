import React from "react";
import "../../src/views/css/style";
import BankAccount from "./bankAccount";
import DrivingCar from "./drivingCar";
import DriverLicense from "../../src/views/js/accountPage/driverLicense";

export default function Main() {
  return (
    <>
      <div className="main">
        <div>
          <h2>계좌</h2>
          <BankAccount />
        </div>
        <div>
          <h3>내 운전면허증</h3>
          <DriverLicense />
        </div>
        <div>
          <h3>운행중인 차량</h3>
          <DrivingCar />
        </div>
      </div>
    </>
  );
}
