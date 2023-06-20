import React, { useContext, useState } from "react";
import stockContext from "../../src/views/js/stockContext";

const DayRange = (): JSX.Element => {
  const [lastdata, setLastdata] = useState("");
  const dayRangeContext = useContext<any>(stockContext);
  if (dayRangeContext === null) {
    return <div>Loading...</div>; // 데이터가 null인 동안 로딩 상태를 표시
  }

  return (
    <div className="stockInfo">
      {/* <div className="stockSymbol">{aaplData[0].symbol}</div> */}
      <div className="stockChangeRate">
        {/* {roundedIncreasePercent.toFixed(2)} % */}
      </div>
    </div>
  );
};

export default DayRange;
