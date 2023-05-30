const React = require("react");
const ReactDom = require("react-dom");
const { Component } = React;

class react_test extends Component{
    state = {
        name  : 'hello webpack'
    };

    render(){
        return (
            <h1>{this.state.name}</h1>
        )
    }
}

module.exports = react_test;
