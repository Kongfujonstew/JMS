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
      <div className="windowSize background">

        <h1
          className="name openText"
        >Jon Michael Stewart</h1>


        <Nav />
      </div>
    )
  }
}

        // <p 
        //   className="title openText"
        // >Full Stack JavaScript</p>
