import { children } from "cheerio/lib/api/traversing";
import React, { useEffect, useState } from "react";

export default function ({ children }: { children: JSX.Element }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
    document.title = `Count: ${count}`;
  }, [count]);

  const incrementCount = () => {
    // setCount(count + 1);
  };

  return (
    <div>
      {/* <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button> */}
      {children}
    </div>
  );
}
