import React, { useContext, useMemo } from "react";
import stockContext, {
  stockContextType
} from "../../src/views/js/stockContext";

const DayRange = () : JSX.Element => {
  const dayRangeContext = useContext<stockContextType | null>(stockContext);
  console.log(dayRangeContext);
  useMemo(()=> {
    if(dayRangeContext) {
      const priceArray : any[] = Object.entries(dayRangeContext?price).map(
        ([date, price]) => {
  
        }
      )
    }
  }, [dayRangeContext])
  
  return (<div>
    </div>)
}
export default DayRange;