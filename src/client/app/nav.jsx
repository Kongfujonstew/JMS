import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';


export class Nav extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
        <div className="center-bottom-text nav red">
          <text  className="red" 

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