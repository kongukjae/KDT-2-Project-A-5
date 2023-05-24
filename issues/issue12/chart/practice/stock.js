// import { key } from "./apikey.js";
// import axios from "axios";
let key = "7MOEQVMZPPVTW225";

const ctx = document.getElementById("myChart");
// const ctx = document.getElementById("myChart");

async function getStockInfo(symbol) {
  const apiKey = key;

  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`
    );
    const returnData = await response.json();
    console.log(returnData["Time Series (5min)"]);
    const fiveMinData = await returnData["Time Series (5min)"];
    const timeValue = Object.keys(fiveMinData);
    const timePoint = fiveMinData["2023-05-23 11:35:00"];
    const openValue = timePoint["1. open"];

    const timePointTwo = fiveMinData["2023-05-23 11:40:00"];
    console.log(timePointTwo);
    const openValueTwo = timePointTwo["1. open"];

    const timePointThree = fiveMinData["2023-05-23 11:45:00"];
    const openValueThree = timePointThree["1. open"];
    console.log(timePointThree);
    const timePointFour = fiveMinData["2023-05-23 11:50:00"];
    const openValueFour = timePointFour["1. open"];
    console.log(timePointFour);

    const timePointFive = fiveMinData["2023-05-23 11:55:00"];
    const openValueFive = timePointFive["1. open"];
    console.log(timePointFive);
    const timePointSix = fiveMinData["2023-05-23 12:00:00"];
    const openValueSix = timePointSix["1. open"];
    console.log(timePointSix);
    console.log(openValue);

    // const A = await response.json();
    // console.log(A["Time Series (5min)"]);
    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          timeValue[5],
          timeValue[4],
          timeValue[3],
          timeValue[2],
          timeValue[1],
          timeValue[0],
        ],
        datasets: [
          {
            label: "주가",
            data: [
              openValue,
              openValueTwo,
              openValueThree,
              openValueFour,
              openValueFive,
              openValueSix,
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
}

getStockInfo("AAPL");
console.log(key);
