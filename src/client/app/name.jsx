import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';


export class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onload: ''
    }
  }

  componentDidMount() {
    this.setState({
      onload: 'onload'
    })
  }

  render () {
    return (
      <div id="center">
        <img id="zenCircle" className={this.state.onload} src="../images/circle.png" alt="zenCircle" />
        <h1 id="name" className={this.state.onload}>Jon Michael Stewart</h1>
        <h1 id="welcome">Welcome</h1>

      </div>
    )
  }
}