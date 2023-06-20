import _ from "lodash";
import React, { useContext, useMemo, useState } from "react";
import stockContext from "../../src/views/js/stockContext";
interface DayRangeProps {
  stockSymbol: string;
  // data: number | any;
}

const DayRange = ({ stockSymbol }: DayRangeProps): JSX.Element | null => {

  return <div className="stockInfo">
    <div className="stockSymbol">{stockSymbol}</div>
    <div className="stockChangeRate">

      {/* {data.toFixed(2)} % */}
    </div>
  </div>



};

export default DayRange;
