import React from 'react';
import {render} from 'react-dom';


export class Compass extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {


    var compassOutterStyle = {
      transform: "rotate("+this.props.compassDegree+"deg)",
        // top: 70%,
        // left: 5%,
        // width: 10%
      // transform-origin: 
    };



    return (
      <div>
        <img className="compassPosition compassSize" 
          style={compassOutterStyle}
          src="../images/compassOutter.png" 
        />
        <img className="compassPosition compassSize" src="../images/compassInner.png" />
      </div>
    )
  }
}
