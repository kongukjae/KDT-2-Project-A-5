import React, { useContext } from "react";
import '../../src/views/css/stockChart';
import stockContext from "../../src/views/js/stockContext";
// import DayRange from "./dayRange";
import _ from "lodash";
import { Line, LineChart, ResponsiveContainer, YAxis } from 'recharts';

let priceArray : any[] = [];
let priceArray2 : any[] = [];
let priceArray3 : any[] = [];
const allPrcieArray = [
  priceArray, priceArray2, priceArray3
];
// console.log("allPrcieArray", allPrcieArray)
const StockData = (): JSX.Element => {
  const socketStockData = useContext<any>(stockContext);
  // console.log(groupedData)
  // 주식 데이터를 담을 배열
  // 데이터가 null인 동안 로딩 상태를 표시
  if (socketStockData === null) {
    return <div>Loading...</div>;
  }
  // 회사별로 데이터 구분
  if(socketStockData) {
    const groupedData = _.groupBy(socketStockData, 'symbol')
    let aaplData : any= groupedData['AAPL'];
    console.log(aaplData, "aaplData")
    let tslaData = groupedData['TSLA'];
    let amznData = groupedData['AMZN'];
    priceArray.push(aaplData[0]['price'][1])
    priceArray2.push(tslaData[0]['price'][1])
    priceArray3.push(amznData[0]['price'][1])
    console.log("testArray",priceArray)
  }
  console.log("하이")
  
  
  const SimpleLineChart = (props:{
    _data : any[]
  }) => {
    return (
      <div>
        <div className="stockChart">
        <ResponsiveContainer width="100%" height={80}>
          <LineChart width={110} height={40} data={props._data}>
            <YAxis hide={true} domain={["auto", "auto"]} />
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="1. open"
              stroke="#E63946"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    
      </div>
    );
  };
  // const SimpleLineChart2 = () => {
  //   return (
  //     <div>
  //       <div className="stockChart">
  //       <ResponsiveContainer width="100%" height={80}>
  //         <LineChart width={110} height={40} data={priceArray2}>
  //           <YAxis hide={true} domain={["auto", "auto"]} />
  //           <Line
  //             isAnimationActive={false}
  //             type="monotone"
  //             dataKey="1. open"
  //             stroke="#E63946"
  //             dot={false}
  //           />
  //         </LineChart>
  //       </ResponsiveContainer>
  //     </div>
    
  //     </div>
  //   );
  // };
  return (
    <>
    {/* {test} */}
      {/* 배열에 데이터가 추가될 때만 차트가 렌더링 */}
      {allPrcieArray.map((element : any, index : number)=> {
        // console.log(element, "이거다이거다")
        return <SimpleLineChart key={index} _data={element}/>
      })}
      {/* <SimpleLineChart _data={priceArray}/> */}
      {/* {console.log(priceArray, "element")} */}
      {/* {console.log("하이")} */}
      {/* <SimpleLineChart2 /> */}
      {/* <DayRange /> */}
    </>
  );
};
export default StockData