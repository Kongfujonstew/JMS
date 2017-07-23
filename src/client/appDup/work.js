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

        <div className="flexContainer thirdHeight">
          <p className="flexOneofTwo flexCenterAll"> Trov discusson </p>
          <img id="trovPic" className="workPic flexTwoofTwo flexCenterAll" src="../images/trov.png"
          ></img>
        </div>

        <div className="flexContainer thirdHeight">
          <p className="flexOneofTwo flexCenterAll"> Trov discusson </p>
          <img id="youkereokePic" className="workPic flexTwoofTwo flexCenterAll" src="../images/youkereoke.png"
          ></img>
        </div>

        <div className="flexContainer thirdHeight">
          <p className="flexOneofTwo flexCenterAll"> Trov discusson </p>
          <img id="haultPic" className="workPic flexTwoofTwo flexCenterAll" src="../images/hault.png"
          ></img>
        </div>


      </div>
    )
  }
}