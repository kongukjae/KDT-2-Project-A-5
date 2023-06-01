import React from "react";
import { BsHouse } from "react-icons/Bs";
import { BiCar } from "react-icons/Bi";
import { SlWallet } from "react-icons/Sl/";
export default function Nav() {
  return (
    <>
      <div className="navigation">
        <BsHouse size={40} color="white" />
        <BiCar size={40} color="white" />
        <SlWallet size={40} color="white" />
      </div>
    </>
  );
}
