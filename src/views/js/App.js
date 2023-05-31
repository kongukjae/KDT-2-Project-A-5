import React from 'react';
import Header from './header.js';
import Main from './main.js';
import Kwak from './kwak.jsx';
import Kwon from './kwon.js';
import Main2 from './main2.js';
import PdjComponent from './pdjComponent.js';
import Park from './park.js';
import Test1 from './Test1.js';

export default ()=> {
  return (
  <>
    <Header />
    <div className="main">
      <Main style={{ color: "red" }} />
    </div>
    <Kwak abcd={"준형이"} def={"가나다라"}/>
    <Kwon />
    <Main2 />
    <PdjComponent />
    <Park />
    <Test1 />
  </>
  )
}