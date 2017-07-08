import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';


export class Open extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="open">
        <div id="title"
          className={this.props.openClass}
        >JON MICHAEL STEWART || FULL STACK JAVASCRIPT</div>
        <h1 id="name"
          className={this.props.openClass}
        >Jon Michael Stewart</h1>
        <h1 id="welcome"
          className={this.props.openClass}
        >Welcome</h1>
      </div>
    )
  }
}