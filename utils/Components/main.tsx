import React from "react";
import { useNavigate } from "react-router-dom";
import "../../src/views/css/newsData";
import "../../src/views/css/style";
import { getCookie } from "./cookie";
import DriverContentBox from "./driverContentsBox";
import StockContentsBox from "./stockContentsBox";

// ? CSS
import "../../src/views/css/Area";

// ? 샘플 데이터
// 쿠키 가져오기
// ! 컨텐츠 박스
import NewsContentsBox from "./newsApiParse";

export default function Main() {
  const navigate = useNavigate();
  const cookieValue = getCookie("userName");
  const backToTheLogin = () => {
    navigate("/login");
  };
  // ? StockContentsBox 컴포넌트가 두번 호출되어 주식 데이터가 두번씩 전송되는 오류가 있습니다. 
  if (cookieValue) {
    return (
      <div className="main">
        <div className="mainInBox">
          <h3>국내 증시</h3>
          <div className="stockArea">
            <StockContentsBox />
          </div>
          <h3>내가 자주 본 종목</h3>
          <div className="myStockArea">
            {/* <StockContentsBox /> */}
          </div>
          <h3>모범 운전수</h3>
          <div className="driverArea">
            <DriverContentBox />
          </div>
          <h3>뉴스</h3>
          <div className="newsArea">
            <NewsContentsBox />
          </div>
        </div>
      </div>
    );
  } else {
    // 쿠키가 없을 경우
    return (
      <>
        <div className="main">
          <h3>권한이 없습니다. 로그인이 필요합니다.</h3>
          <button onClick={backToTheLogin}>로그인 하러 가기</button>
        </div>
      </>
    );
  }
}
