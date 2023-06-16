import React, { useEffect, useState } from "react";
// import stockContext from "../../src/views/js/stockContext";
// const [priceState, setPriceState] = useState<any[]>([])
import { AiFillRobot } from "react-icons/ai";
import "../../src/views/css/showTaxi";
const ShowTaxi = (): JSX.Element => {
  const [taxiData, setTaxiData] = useState<any>();
  const [defaultContainer, setDefaultContainer] = useState(false);
  useEffect(() => {
    fetch("/showTaxiData")
      .then((response) => response.json())
      .then((data) => {
        setTaxiData(data);
        console.log(data);
      })
      .catch((error) => {
        // 오류 처리
        console.error("정류장 데이터를 가져오는데 실패 :", error);
      });
  }, []);
  const seeMore = () => {
    setDefaultContainer(true);
  };
  return (
    <div id="showTaxiContainer" onClick={seeMore}>
      {taxiData ? (
        // 데이터가 존재하는 경우에만 접근
        taxiData.map((data: any, index: number) => (
          <div>
            <div>
              <div className="" key={index}></div>
              {/* 데이터 활용 */}
              <div className="commonFontSize">{data["stockAmount"]}</div>
              {/* 목표가 */}
            </div>
            <div id="stocks">{data["stocks"]}</div>
            {/* 택시 고유 번호 */}
            <div>{data["taxiId"]}</div>
            {/* 출발 희망가 */}
            <div id="purchasePrice">{data["purchasePrice"]}</div>
            {/* 구매량 */}

            <div className="commonFontSize" style={{ color: "#008000" }}>
              {data["targetPrice"]}
            </div>
            {/* 폭파 희망가 */}
            <div className="commonFontSize" style={{ color: "#C1121F" }}>
              {data["stopLossPrice"]}
            </div>
            {/* 동승자 모집 기간 */}
            <div className="commonFontSize">{data["recruitmentPeriod"]}</div>
            {/* 최대 인원 */}
            <div>
              {data["maxPerson"]}
              <AiFillRobot size={24} color="gray" />
              <AiFillRobot size={24} color="gray" />
              <AiFillRobot size={24} color="gray" />
              <AiFillRobot size={24} color="gray" />
              <AiFillRobot size={24} color="gray" />
            </div>
          </div>
        ))
      ) : (
        // 데이터가 없는 경우에 대한 처리
        <p>Loading...</p>
      )}
    </div>
  );
};
export default ShowTaxi;
