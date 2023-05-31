import React from 'react';
import Header from './header'
import Main from './main.js';
import Main2 from './main2';

export default ()=> {
  return (
  <div style={Css}>
    <Header />
    <div className="main">
      <Main style={{ color: "red" }} />
      <Main2></Main2>
    </div>
  </div>
  )
}