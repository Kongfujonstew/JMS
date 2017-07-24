import React from 'react';
import {render} from 'react-dom';
import {Tech} from './tech';

export class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className="windowSize blackBackground">
          <div className="flexContainer oneQuarterHeight whiteBackground">
            <h1 className="flexOneofThree flexCenterVertical">Simple</h1>
            <h1 className="flexTwoofThree flexCenterVertical">Mobile</h1>
            <h1 className="flexThreeofThree flexCenterVertical">Elegant</h1>
          </div>

          <div className="flexContainer threeQuarterHeight">
            <div className="flexOneofTwo flexCenterVertical flexCenterHorizontal">
              <img className="mapChair" src="../images/mapChair.jpg" />
            </div>
            <div className="flexTwoofTwo flexCenterVertical">
              <div className="jonFace">
                <img className="jonFace" src="../images/jonface.jpg" />
              </div>
              <p className="khaki">
              My name is Jon Michael Stewart. <br /><br />

              I’m a full stack software developer based in San Francisco, CA.  

              </p>
            </div>
          </div>


        </div>
        <Tech />
      </div>
    )
  }
}