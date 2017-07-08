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
      aboutClass: '',
      workClass: '',
      blogClass: '',
      chinaClass: '',
      contactClass: '',
      openClass: 'preload',
      navClass: 'preload',
      circleClass: 'preload'
    }
  }


  focusAbout () {
    console.log('focus Clicked')
    this.setState({
      aboutClass: 'focused'
    });
  }

  focusWork () {
    this.setState({
      workClass: 'focused'
    });
  }

  focusBlog () {
    this.setState({
      blogClass: 'focused'
    });
  }

  focusChina () {
    this.setState({
      chinaClass: 'focused'
    });
  }

  focusContact () {
    this.setState({
      contactClass: 'focused'
    });
  }

  unfocusAll () {
    console.log('yeah, clicked')
    this.setState({
      aboutClass: '',
      workClass: '',
      blogClass: '',
      chinaClass: '',
      contactClass: ''
    });
  }

  render () {
    return (
      <div id="main">
        <Open 
          openClass={classNames(this.state.openClass)}
        />
        <img id="circle"
          className={classNames(this.state.circleClass)}
          src="../images/circle.png"
          alt="zenCircle"
        />

        <div id="pages">
          <About
            classes={classNames(this.state.aboutClass)}
            remove={this.unfocusAll.bind(this)}
          />
          <Work
            classes={classNames(this.state.workClass)}
            remove={this.unfocusAll.bind(this)}
          />
          <Blog
            classes={classNames(this.state.blogClass)}
            remove={this.unfocusAll.bind(this)}
          />
          <China
            classes={classNames(this.state.chinaClass)}
            remove={this.unfocusAll.bind(this)}
          />
          <Contact
            classes={classNames(this.state.contactClass)}
            remove={this.unfocusAll.bind(this)}
          />
        </div>

        <Nav
          className={classNames(this.state.navClass)}
          handleAboutClick={this.focusAbout.bind(this)}
        />
        
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
