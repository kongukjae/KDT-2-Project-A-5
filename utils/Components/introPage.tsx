import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../src/views/css/login";
// import StockTogetherLogo from '../src/views/img/stock_together_logo';

type LoadingProps = {};

function introPage (props: LoadingProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        <img src={"img/stock_together_logo.png"} width='80%' alt="이미지" />
      </div>
    </>
  );
}

export default introPage;
