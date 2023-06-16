import React from "react";
import ShowTaxi from "./showTaxi";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="mainInBox">
          <ShowTaxi />
          <Link to="/taxi">
            <div className="createTaxiButton">
              <AiFillPlusCircle />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
