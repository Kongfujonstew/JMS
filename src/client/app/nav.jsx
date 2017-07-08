import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';


export class Nav extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
        <div id="nav">
          <text
            onClick={this.props.handleAboutClick}
          >ABOUT</text>
          <text
          >WORK</text>
          <text
          >BLOG</text>
          <text
          >CHINA</text>
          <text
          >CONTACT</text>
        </div>
    )
  }
}