import React from "react";

interface ContentsBoxProps {
  stockName: string;
  stockPrice: string;
  stockChangePercentage: string;
  stockChartGraph: string;
}

export default function StoockThumbnail({
  stockName,
  stockPrice,
  stockChangePercentage,
  stockChartGraph,
}: ContentsBoxProps) {
  return (
    <div className="ContentsBox">
      <div className="StockName">{stockName}</div>
      <div className="stockPrice">{stockPrice}</div>
      <div className="stockChangePercentage">{stockChangePercentage}</div>
      <div className="stockChartGraph">{stockChartGraph}</div>
    </div>
  );
}
