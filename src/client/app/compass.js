import React from 'react';
import {render} from 'react-dom';


export class Compass extends React.Component {
  constructor(props) {
    super(props);
  }



  render () {
      // <img id="wechat" className="social" src="../images/wechat.png"></img>
      // <img id="twitter" className="social" src="../images/twitter-128.png"></img>

      // <img id="snapchat" className="social" src="../images/snapchat-128.png"></img>
    return (
      <div>
        <img className="bottomLeft oneTenthWidth" src="../images/compassOutter.png" />
        <img className="bottomLeft oneTenthWidth" src="../images/compassInner.png" />
      </div>
    )
  }
}
