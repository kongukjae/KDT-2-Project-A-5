import React, { useEffect, useState } from "react";
import StockDataComponent from "./stockDataComponent";
export default () => {
  const [showLayout, setShowLayout] = useState<JSX.Element[]>([]);

  const addTagToLayout = (tag: JSX.Element) => {
    setShowLayout((prevLayout: JSX.Element[]) => [...prevLayout, tag]);
  };

  // 컴포넌트를 널어 자료 화면을 띄운다.
  useEffect(() => {
    <StockDataComponent></StockDataComponent>
  }, []);

  return (
    <>
      <div className="contentBox">{showLayout}</div>
    </>
  );
};
