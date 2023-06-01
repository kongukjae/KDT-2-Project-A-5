import React from "react";
import Header from "./header";
import Nav from "./nav";
import Main from "./main";

export default function Screen2() {
  return (
    <>
      <div className="container">
        <Header headLiner={"홈"} />
        <Main />
        <Nav />
        <div>sad</div>

      </div>
    </>
  );
}
