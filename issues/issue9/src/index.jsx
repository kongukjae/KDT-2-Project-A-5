const React = require("react");
const ReactDom = require("react-dom");
const React_test = require("./react_test");
import style from './app.css';

ReactDom.render(<React_test />, document.querySelector("#root"));
