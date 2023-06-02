import React from "react";
// import Screen from "./screen";
import Header from "../../../utils/Components/header";
import MainScreen from "./mainPage/mainScreen";
import Nav from "../../../utils/Components/nav";
// import { Routes, Route } from "react-router-dom";

export default () => {
  return (
    <>
      <div className="container">
        <Header title={"홈"} />
        <MainScreen />
        <Nav />
      </div>
    </>
  );
};
