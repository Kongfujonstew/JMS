import React from 'react';
import {render} from 'react-dom';

import { Open } from './Open.js';
import { About } from './About.js';
import { Work } from './Work.js';
import { Tech } from './Tech.js'
import { China } from './China.js';
import { Contact } from './Contact.js';
// import {Arrows} from './Arrows.js';

class Main extends React.Component {
  render () {
        // <Arrows />
    return (
      <main id="main">
        <Open />
        <About />
        <Work />
        <China />
        <Contact />
        <Tech />
      </main>
    )
  }
}

export default Main;
