import React from 'react';
import ReactDOM from 'react-dom';
import css from './app.css'
// 리액트 컴포넌트 작성
function App() {
  return (
    <div>
      <h1 style={css}>Hello, React!</h1>
    </div>
  );
}

// 리액트 컴포넌트를 렌더링
ReactDOM.render(<App />, document.getElementById('root'));
