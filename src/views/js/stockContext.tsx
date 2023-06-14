import { createContext } from 'react';
// 최초 컨텍스트에 더미 데이터 넣음
const stockContext = createContext<any>([
  'IBM',
  [
    '2023-06-12 19:25:00',
    {
      '1. open': '136.5200',
      '2. high': '136.5200',
      '3. low': '136.5200',
      '4. close': '136.5200',
      '5. volume': '500'
    }
  ]
]);

export default stockContext;

