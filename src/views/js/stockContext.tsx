import { createContext } from 'react';

interface stockContextType  {
  "Meta Data": "MetaData";
  "Time Series (Daily)": "TimeSeriesDaily";
}
const stockContext = createContext<any>(null);

export default stockContext;
export type { stockContextType }; // 추가

