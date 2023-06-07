import React, { useState } from "react";
import Station from "../../../../utils/Components/station";
import News from "../../../../utils/Components/newsApiParse";

const Screen: React.FC = () => {
  return (
    <>
      <Station />
      <News />
    </>
  );
};

export default Screen;
