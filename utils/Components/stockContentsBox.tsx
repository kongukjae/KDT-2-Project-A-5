import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import stockContext, { stockContextType } from "../../src/views/js/stockContext";
import dbConnect from "../DB/dbConfigure";
const StockData = (): JSX.Element => {
  let stocktest = useContext<stockContextType | null>(stockContext);
  console.log("useContext : ", stocktest);
  // 최초에 값 받아올 때 에러를 피하기 위해 더미데이터
  const [contextData, setContextData] = useState<any>({
    symbol: '잠시만 기다려주세요',
    price: {
      '2023-06-07': { open: 0, high: 0, low: 0, close: 0 },
      '2023-06-06': { open: 0, high: 0, low: 0, close: 0 },
      '2023-06-05': { open: 0, high: 0, low: 0, close: 0 },
    },
  });
  // 회사 데이터
  useEffect(() => {
    if (stocktest) {
      setContextData(stocktest);
    }
    // 테스트 하기 위해 랜더링 될 때마다 재실행
  }, [stocktest]);

  let [test, setTest] = useState<string[]>([]);
  //주가 데이터
  useEffect(() => {
    if (stocktest) {
      setContextData(stocktest);
      // 주식 데이터(객체) -> 배열로 변환
      const priceArray: any = Object.entries(stocktest?.price).map(([date, price]) => {
        return { date, ...price };
      });
      console.log("컨텍스트의 주가 데이터 = 배열로 변환한 것 : ", priceArray);
      // 3초마다 test[]에 주식 데이터 push 하는 로직
      let intervalNumber = 0;
      let interval = setInterval(() => {
        // n++번째 배열의 'open'데이터를 push 해줌
        let lastPrcie = priceArray[intervalNumber]['1. open'];
        test.push(lastPrcie);
        console.log(test);
        intervalNumber++;
        // 배열 길이보다 길어지면 interval 함수 중지
        if (intervalNumber >= priceArray.length) {
          clearInterval(interval);
          console.log("interval 함수를 종료합니다");
        };
      }, 3000);
    }
  }, [stocktest]);



  // 예준 증가률 구하는 로직 작성 해보기
  useEffect(() => {
    if (stocktest) {
      setContextData(stocktest);
      // 주식 데이터(객체) -> 배열로 변환
      const priceArray: any = Object.entries(stocktest?.price).map(([date, price]) => {
        return { date, ...price };
      });

      let dayList: string[] = [];
      //  console.log(testdata['Time Series (5min)']);
      for (const key in stocktest?.price) {
        dayList.push(key)
      }

      const dayTime = dayList.length - 1;
      const day = dayList[dayTime].split(' ', 2)[0];
      day.split('-');
      day.split('-').join();
      // 시간이랑 날짜를 구별해 주는 데이터
      console.log('dayList', day.split('-').join(''));
      console.log('dadat', Object.values(stocktest?.price[dayList[dayTime]]));
      let testResult: string = '';
      fetch(`/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(day.split('-').join('')),
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
          if(data === true){
            console.log('data =', data); // 서버의 응답을 출력하거나 원하는 작업을 
          }
          else{
            alert('로그인 실패')
          }
        })
        .catch((error) => {
          console.error(error);
        });

  
      let intervalNumber = 0;
      let interval = setInterval(() => {
        // n++번째 배열의 'open'데이터를 push 해줌
        let lastPrcie = priceArray[intervalNumber]['1. open'];
        console.log('lastPrcie입니다', lastPrcie);
        intervalNumber++;
        // 배열 길이보다 길어지면 interval 함수 중지
        if (intervalNumber >= priceArray.length) {
          clearInterval(interval);
          console.log("interval 함수를 종료합니다");
        };
      }, 3000);
    }
  }, [stocktest]);




  return (
    <>
      <div>
        {contextData?.symbol}

      </div>
    </>
  );
};

export default StockData;
