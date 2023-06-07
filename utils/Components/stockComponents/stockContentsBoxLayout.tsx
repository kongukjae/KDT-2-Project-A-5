import React, { useEffect, useState } from "react";
import StockDataComponent from "./stockDataComponent";
import StockThumbnail from "./stockThumbnail";
export default () => {
  const [showLayout, setShowLayout] = useState<JSX.Element[]>([]);

  const addTagToLayout = (tag: JSX.Element) => {
    setShowLayout((prevLayout: JSX.Element[]) => [...prevLayout, tag]);
  };

  // 컴포넌트를 널어 자료 화면을 띄운다.
  useEffect(() => {
    addTagToLayout(<StockThumbnail stockName="APPLE" stockPrice="179.58 USD" stockChartGraph="Graph" stockChangePercentage="-1.37%" />);
  }, []);

  return (
    <>
      <div className="contentBox">{showLayout}</div>
      <StockDataComponent></StockDataComponent>
    </>
  );
};
