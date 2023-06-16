import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "./cookie";
import { AiFillRobot } from "react-icons/ai";
import "../../src/views/css/showTaxi";

const DrivingCar: React.FC = () => {
  const [taxiData, setTaxiData] = useState<any>();
  const [defaultContainer, setDefaultContainer] = useState(false);
  const cookieValue = getCookie("userName");

  const data = {
    userName: decodeURIComponent(cookieValue),
  };
  fetch("/drivingCar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("POST 요청이 실패했습니다.");
      }
    })
    .then((data) => {
      setTaxiData(data);
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  const seeMore = () => {
    setDefaultContainer(true);
  };
  return (
    <div id="showTaxiContainer" onClick={seeMore}>
      {taxiData ? (
        // 데이터가 존재하는 경우에만 접근
        taxiData.map((data: any, index: number) => (
          <div key={index}>
            {/* 데이터 활용 */}
            <div id="stocks">{data["stocks"]}</div>
            {/* 택시 고유 번호 */}
            <div>{data["taxiId"]}</div>
            {/* 출발 희망가 */}
            <div id="purchasePrice">{data["purchasePrice"]}</div>
            {/* 구매량 */}
            <div className="commonFontSize">{data["stockAmount"]}</div>
            {/* 목표가 */}
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

export default DrivingCar;
