import React, { useEffect, useState } from "react";
const ShowTaxi = () : JSX.Element => {
const [taxiData, setTaxiData] = useState<any>(null);
useEffect(()=> {
  let taxiData;
  fetch('/showTaxiData')
  .then(response => response.json())
  .then(data => {
    setTaxiData(data[0]['taxiId'])
    // console.log(data)
  })
  .catch(error => {
    // 오류 처리
    console.error('정류장 데이터를 가져오는데 실패 :', error);
  });
},[])
  return <div>
    {taxiData}
  </div>
};
export default ShowTaxi;