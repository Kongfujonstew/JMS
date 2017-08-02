import React from 'react';
import {render} from 'react-dom';


export class Compass extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var compassOutterStyle = {
      transform: "rotate("+this.props.compassDegree+"deg)",
      // transform-origin: 
    };



    return (
      <div>
        <img className="compassPosition compassSize" src="../images/compassOutter.png" 
        />
        <img className="compassPosition compassSize" src="../images/compassInner.png" />
      </div>
    )
  }
}
