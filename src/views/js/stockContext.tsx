import { createContext } from 'react';

interface stockContextType {
  MetaData: string,
}
const stockContext = createContext<stockContextType[] | null>(null);

export default stockContext;
export type { stockContextType }; // 추가

