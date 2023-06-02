import React from "react";
// import Screen from "./screen";
import Header from "../../../utils/Components/header"
import Screen from "./mainPage/mainScreen";
import Nav from "../../../utils/Components/nav"
// import { Routes, Route } from "react-router-dom";

export default () => {
  return (
    <>
      <Header title={"호옴"}/>
      <Screen />
      <Nav />
    </>
  );
};
