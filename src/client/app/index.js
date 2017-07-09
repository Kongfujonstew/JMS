import React from 'react';
import {render} from 'react-dom';
import {About} from './about.js';
import {Work} from './work.js';
import {Blog} from './blog.js';
import {China} from './china.js';
import {Contact} from './contact.js';
import {Open} from './open.jsx';
import {Nav} from './nav.jsx';
import classNames from 'classnames';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inFocus: 'open',
      aboutClass: 'page',
      workClass: 'page',
      blogClass: 'page',
      chinaClass: 'page',
      contactClass: 'page',
    }
  }

  render () {
    return (
      <div id="main">

        <Open 
        />

        <Nav
          className={classNames(this.state.navClass)}
        />

        <div id="pages">
          <About
            classes={classNames(this.state.aboutClass)}

          />
          <Work
            classes={classNames(this.state.workClass)}

          />
          <Blog
            classes={classNames(this.state.blogClass)}

          />
          <China
            classes={classNames(this.state.chinaClass)}

          />
          <Contact
            classes={classNames(this.state.contactClass)}

          />
        </div>

        
      </div>
    )
  }

  _renderConsoleGreeting () {
    return (
      <script>


      </script>
    )
  }

}

export default App;

render(<App/>, document.getElementById('app'));
