import React from 'react';
import {render} from 'react-dom';


export class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div 
        className="windowSize"
      >

        <div className="flexContainer thirdHeight greyBackground">
          <div className="flexTwoofTwo textPad">
            <h1>Trov</h1>
            <p className="width300">

              A Realtime Geolocation Game 

              React.js 
              Node.js/Express 
              Integrated Google Maps 
              MySQL EC2-hosted database 
              Passport/Facebook authentication 

            </p>
          </div>

          <div className="flexTwoofTwo">
            <img className="lessHeight" src="../images/trov.png" />
          </div>
        </div>





        <div className="flexContainer thirdHeight">
          <div className="flexOneofTwo textPad">
            <img className="lessHeight" src="../images/youkereoke.png"></img>
          </div>

          <div className="flexTwoofTwo textPad">
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








        <div className="flexContainer thirdHeight greyBackground">
          <div className="flexTwoofTwo textPad">
            <h1>Hault</h1>
            <p className="width300">

              Advanced Browser History

              Hault increases searchability of browser history
              by storing snippets of page content along with the page title. The application
              also allows users to continue their active browsing session from any computer, in any browser.

            </p>

          </div>

          <div className="flexTwoofTwo">
            <img className="lessHeight" src="../images/hault.png"></img>
          </div>
        </div>


      </div>
    )
  }
}