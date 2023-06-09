import { createContext } from 'react';

// interface stockContextType {
//   MetaData: string,
// }
interface PriceData {
  [date: string | number]: PriceEntry;
}

interface PriceEntry {
  // 날짜별 가격 정보에 대한 속성들
  // 예를 들어, open, high, low, close 등이 포함될 수 있습니다.
  [property: string]: number;
}

interface stockContextType {
  symbol: string;
  price: PriceData;
}
// 최초 컨텍스트에 더미 데이터 넣음
const stockContext = createContext<stockContextType | null>({
  symbol: '잠시만 기다려주세요',
  price: {
    // 더미 데이터
    '2023-06-07': { open: 0, high: 0, low: 0, close: 0 },
    '2023-06-06': { open: 0, high: 0, low: 0, close: 0 },
    '2023-06-05': { open: 0, high: 0, low: 0, close: 0 },
  },
});

export default stockContext;
export type { stockContextType }; // 추가

