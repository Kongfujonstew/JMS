import React from 'react';
import {render} from 'react-dom';
// import {Compass} from './Compass';


export class Contact extends React.Component {
  constructor(props) {
    super(props);
  }


  handleLinkedInClick () {
    window.open('https://www.linkedin.com/in/jonstew/');
  }

  handleSkypeClick () {
    window.open('http://hatscripts.com/addskype?kongfujonstew');
  }

  handleGithubClick () {
    window.open('https://github.com/Kongfujonstew');
  }

  handleMailClick () {
    location.href = 'mailto:jon@jonmichaelstewart.com';
  }

  render () {
      // <img id="wechat" className="social" src="../images/wechat.png"></img>
      // <img id="twitter" className="social" src="../images/twitter-128.png"></img>

      // <img id="snapchat" className="social" src="../images/snapchat-128.png"></img>
    return (
      <div className="">
        <div
          className="fourFifthHeight flexCenterVertical background-scratchMap"
        >

        <h1 className="white">Contact</h1>
          <div className="flexContainer flexCenterHorizontal">
            <img className="social" src="../images/socials/linkedin.svg"
              onClick={this.handleLinkedInClick.bind(this)}
            ></img>

            <img className="social" src="../images/socials/skype.svg"
              onClick={this.handleSkypeClick.bind(this)}
            ></img>

            <img className="social mailto" src="../images/socials/github.svg"
              onClick={this.handleGithubClick.bind(this)}
            ></img>

            <img className="social mailto" src="../images/socials/email.svg"
              onClick={this.handleMailClick.bind(this)}
            ></img>

          </div>

        </div>

        <div className="onefifthHeight background-black footer f-margin">
          <h1
            className="nameBottom f-margin khaki"
          >Jon Michael Stewart</h1>
          <a className="f-margin khaki"
            href="https://github.com/Kongfujonstew" target="_blank">www.github.com/Kongfujonstew
          </a>
        </div>
      </div>
    )
  }
}
