import React from "react";
import { BsHouse } from "react-icons/Bs";
import { BiCar } from "react-icons/Bi";
import { SlWallet } from "react-icons/Sl/";
// import { Link } from "react-router-dom";

// interface NavProps {
//   changeTitle: (newTitle: string) => void;
// }

// const Nav: React.FC<NavProps> = ({ changeTitle }) => {
//   const handleHomeClick = () => {
//     changeTitle("홈");
//   };

//   const handleBusStopClick = () => {
//     changeTitle("정류장");
//   };

//   const handleBackAccountClick = () => {
//     changeTitle("계좌");
//   };

export default function navigation() {
  return (
    <div className="navigation">
      {/* <Link to="/home"> */}
        <BsHouse size={40} color="white"/>
      {/* </Link> */}
      {/* <Link to="/station"> */}
        <BiCar size={40} color="white"/>
      {/* </Link> */}
      {/* <Link to="/account"> */}
        <SlWallet size={40} color="white"/>
      {/* </Link> */}
    </div>
  );
} 


