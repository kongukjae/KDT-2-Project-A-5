import React from "react";

interface ContentsBoxProps {
  stockName: string;
  stockPrice: string;
  stockChangePercentage: string;
  stockChartGraph: string;
}

export default function ContentBox(props: ContentsBoxProps) {
  const { stockName, stockPrice, stockChangePercentage, stockChartGraph } =
    props;

  return (
    <div className="stockContentsBox">
      <div className="stockName">{stockName}</div>
      <div className="stockPrice">{stockPrice}</div>
      <div className="stockChangePercentage">{stockChangePercentage}</div>
      <div className="stockChartGraph">{stockChartGraph}</div>
    </div>
  );
}
