import React from "react";
import { BsHouse } from "react-icons/Bs";
import { BiCar } from "react-icons/Bi";
import { SlWallet } from "react-icons/Sl/";
export default function Nav() {

  const handleClick = () => {
    console.log('아이콘 눌림')
  }


  return (
    <>
      <div className="navigation">
        <BsHouse size={40} color="white" onClick={handleClick}/>
        <BiCar size={40} color="white" />
        <SlWallet size={40} color="white" />
      </div>
    </>
  );
}
