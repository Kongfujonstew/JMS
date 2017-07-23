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
      <div id="china" className="windowSize flexContainer" 
      >
        <div id="chinaOne" className="flexOneofTwo flexCenterAll">
          <div id="centerContainer">
            <h1 id="chinaTitle">China</h1>
            <p id="chinaP">
              I’ve called Asia home since I moved to Hong Kong, 
              with our family, at the age of six.  We lived in Southeast Asia for eight years.  
              I returned to the East with a job at China 
              Daily Website in Beijing, in 2007.  Beijing was home for nine years . . . and now I'm 
              in San Francisco. <br /><br />
              My favorite dish is Kung Pao Chicken.
            </p>

          </div>
        </div>


        <div id="chinaTwo" className="flexTwoofTwo flexCenterAll">
          <img id="jonChineseFarmers"
            className="flexCenterAll"
            src="../images/jonChineseFarmers.jpg"
          />
        </div>


      </div>
    )
  }
}