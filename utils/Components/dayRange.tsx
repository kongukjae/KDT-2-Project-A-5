import React, { useContext } from "react";
import stockContext from "../../src/views/js/stockContext";

const DayRange = (): JSX.Element => {
  // const dumyData =
  const dayRangeContext = useContext<any>(stockContext);
  console.log("dayRangeContext : ", dayRangeContext);
  
  // const [dayRangeState, setDayRangeState] = useState<any>({
  //   symbol: "잠시만 기다려주세요",
  //   price: {
  //     "2023-06-07": { open: 0, high: 0, low: 0, close: 0 },
  //     "2023-06-06": { open: 0, high: 0, low: 0, close: 0 },
  //     "2023-06-05": { open: 0, high: 0, low: 0, close: 0 },
  //   },
  // });
//   // console.log(dayRangeContext?.price);
//   if(dayRangeContext) {
//   let priceArray : any = Object.entries(dayRangeContext?.price)
//   // console.log(test[1][1]['1. open']);
//   let increaseNum = 0;
//   let interval = setInterval(async()=> {
//     let lastPrice = await priceArray[increaseNum][1]['1. open'];
//     console.log(priceArray[increaseNum][0], "의 데이터", lastPrice);
//     increaseNum++;
//     console.log('이건 increaseNum' , increaseNum);

//     if(increaseNum >= priceArray.length) {
//       clearInterval(interval);
//     }
//   }, 24 * 60 * 60 * 1000)
// }
  return (
    <div>
      {dayRangeContext[0]}
    </div>
  );
};

export default DayRange;
