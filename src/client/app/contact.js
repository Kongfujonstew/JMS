import React from 'react';
import {render} from 'react-dom';
// import {Compass} from './compass';


export class Contact extends React.Component {
  constructor(props) {
    super(props);
  }


  handleMailClick () {
    window.open('mailto:jon@jonmichaelstewart.com');
  }

  handleLinkedinClick () {
    window.open('https://www.linkedin.com/in/jon-michael-stewart-92219910/')
  }

  handleSkypeClick () {
    window.open('http://hatscripts.com/addskype?kongfujonstew')
  }


  render () {
      // <img id="wechat" className="social" src="../images/wechat.png"></img>
      // <img id="twitter" className="social" src="../images/twitter-128.png"></img>

      // <img id="snapchat" className="social" src="../images/snapchat-128.png"></img>
    return (
      <div>
        <div
          className="fourFifthHeight flexCenterVertical scratchBackground"
        >
        <h1 className="white">Contact</h1>
          <div className="flexContainer flexCenterHorizontal">
            <img className="social" src="../images/linkedin-128.png"></img>

            <img className="social" src="../images/skype-128.png"></img>

            <img className="social" src="../images/mail-128.png"></img>
          </div>

        </div>

        <div className="onefifthHeight blackBackground footer rightAlign">
          <h1
            className="nameBottom noMargin khaki"
          >Jon Michael Stewart</h1>
          <a className="noMargin khaki"
            href="https://github.com/Kongfujonstew" target="_blank">www.github.com/Kongfujonstew
          </a>
        </div>
      </div>
    )
  }
}
