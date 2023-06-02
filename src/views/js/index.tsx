import React from "react";

import { BrowserRouter } from "react-router-dom"
import { createRoot, Root } from "react-dom/client";
import App from "./App";
import "../css/style";
import "../css/contentsBox";
// ReactDOM.render(<App />, document.getElementById("root"));

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
