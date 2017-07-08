import React from 'react';
import {render} from 'react-dom';


export class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
      // <img id="wechat" className="social" src="../images/wechat.png"></img>
      // <img id="twitter" className="social" src="../images/twitter-128.png"></img>

      // <img id="snapchat" className="social" src="../images/snapchat-128.png"></img>
    return (
      <div id="contact" 
        className={this.props.classes}
        onMouseOver={this.props.remove}
      >

        <img id="linkedin" className="social" src="../images/linkedin-128.png"
        
        ></img>

      </div>
    )
  }
}