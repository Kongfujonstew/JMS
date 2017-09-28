import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import classNames from 'classnames';


export class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    // Add me to enable the blog page
          // <text
          //   onClick={this.props.blog}
          // ><Link to="/blog">(BLOG)</Link>
          // </text>
    return (
        <div className="nav bottom center">
          <text
            onClick={this.props.about}
          >( ABOUT )</text>
          <text
            onClick={this.props.work}
          >( WORK )</text>
          <text
            onClick={this.props.china}
          >( CHINA )</text>
          <text
            onClick={this.props.contact}
          >( CONTACT )</text>
        </div>
    )
  }
};