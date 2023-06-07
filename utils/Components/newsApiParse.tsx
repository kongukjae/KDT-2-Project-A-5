import React from "react";
import axios from "axios";
import dotenv from "dotenv";
import news from "../../utils/naverNewsApi/newsApi";
dotenv.config({ path: "../../.env" });

const A = () => {
  return <>{news}</>;
};

export default A;
