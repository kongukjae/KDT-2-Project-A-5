import React, { useState } from "react";
import Station from "../../../../utils/Components/station";

const Screen: React.FC = () => {
  const [news, setNews] = useState(null);
  (async () => {
    const request = await axios.get("/news");
    console.log(await request.data.items);
  })();
  return (
    <>
      <Station />
    </>
  );
};

export default Screen;
