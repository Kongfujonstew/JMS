import React from 'react';
import {render} from 'react-dom';


export class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="page">
        <div className="flexContainer thirdHeight topMargin">
          <div className="flexOneofTwo textPad">
            <h1>Trov</h1>
            <p className="maxWidth">

              A Realtime Geolocation Game 

              React.js 
              Node.js/Express 
              Integrated Google Maps 
              MySQL EC2-hosted database 
              Passport/Facebook authentication 

            </p>
          </div>

          <div className="flexOneofTwo">
            <img className="imgSize maxWidth" src="../images/trov.png" />
          </div>
        </div>

        <div className="flexContainer thirdHeight">
          <div className="flexOneofTwo textPad">
            <img className="imgSize maxWidth" src="../images/youkereoke.png"></img>
          </div>

          <div className="flexOneofTwo textPad">
            <h1>Youkereoke</h1>
            <p>

              Live multi-client song queue kareoke machine

              React.js
              Socket.io
              Multi-user simultaneous client interface
              Youtube API integration
              MongoDB

            </p>
          </div>
        </div>

        <div className="flexContainer thirdHeight">
          <div className="flexOneofTwo textPad">
            <h1>Hault</h1>
            <p className="maxWidth">

              Advanced Browser History

              Hault increases searchability of browser history
              by storing snippets of page content along with the page title. The application
              also allows users to continue their active browsing session from any computer, in any browser.

            </p>

          </div>

          <div className="flexOneofTwo">
            <img className="imgSize maxWidth" src="../images/hault.png"></img>
          </div>
        </div>


      </div>
    )
  }
}