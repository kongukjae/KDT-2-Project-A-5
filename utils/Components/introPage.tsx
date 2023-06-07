import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginStyle from "../../src/views/css/login.module.css";
// import StockTogetherLogo from '../src/views/img/stock_together_logo';

type LoadingProps = {};

function introPage(props: LoadingProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/first");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={loginStyle.main}>
        <img src={"img/stock_together_logo.png"} width="80%" alt="이미지" />
      </div>
    </>
  );
}

export default introPage;
