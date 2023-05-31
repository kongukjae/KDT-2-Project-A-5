import React from 'react';

export default function(text) {
  const showText = true;
  const dynamicText = `${text}`;

  return (
    <div>
      {showText && <p>{dynamicText}</p>}
    </div>
  );
}
