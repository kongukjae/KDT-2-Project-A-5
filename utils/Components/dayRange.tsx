import React, { useContext } from "react";
import stockContext from "../../src/views/js/stockContext";

const DayRange = (): JSX.Element => {
  // const dumyData =
  const dayRangeContext = useContext<any>(stockContext);
  console.log("dayRangeContext : ", dayRangeContext);
  if (dayRangeContext === null) {
    return <div>Loading...</div>; // 데이터가 null인 동안 로딩 상태를 표시
  }
  //! 전날 데이터 요청에 사용하기 위해 데이터 가공
    let today = dayRangeContext[1][0];
  let dateOnly = today.split(' ')[0]
  let noHyphen = dateOnly.split('-')
  let formattedDate  = noHyphen.join('')
  fetch(`/yesterDayDataRequest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // fetch 요청에 23230612과 같은식으로 보내야 함
    // split('-')
    body: JSON.stringify({formattedDate}),
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
  return (
    <div>
      {dayRangeContext[0]}
    </div>
  );
};

export default DayRange;
