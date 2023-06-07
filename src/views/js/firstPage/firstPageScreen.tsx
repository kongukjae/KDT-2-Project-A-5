import React from "react";
import FirstPage from '../../../../utils/Components/firstPage';
import StockDataComponent from "../../../../utils/Components/stockComponents/stockDataComponent";

const Screen: React.FC = () => {
  return (
    <>
      <FirstPage/>
      <StockDataComponent></StockDataComponent>
    </>
  );
};

export default Screen;
