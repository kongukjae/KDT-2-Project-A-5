import React from "react";
import { BsHouse } from "react-icons/Bs";
import { BiCar } from "react-icons/Bi";
import { SlWallet } from "react-icons/Sl/";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="navigation">
        <Link to="/">
          <BsHouse size={40} color="white" />
        </Link>

        <Link to="/2">
          <BiCar size={40} color="white" />
        </Link>

        <Link to="/">
          <SlWallet size={40} color="white" />
        </Link>
      </div>
    </>
  );
}
