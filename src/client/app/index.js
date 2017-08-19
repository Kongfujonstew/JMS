import React from 'react';
import {render} from 'react-dom';

import {Open} from './open.js';
import {About} from './about.js';
import {Work} from './work.js';
import {Tech} from './tech.js'
import {China} from './china.js';
import {Contact} from './contact.js';
import {Arrows} from './arrows.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Open />
        <About />
        <Work />
        <China />
        <Contact />
        <Arrows />
      </div>
    )
  }

}

render(<App/>, document.getElementById('JMS'));
