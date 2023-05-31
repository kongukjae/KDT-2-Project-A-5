const React = require('react');

module.exports = function(props) {
  return (
    <>
      <h1>안녕! 나는 {props.abcd}야~ :D</h1>
      <h1>안녕! 나는 {props.def}</h1>
    </>
  )
}