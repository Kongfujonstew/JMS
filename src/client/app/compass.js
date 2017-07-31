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
        <img className="bottomLeft oneTenthWidth" src="../images/compassOutter.png" 
          style={compassOutterStyle}
        />
        <img className="bottomLeft oneTenthWidth" src="../images/compassInner.png" />
      </div>
    )
  }
}
