import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../src/views/css/login";
import picture1 from '../../src/views/img/img-13.png';

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
        <img src={picture1} width='80%' alt="이미지" />
      </div>
    </>
  );
}

export default introPage;
