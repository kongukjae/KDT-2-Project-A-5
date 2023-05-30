import React from 'react';

function FirstTest() {
  return (
    <ul>
      <li>첫번째</li>
      <li>두번째</li>
      <li>세번째</li>
      <li>네번째</li>
      <li>다섯번째</li>
    </ul>
  )
};

function SeconfTest() {
  return (
    <a href="loginGo?">위로 가기</a>
  )
}

const App = ()=> {
  return (
    <div>
      <>Hello world</>
      <FirstTest />
      <SeconfTest />
    </div>
  )
};

export default App;