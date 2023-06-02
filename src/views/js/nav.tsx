import React from "react";
import { BsHouse } from "react-icons/Bs";
import { BiCar } from "react-icons/Bi";
import { SlWallet } from "react-icons/Sl/";

interface NavProps {
  changeTitle: (newTitle: string) => void;
}

const Nav: React.FC<NavProps> = ({ changeTitle }) => {
  const handleHomeClick = () => {
    changeTitle("홈");
  };

  const handleBusStopClick = () => {
    changeTitle("정류장");
  };

  const handleBackAccountClick = () => {
    changeTitle("계좌")
  }

  return (
    <div className="navigation">
      <BsHouse size={40} color="white" onClick={handleHomeClick} />
      <BiCar size={40} color="white" onClick={handleBusStopClick} />
      <SlWallet size={40} color="white" onClick={handleBackAccountClick}/>
    </div>
  );
};

export default Nav;
