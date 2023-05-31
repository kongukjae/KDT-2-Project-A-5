import React from "react";
import { render } from "react-dom";

import header from "./header.js";
import main from "./main.js";

render(
  <article>
    <Header />
    <div className="main">
      <Main />
    </div>
  </article>,
  document.getElementById("root")
);
