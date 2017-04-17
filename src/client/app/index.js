import React from 'react';
import {render} from 'react-dom';

var consFunc = require('./consFunc');


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  consFunc () {
    //is this needed?
  }

  render () {
    return (
    <div id="main">
      <div id="flexContainer" className="flexContainer">
        <div id="blue" className="flexbox" onClick={this.consFunc.bind(this)}></div>
        <div id="red" className="flexbox"></div>
      </div>
      <div id="name">Jon Michael Stewart</div>
    </div>
    )
  }
}

render(<App/>, document.getElementById('app'));