import React from 'react';

interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({text}) => {
  const showText = true;
  const dynamicText = text;

  return (
    <div>
      {showText && <p>{dynamicText}</p>}
    </div>
  );
}

export default MyComponent;
