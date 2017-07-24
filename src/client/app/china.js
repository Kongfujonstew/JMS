import React from 'react';
import {render} from 'react-dom';


export class China extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
      // <img id="wechat" className="social" src="../images/wechat.png"></img>
      // <img id="twitter" className="social" src="../images/twitter-128.png"></img>

      // <img id="snapchat" className="social" src="../images/snapchat-128.png"></img>
    return (
      <div className="windowSize flexContainer" 
      >
        <div className="flexOneofTwo flexCenterVertical flexCenterHorizontal whiteBackground">
            <h1>China</h1>
            <p className="width300">
              I’ve called Asia home since I moved to Hong Kong, 
              with family, at the age of six.  We lived in Southeast Asia for eight years.  
              I returned to the East with a job at China 
              Daily Website in Beijing, in 2007.  Beijing was home for nine years . . . and now I'm 
              in San Francisco. <br /><br />
              My favorite dish is Kung Pao Chicken.
            </p>
        </div>


        <div className="flexTwoofTwo flexCenterVertical flexCenterHorizontal blackBackground">
          <img
            className="farmers"
            src="../images/jonChineseFarmers.jpg"
          />
        </div>


      </div>
    )
  }
}