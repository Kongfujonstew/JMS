import React from 'react';
import {render} from 'react-dom';


export class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
      // <img id="wechat" className="social" src="../images/wechat.png"></img>
      // <img id="twitter" className="social" src="../images/twitter-128.png"></img>

      // <img id="snapchat" className="social" src="../images/snapchat-128.png"></img>
    return (
      <div id="work" 
        className={this.props.classes}
        onClick={this.props.remove}
      >

        <img id="linkedin" className="social" src="../images/linkedin-128.png"
        ></img>

      </div>
    )
  }
}