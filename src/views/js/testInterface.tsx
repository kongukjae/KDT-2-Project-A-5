import { createContext } from 'react';
interface testContextType {
  metaData: {
    information: string;
    symbol: string;
    lastRefreshed: string;
    outputSize: string;
    timeZone: string;
  };
  timeSeries: {
    [date: string]: {
      open: string;
      high: string;
      low: string;
      close: string;
      adjustedClose: string;
      volume: string;
      dividendAmount: string;
      splitCoefficient: string;
    };
  };
}
const stockContext = createContext<testContextType | null>(null)
// export default stockContext;
export type { testContextType };
