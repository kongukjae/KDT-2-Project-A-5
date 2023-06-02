import React, { useState } from "react";
import Main from "../../../../utils/Components/main";


interface ScreenProps {
  title: string;
}

const ScreenTwo: React.FC = () => {
  const [title, setTitle] = useState("홈");

  const changeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  return (
    <>
      <Main />
    </>
  );
};

export default ScreenTwo;
