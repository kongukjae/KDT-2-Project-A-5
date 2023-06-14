import React, { useContext, useEffect, useState } from "react";
import stockContext, {
  stockContextType
} from "../../src/views/js/stockContext";

const HistoricalData = (): JSX.Element => {
  const dayRangeContext = useContext<stockContextType | null>(stockContext);

  // const [test , setTest] = useState("테스트")

  let dayList: string[] = [];
  //  console.log(testdata['Time Series (5min)']);
  for (const key in dayRangeContext?.price) {
    dayList.push(key)
  }

  const dayTime = dayList.length - 1;
  const day = dayList[dayTime].split(' ', 2)[0];
  day.split('-');
  day.split('-').join()
  // 시간이랑 날짜를 구별해 주는 데이터
  // console.log('dayList', day.split('-').join(''));
  // console.log('dadat', Object.values(dayRangeContext?.price[dayList[dayTime]]));
  // let testResult: string = '';
  let serverDate = "";
  fetch(`/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ day: day.split('-').join('') }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("POST 요청이 실패했습니다.");
      }
    })
    .then((data) => {

      console.log('data =', data);
   

    })
    .catch((error) => {
      console.error(error);
    });




  return <>
 
  </>

}

export default HistoricalData;