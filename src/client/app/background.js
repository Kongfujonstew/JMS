import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';



class Background extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }


  render () {

    return (

      <div id="background" className="flexContainer">
        <div className="zeppelin flexbox backgroundColumn"></div>
        <div className="contact flexbox backgroundColumn"></div>
        <div className="about flexbox backgroundColumn"></div>
        <div className="china flexbox backgroundColumn"></div>
        <div className="dev flexbox backgroundColumn"></div>
        <div className="upload flexbox backgroundColumn"></div>

      </div>

    )
  }
}

export default Background;