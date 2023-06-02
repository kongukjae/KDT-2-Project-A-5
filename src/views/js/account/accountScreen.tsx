import React, { useState } from "react";
import Main from "../../../../utils/Components/main";

interface ScreenProps {
  title: string;
}

const Screen: React.FC = () => {
  const [title, setTitle] = useState("계좌");

  const changeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  return (
    <>
      <Main />
    </>
  );
};

export default Screen;
