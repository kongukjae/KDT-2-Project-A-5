import React, { useState, useEffect } from "react";

import DriverThumbnail from "./driverThumbnail";
export default () => {
  const [showLayout, setShowLayout] = useState<JSX.Element[]>([]);

  const addTagToLayout = (tag: JSX.Element) => {
    setShowLayout((prevLayout: JSX.Element[]) => [...prevLayout, tag]);
  };

  // 컴포넌트를 널어 자료 화면을 띄운다.
  useEffect(() => {
    addTagToLayout(<DriverThumbnail driverName="버렌 워핏" driverNoAccidentCount="무사고 84일" driverGoodTag="방어운전" driverBadTag="급발진" />);
  }, []);

  return (
    <>
      <div className="contentBox">{showLayout}</div>
    </>
  );
};
