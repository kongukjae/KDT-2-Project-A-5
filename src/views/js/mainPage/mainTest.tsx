import React, { useState } from "react";
import Header from "../bankAccout/header";
import Nav from "../nav";
import Main from "./main";


const ScreenTwo: React.FC = () => {
  const [title, setTitle] = useState("홈");

  const changeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  return (
    <div className="container">
      <Header title={title} />
      <Main />
      <Nav changeTitle={changeTitle} />
    </div>
  );
};