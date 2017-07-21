import React from 'react';
import {render} from 'react-dom';


export class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="blog" 

      >

        <img id="linkedin" className="social" src="../images/linkedin-128.png"
        ></img>

      </div>
    )
  }
}