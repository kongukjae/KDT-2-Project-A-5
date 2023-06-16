import React from "react";
import ShowTaxi from "./showTaxi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="mainInBox">
          <ShowTaxi />
          <div className="createTaxiButton">
            <Link to="/taxi">
              <AiOutlinePlusCircle size={40} color="#3B56D3" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
