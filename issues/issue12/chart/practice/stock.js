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
    // const A = await response.json();
    // console.log(A['Time Series (5min)']);
  } catch (error) {
    console.error(error);
  }
}
// new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

getStockInfo("AAPL");
console.log(key);
