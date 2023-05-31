import React from 'react';
import Header from './header.js';
import Main from './main.js';

export default ()=> {
  return (
  <>
    <Header />
    <div className="main">
      <Main style={{ color: "red" }} />
    </div>
  </>
  )
}