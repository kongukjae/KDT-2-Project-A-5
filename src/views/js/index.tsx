import React from "react";

import { BrowserRouter } from "react-router-dom";
import { createRoot, Root } from "react-dom/client";
import App from "./App";
import style from "../css/style.module.css"
// import "../css/contentsBox";
// ReactDOM.render(<App />, document.getElementById("root"));

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <div className={style.root}>
      <App />
    </div>
  </BrowserRouter>
);
