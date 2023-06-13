import React, { useContext, useEffect, useState } from "react";
import stockContext, {
  stockContextType
} from "../../src/views/js/stockContext";

const HistoricalData = (): JSX.Element => {
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
  if (dayRangeContext) {

    let dayList: string[] = [];
    //  console.log(testdata['Time Series (5min)']);
    for (const key in dayRangeContext?.price) {
      dayList.push(key)
    }

    const dayTime = dayList.length - 1;
    const day = dayList[dayTime].split(' ', 2)[0];
    day.split('-');
    day.split('-').join();
    // 시간이랑 날짜를 구별해 주는 데이터
    // console.log('dayList', day.split('-').join(''));
    // console.log('dadat', Object.values(dayRangeContext?.price[dayList[dayTime]]));
    // let testResult: string = '';

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
        console.log(data); // 서버의 응답을 출력하거나 원하는 작업을 수행합니다.
        return data;
        if (data === true) {
          console.log('data =', data); // 서버의 응답을 출력하거나 원하는 작업을 
        } else {
          alert('로그인 실패');
        }
      })
      .catch((error) => {
        console.error(error);
      });

  }


  return <div></div>

}

export default HistoricalData;