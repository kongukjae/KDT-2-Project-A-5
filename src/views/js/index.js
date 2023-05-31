import React from "react";
import { render } from "react-dom";

import Header from "./header.js";
import Main from "./main.js";

render(
  <article>
    <Header />
    <div className="main">
      <Main style={{ color: "red" }} />
    </div>
  </article>,
  document.getElementById("root")
);
