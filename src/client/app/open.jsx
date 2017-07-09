import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';


export class Open extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadState: 'preload'
    }
  }

  componentDidMount() {
    this.setState({
      loadState: 'onload'
    })
  }

  render () {
    return (
      <div id="open">
        <div id="title"
          className={this.state.loadState}
        >JON MICHAEL STEWART || FULL STACK JAVASCRIPT</div>

        <div id="center">
          <img id="circle"
            className={this.state.loadState}
            src="../images/circle.png"
            alt="zenCircle"
          />
          <h1 id="name"
            className={this.state.loadState}
          >Jon Michael Stewart</h1>
          <h1 id="welcome"
            className={this.state.loadState}
          >Welcome</h1>
        </div>
      </div>
    )
  }
}