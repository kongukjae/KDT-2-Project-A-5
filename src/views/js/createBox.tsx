import React, { useState } from 'react';

// 함수의 컴포넌트 타입을 명시하기 위해서이다.
// 프로퍼티의 키 값이 무엇이 들어 오든 다 받을수 있다.
interface MyComponentProps {
  [aaa : string]: string;
}

const MyComponent: React.FC<MyComponentProps> = (text) => {
  const [showText, setShowText] = useState(true);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <h1>Hello, {text.test}!</h1>
      <button onClick={toggleText}>Toggle Text</button>
      {showText && <p>This is some dynamic text.</p>}
    </div>
  );
};

export default MyComponent;
