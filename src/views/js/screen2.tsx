import React from "react";
import Header from "./header";
import Nav from "./nav";
import Main2 from "./main2";

export default function Screen2() {
  return (
    <>
      <div className="container">
        <Header headLiner={"홈"} />
        <Main2 />
        <Nav />
      </div>
    </>
  );
}
