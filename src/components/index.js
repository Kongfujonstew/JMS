import React from 'react';
import {render} from 'react-dom';

import {Open} from './Open.js';
import {About} from './About.js';
import {Work} from './Work.js';
import {Tech} from './Tech.js'
import {China} from './China.js';
import {Contact} from './Contact.js';
import {Arrows} from './Arrows.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
        // <Arrows />
    return (
      <div>
        <Open />
        <About />
        <Work />
        <China />
        <Contact />
      </div>
    )
  }

}

render(<App/>, document.getElementById('JMS'));
