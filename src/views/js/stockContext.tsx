import { createContext } from 'react';

interface StockContextType {
  symbol: string;
  price: string;
  meta: {
    information: string;
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

const StockContext = createContext<StockContextType | null>(null);

export default StockContext;
