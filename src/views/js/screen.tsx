import React from "react";
import Header from "./header";
import Nav from "./nav";
import Main from "./main";

export default function Screen() {
  return (
    <>
      <div className="container">
        <Header/>
        <Main />
        <Nav />
      </div>
    </>
  );
}
