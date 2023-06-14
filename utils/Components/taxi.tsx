import React, { useEffect, useState } from "react";
import StockSearch from "./stockSearch";
import { Link } from "react-router-dom";

const corpAutoComp = () => {
  return (
    <div className="main">
      <input type="text" placeholder="회사명"></input>
      <Link to={"/stockSearch"}>
        <input type="submit" value={"검색"}></input>
      </Link>
    </div>
  );
};

export default corpAutoComp;
