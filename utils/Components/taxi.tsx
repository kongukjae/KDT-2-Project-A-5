import React, { useEffect, useState } from "react";
import CompanyList from "./corpAutoComplete";
import { Link } from "react-router-dom";

const corpAutoComp = () => {
  const [autoComp, setAuto] = useState([]);

  // useEffect(() => {
  //   CompanyList

  // }, []);

  return (
    <div className="main">
      <input type="text" placeholder="회사명"></input>
      <Link to={"/CompanyList"}>
        <input type="submit" value={"검색"}></input>
      </Link>
    </div>
  );
};

export default corpAutoComp;
