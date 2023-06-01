import React,{useEffect, useState} from 'react';


interface tsMode {
  [key: string]: string;
}

 const example : React.FC<tsMode> = (test) => {
  const [count, setCount] = useState<JSX.Element>();
  setCount(<div></div>);
  return (
    <>
    <h1>{test.h1}</h1>
    <h2>{test.h2}</h2>
    {/* <div>{count}</div> */}
    </>
  );
}

export default example;