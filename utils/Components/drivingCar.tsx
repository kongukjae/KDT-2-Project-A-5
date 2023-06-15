import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "./cookie";

const DrivingCar: React.FC = () => {
  const cookieValue = getCookie("userName");
  fetch("/drivingCar", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cookieValue),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("post 요청이 실패했습니다.");
      }
    })
    .then((data) => {})
    .catch((error) => {
      console.error(error);
    });

  return <></>;
};

export default DrivingCar;
