import React, { useContext, useState } from "react";
import stockContext, {
  stockContextType
} from "../../src/views/js/stockContext";
const DayRange = (): JSX.Element => {
  const dayRangeContext = useContext<stockContextType | null>(stockContext);
  console.log(dayRangeContext)
  const [contextData, setContextData] = useState<any>({
    symbol: "잠시만 기다려주세요",
    price: {
      "2023-06-07": { open: 0, high: 0, low: 0, close: 0 },
      "2023-06-06": { open: 0, high: 0, low: 0, close: 0 },
      "2023-06-05": { open: 0, high: 0, low: 0, close: 0 },
    },
  });
  return (<div></div>)
}
  // const [test, setTest] = useState<any[]>([]);
export default DayRange;