import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"
import App from "./App"

// ReactDOM.render(
  // <article>
    {/* <Header /> */}
    {/* <div className="main"> */}
      {/* <Main style={{ color: "red" }} /> */}
    {/* </div> */}
  {/* </article>, */}
  // document.getElementById("root")
// );

const root = createRoot(document.getElementById("root"));
// const root = document.getElementById("root");
root.render(<App />);