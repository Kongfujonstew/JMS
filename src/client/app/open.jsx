import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import {Nav} from './nav.jsx';


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
      <div className="windowSize flexCenterVertical">
        <div
          className={this.state.loadState, "red center-top-text"}
        >JON MICHAEL STEWART || FULL STACK JAVASCRIPT</div>

        <div className={"flexCenterHorizontal"}>
          <img
            className={this.state.loadState, "circle"}
            src="../images/circle.png"
            alt="zenCircle"
          />
          <h1
            className={this.state.loadState, "name"}
          >Jon Michael Stewart</h1>

        </div>

        <Nav />
      </div>
    )
  }
}

