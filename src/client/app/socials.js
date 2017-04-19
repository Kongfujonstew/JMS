import React from 'react';
import {render} from 'react-dom';


export class Socials extends React.Component {
  constructor(props) {
    super(props);

    // this.handleSocialClick = this.handleSocialClick.bind(this);

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
    return (
      <div id="socials" className="flexContainer">
        <img id="facebook" className="social" src="../images/facebook-128.png"></img>

        <img id="linkedin" className="social" src="../images/linkedin-128.png"
          onClick={this.handleLinkedinClick.bind(this)}
        ></img>

        <img id="twitter" className="social" src="../images/twitter-128.png"></img>

        <img id="snapchat" className="social" src="../images/snapchat-128.png"></img>

        <img id="skype" className="social" src="../images/skype-128.png"
          onClick={this.handleSkypeClick.bind(this)}
        ></img>

        <img id="wechat" className="social" src="../images/wechat.png"></img>

        <img id="email" className="social" src="../images/mail-128.png"
          onClick={this.handleMailClick.bind(this)}


        ></img>









      </div>
    )
  }
}
