import React from 'react';
import {render} from 'react-dom';
import {About} from './about.js';
import {Work} from './work.js';
import {Blog} from './blog.js';
import {China} from './china.js';
import {Contact} from './contact.js';
import {Name} from './name.jsx';
import classNames from 'classnames';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutClass: classNames('page'),
      workClass: classNames('page'),
      blogClass: classNames('page'),
      chinaClass: classNames('page'),
      contactClass: classNames('flexcontainer page')
    }
  }

  handleContactClick (navElement) {
    console.log('clicked', navElement)
    switch (navElement) {
      case 'about' :
        this.setState({
          aboutClass: classNames('page clicked')
        });
        break;
      case 'work' :
        this.setState({
          workClass: classNames('page clicked')
        });
        break;
      case 'blog' :
        this.setState({
          blogClass: classNames('page clicked')
        });
        break;
      case 'china' :
        this.setState({
          chinaClass: classNames('page clicked')
        });
        break;
      case 'contact' :
        this.setState({
          contactClass: classNames('page clicked')
        });
        break;
    }
  }

  handleRemove () {
    console.log('yeah, clicked')
    this.setState({
      aboutClass: classNames('page'),
      workClass: classNames('page'),
      blogClass: classNames('page'),
      chinaClass: classNames('page'),
      contactClass: classNames('page')
    });
  }

  render () {
    return (
      <div id="main">

        <div id="title">JON MICHAEL STEWART || FULL STACK JAVASCRIPT</div>

        <div id="pages">
          <About
            classes={this.state.aboutClass}
            remove={this.handleRemove.bind(this)}
          />
          <Work
            classes={this.state.workClass}
            remove={this.handleRemove.bind(this)}
          />
          <Blog
            classes={this.state.blogClass}
            remove={this.handleRemove.bind(this)}
          />
          <China
            classes={this.state.chinaClass}
            remove={this.handleRemove.bind(this)}
          />
          <Contact
            classes={this.state.contactClass}
            remove={this.handleRemove.bind(this)}
          />
        </div>

        <div id="nav">
          <text
            onClick={this.handleContactClick.bind(this, 'about')}
          >ABOUT</text>
          <text
            onClick={this.handleContactClick.bind(this, 'work')}
          >WORK</text>
          <text
            onClick={this.handleContactClick.bind(this, 'blog')}
          >BLOG</text>
          <text
            onClick={this.handleContactClick.bind(this, 'china')}
          >CHINA</text>
          <text
            onClick={this.handleContactClick.bind(this, 'contact')}
          >CONTACT</text>
        </div>
        
        <Name />
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
