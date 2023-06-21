import React, { useEffect, useState } from "react";
import { AiFillRobot } from "react-icons/ai";
import "../../src/views/css/showTaxi";
import "@dotlottie/player-component";
import styles from "../../src/views/css/loading.module.css";

import StockContentsBox from "./stockContentsBox";
const ShowTaxi = (): JSX.Element => {
  const [taxiData, setTaxiData] = useState<any[]>([]);
  // const [defaultContainer, setDefaultContainer] = useState(false)
  const [showChart, setShowChart] = useState(
    Array(taxiData.length).fill(false)
  );
  useEffect(() => {
    fetch("/showTaxiData")
      .then((response) => response.json())
      .then((data) => {
        setTaxiData(data);
      })
      .catch((error) => {
        // 오류 처리
        console.error("정류장 데이터를 가져오는데 실패 :", error);
      });
  }, []);
  const seeMore = (index: any) => {
    setShowChart((prevState) => {
      const updateState = [...prevState];
      updateState[index] = !updateState[index];
      return updateState;
    });
  };
  const refreshData = () => {
    fetch("/showTaxiData")
      .then((response) => response.json())
      .then((data) => {
        setTaxiData(data);
        console.log(data);
      });
  };
  return (
    <div className="showTaxiStation" onClick={seeMore}>
      {taxiData ? (
        // 데이터가 존재하는 경우에만 접근
        taxiData.map((data: any, index: number) => (
          <div
            key={index}
            onClick={() => {
              seeMore(index);
            }}
          >
            <div>
              <div className="grayColorBox" key={index}></div>
              {/* 데이터 활용 */}
              <div className="commonFontSize">
                구매 수량 : {data["stockAmount"]}
              </div>
              {/* 목표가 */}
            </div>
            <div id="stocks">종목명 : {data["stocks"]}</div>
            {/* 택시 고유 번호 */}
            <div>택시 번호 : {data["taxiId"]}</div>
            {/* 출발 희망가 */}
            <div id="purchasePrice">구매희망가 : {data["purchasePrice"]}</div>
            {/* 클릭 했을 때만 차트 랜더링 */}
            {showChart[index] && (
              <div>
                <StockContentsBox />
              </div>
            )}
            {/* 구매량 */}

            <div className="commonFontSize" style={{ color: "#008000" }}>
              목표가 : {data["targetPrice"]}
            </div>
            {/* 폭파 희망가 */}
            <div className="commonFontSize" style={{ color: "#C1f1F" }}>
              손절가 : {data["stopLossPrice"]}
            </div>
            {/* 동승자 모집 기간 */}
            <div className="commonFontSize">
              모집 기간 : {data["recruitmentPeriod"]}
            </div>
            {/* 최대 인원 */}
            <div>
              최대 인원 : {data["maxPerson"]}
              <br />
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
        <div className={styles.loading}>
          <dotlottie-player
            src="../../src/models/loading.lottie"
            autoplay
            loop
            style={{ width: "50%", height: "100%" }}
          />
        </div>
      )}
      <div>
        <button onClick={refreshData}>새로고침</button>
      </div>
    </div>
  );
};
export default ShowTaxi;
