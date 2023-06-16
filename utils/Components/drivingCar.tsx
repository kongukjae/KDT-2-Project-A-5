import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "./cookie";

const DrivingCar: React.FC = () => {
  const cookieValue = getCookie("userName");
  const data = {
    userName: cookieValue,
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
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  return <div className="grayColorBox"></div>;
};

export default DrivingCar;
