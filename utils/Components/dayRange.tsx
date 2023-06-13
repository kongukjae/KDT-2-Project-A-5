import React, { useContext, useEffect, useState } from "react";
import stockContext, {
  stockContextType
} from "../../src/views/js/stockContext";
const DayRange = (): JSX.Element => {
  const dayRangeContext = useContext<stockContextType | null>(stockContext);
  // console.log(dayRangeContext)
  const [dayRange, setDayRange] = useState<any>({
    symbol: "잠시만 기다려주세요",
    price: {
      "2023-06-07": { open: 0, high: 0, low: 0, close: 0 },
      "2023-06-06": { open: 0, high: 0, low: 0, close: 0 },
      "2023-06-05": { open: 0, high: 0, low: 0, close: 0 },
    },
  });
  const [test, setTest] = useState<any[]>([]);

  useEffect(() => {
    // 컨텍스트 데이터를 모두 가져와서 시간별 객체 데이터를 배열에 담아줌
    if (dayRangeContext) {
      setDayRange(dayRangeContext);
      const priceArray: any[] = Object.entries(dayRangeContext?.price).map(
        ([date, price]) => {
          return { date, ...price };
        }
      );
      let intervalNumber = 0;
      let interval = setInterval(() => {
        let lastPrice = priceArray[intervalNumber];
        setTest((prevTest) => [...prevTest, lastPrice]);
        intervalNumber++;
        // 배열 길이 넘어가면 interval 중지
        if (intervalNumber >= priceArray.length) {
          clearInterval(interval);
        }
      }, 5000);
    }
    console.log(test);
  }, [dayRangeContext]);

  return (<div>
    {/* {dayRange} */}
  </div>)
}
  // const [test, setTest] = useState<any[]>([]);
export default DayRange;