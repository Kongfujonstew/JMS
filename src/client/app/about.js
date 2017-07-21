import React from 'react';
import {render} from 'react-dom';


export class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="windowSize about">
        <div className="flexContainer title">
          <h1 className="flexOneofThree flexCenterVertical">Simple</h1>
          <h1 className="flexTwoofThree flexCenterVertical">Mobile</h1>
          <h1 className="flexThreeofThree flexCenterVertical">Elegant</h1>
        </div>

        <div className="flexContainer aboutPic">
          <div className="flexOneofTwo flexCenterVertical flexCenterHorizontal">
            <img className="jonFace grey" src="../images/jonFace.jpg" />
          </div>
          <div className="flexOneofTwo flexCenterVertical">
            <p>
            My name is Jon Michael Stewart. <br /><br />

            I’m a JavaScript engineer and full stack software developer based in San Francisco, CA.  
            I’ve worked on projects from virtually every corner of the JavaScript world, and APIs 
            from Google Maps to Annyang speech recognition.  I think big and develop like an entrepreneur.  
            Prior to turning to development full-time, I consulted on China market entry for 
            Activision-Blizzard, several Fortune 500 firms including Wal-Mart and Pepsi, and 
            tourism departments for the state of Arkansas and the city of Auckland, NZ.

            </p>
          </div>

        </div>

      </div>
    )
  }
}