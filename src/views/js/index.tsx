import React from "react";
// import ReactDOM from "react-dom";
import { createRoot, Root } from "react-dom/client";
import App from "./App";
import "../css/style.css";

// ReactDOM.render(<App />, document.getElementById("root"));

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
