import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';


export class Nav extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
        <div className="nav bottom center">
          <text
            onClick={this.props.about}
          >( ABOUT )</text>
          <text
            onClick={this.props.tech}
          >( TECH )</text>
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
}