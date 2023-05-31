import React from "react";
import { render } from "react-dom";

import Header from "./header.js";
import Main from "./main.js";

render(
  <article>
    <Header />
    <div className="main">
      <Main />
    </div>
  </article>,
  document.getElementById("root")
);
