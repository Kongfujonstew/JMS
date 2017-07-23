import React from 'react';
import {render} from 'react-dom';


export class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="windowSize about">
        <div className="flexContainer aboutBanner">
          <h1 className="flexOneofThree flexCenterVertical">Simple</h1>
          <h1 className="flexTwoofThree flexCenterVertical">Mobile</h1>
          <h1 className="flexThreeofThree flexCenterVertical">Elegant</h1>
        </div>

        <div className="flexContainer aboutPic">
          <div className="flexOneofTwo flexCenterVertical flexCenterHorizontal">
            <img className="mapChair" src="../images/mapChair.jpg" />
          </div>
          <div className="flexOneofTwo flexCenterVertical">
            <div className="jonFace">
              <img className="jonFace grey" src="../images/jonFace.jpg" />
            </div>
            <p className="aboutP">
            My name is Jon Michael Stewart. <br /><br />

            I’m a JavaScript engineer and full stack software developer based in San Francisco, CA.  

            </p>
          </div>
        </div>


      </div>
    )
  }
}