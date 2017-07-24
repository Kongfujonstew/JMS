import React from 'react';
import {render} from 'react-dom';

import {Open} from './open.js';
import {About} from './about.js';
import {Work} from './work.js';
import {Tech} from './tech.js'
// import {Blog} from './blog.js';
import {China} from './china.js';
import {Contact} from './contact.js';
import {Compass} from './compass.js';

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
      </div>
    )
  }

  // _renderConsoleGreeting () {
  //   return (
  //     <script>
  //       console.log('Welcome the The Real Jon Stewart. /n Feel free to look around.')

  //     </script>
  //   )
  // }
}

export default App;

render(<App/>, document.getElementById('JMS'));
