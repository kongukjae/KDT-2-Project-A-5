import React, { useEffect } from "react";
const ShowTaxi = () : JSX.Element => {
useEffect(()=> {
  fetch('/showTaxiData',{
    method : 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    // 오류 처리
    console.error('정류장 데이터를 가져오는데 실패 :', error);
  });
},[])
  return <>테스트</>
};
export default ShowTaxi;