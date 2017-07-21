import React from 'react';
import {render} from 'react-dom';


export class Tech extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="work" 
        className="windowSize"
      >

        <div id="trov" className="work flexContainer">
          <p className="flexOneofTwo flexCenterAll"> Trov discusson </p>
          <img id="trovPic" className="workPic flexTwoofTwo flexCenterAll" src="../images/trov.png"
          ></img>
        </div>

        <div id="youkereoke" className="work flexContainer">
          <p className="flexOneofTwo flexCenterAll"> Trov discusson </p>
          <img id="youkereokePic" className="workPic flexTwoofTwo flexCenterAll" src="../images/youkereoke.png"
          ></img>
        </div>

        <div id="hault" className="work flexContainer">
          <p className="flexOneofTwo flexCenterAll"> Trov discusson </p>
          <img id="haultPic" className="workPic flexTwoofTwo flexCenterAll" src="../images/hault.png"
          ></img>
        </div>


      </div>
    )
  }
}