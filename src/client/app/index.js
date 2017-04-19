import React from 'react';
import {render} from 'react-dom';
import {Socials} from './socials.js';
import {Test} from './testArea.js'
import commands, {consFunc} from './consFunc.js';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main} />
        <Route path='/test' component={Test} />
      </Router>
    )
  }
}

const Main = () => 

    <div id="main">
      <div id="flexContainer" className="flexContainer">
        <div id="blue" className="flexbox"></div>
        <div id="red" className="flexbox"></div>
      </div>
      <div id="name">Jon Michael Stewart</div>
      <Socials />
    </div>


// const Address = () => <h1>We are located at 555 Jackson St.</h1>

render(<App/>, document.getElementById('app'));
