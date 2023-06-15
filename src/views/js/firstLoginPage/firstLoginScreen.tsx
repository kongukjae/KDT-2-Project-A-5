import React from "react";
import FirstLogin from "../../../../utils/Components/firstLogin";
import firstAnimation from "../../../models/firstAnimation.json";

const Screen: React.FC = () => {
  return (
    <>
      <FirstLogin animationData={firstAnimation} />
    </>
  );
};

export default Screen;
