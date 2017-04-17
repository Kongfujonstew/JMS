import React from 'react';
import {render} from 'react-dom';



class App extends React.Component {
  render () {
    return (
    <div id="main">
      <div id="flexContainer" className="flexContainer">
        <div id="blue" className="flexbox"></div>
        <div id="red" className="flexbox"></div>
      </div>
      <div id="name">Jon Michael Stewart</div>
    </div>
    )
  }
}

render(<App/>, document.getElementById('app'));