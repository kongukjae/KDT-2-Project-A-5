import React, { createContext } from 'react';

interface stockContextType  {
  [test : string ]: {
    name: string ;
    age: string;
  };
}

const stockContext = createContext<stockContextType | undefined>(undefined);

export default stockContext;
export type { stockContextType }; // 추가