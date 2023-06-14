import React, { useContext, useState } from "react";
import stockContext from "../../src/views/js/stockContext";

const DayRange = (): JSX.Element => {
  // const dumyData =
  const [lastdata, setLastdata] = useState('');
  const dayRangeContext = useContext<any>(stockContext);
  console.log("dayRangeContext : ", dayRangeContext);
  if (dayRangeContext === null) {
    return <div>Loading...</div>; // 데이터가 null인 동안 로딩 상태를 표시
  }
  //! 전날 데이터 요청에 사용하기 위해 데이터 가공
  let dataIng = dayRangeContext[1][1]['1. open'];
  // 초기 값
  // parseInt() 함수를 사용하여 문자열을 정수로 변환
  const initialValue: any = lastdata;
  // 최종 값
  // parseFloat() 함수를 사용하여 문자열을 부동 소수점 숫자로 변환
  const finalValue = parseFloat(dataIng);

  // 증가율 계산
  const increasePercent = ((finalValue - initialValue) / initialValue) * 100;

  // 소수 둘째 자리까지 반올림
  const roundedIncreasePercent = Math.round(increasePercent * 100) / 100;
  
  let today = dayRangeContext[1][0];
  let dateOnly = today.split(' ')[0]
  let noHyphen = dateOnly.split('-')
  let formattedDate = noHyphen.join('')
  fetch(`/yesterDayDataRequest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // fetch 요청에 23230612과 같은식으로 보내야 함
    // split('-')
    body: JSON.stringify({ stockName: dayRangeContext[0], day: formattedDate }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("POST 요청이 실패했습니다.");
      }
    })
    .then((data) => {
      setLastdata(data[0]['open'])
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <div>
      {dayRangeContext[0]}
      <div> 현재 즐감률 {roundedIncreasePercent.toFixed(2)}</div>
    </div>

  );
};

export default DayRange;
