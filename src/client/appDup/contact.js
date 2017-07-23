import React from 'react';
import {render} from 'react-dom';


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
      <div className="container">
        <div
          className="twoThirdHeight flexCenterVertical"
        >

          <img className="contactPic" src="../images/mapScratch.jpg"></img>

          <div className="flexContainer flexCenterHorizontal">
            <img className="social" src="../images/linkedin-128.png"></img>

            <img className="social" src="../images/skype-128.png"></img>

            <img className="social" src="../images/mail-128.png"></img>
          </div>

        </div>
        <div className="thirdHeight blackBackground footer"></div>
      </div>
    )
  }
}
