import "@dotlottie/player-component";
import _ from "lodash";
import React, { useContext, useState } from "react";
import { Line, LineChart, ResponsiveContainer, YAxis } from "recharts";
import styles from "../../src/views/css/loading.module.css";
import "../../src/views/css/stockArea.css";
import "../../src/views/css/stockChart";
import stockContext from "../../src/views/js/stockContext";
import DayRange from "./dayRange";
import TestData from "./rateData";


let priceArray: any[] = [];
let priceArray2: any[] = [];
let priceArray3: any[] = [];
const allPrcieArray = [priceArray, priceArray2, priceArray3];

const StockData = (): JSX.Element => {
  const [lastdata, setLastdata] = useState("");

  const socketStockData = useContext<any>(stockContext);

  if (socketStockData === null) {
    return (
      <div className={styles.loading}>
        <dotlottie-player
          src="../../src/models/loading.lottie"
          autoplay
          loop
          style={{ width: "50%", height: "100%" }}
        />
      </div>
    );
  }

  if (socketStockData) {
    const groupedData = _.groupBy(socketStockData, "symbol");
    let aaplData: any = groupedData["AAPL"];
    let tslaData = groupedData["TSLA"];
    let amznData = groupedData["AMZN"];
    if (aaplData && aaplData.length > 0 && aaplData[0] && aaplData[0]["price"]) {
      priceArray.push(aaplData[0]["price"][1]);
      console.log("priceArray", priceArray);
    }
    
    if (tslaData && tslaData.length > 0 && tslaData[0] && tslaData[0]["price"]) {
      priceArray2.push(tslaData[0]["price"][1]);
      console.log("priceArray", priceArray2);
    }
    
    if (amznData && amznData.length > 0 && amznData[0] && amznData[0]["price"]) {
      priceArray3.push(amznData[0]["price"][1]);
      console.log("priceArray", priceArray3);
    }
 
  }

  const SimpleLineChart = (props: { _data: any[] }) => {
    return (
      <div>
        <div className="stockChart">
          <ResponsiveContainer width="100%" height={80}>
            <LineChart width={110} height={40} data={props._data}>
              <YAxis hide={true} domain={["auto", "auto"]} />
              <Line
                isAnimationActive={false}
                type="monotone"
                dataKey="1. open"
                stroke="#E63946"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  return (
    <>
      {allPrcieArray.map((element: any, index: number) => {
        const stockSymbol = index === 0 ? "AAPL" : index === 1 ? "TSLA" : "AMZN";
        return (
          <div className="stockContentsBox" key={index}>
            <SimpleLineChart _data={element} />
            <DayRange stockSymbol={stockSymbol} />
            <TestData  stockSymbol={stockSymbol}/>
          </div>
        );
      })}
    </>
  );
};

export default StockData;
