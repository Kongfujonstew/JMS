import React from 'react';
import {render} from 'react-dom';



export class Test extends React.Component {
  constructor(props) {
    super(props);

    // this.handleSocialClick = this.handleSocialClick.bind(this);

  }


  handleMailClick () {
    window.open('mailto:test@example.com');
  }

  handleLinkedinClick (url) {
    window.open('https://www.linkedin.com/in/jon-michael-stewart-92219910/')
  }


  render () {
    return (
      <div>
        <h1>Welcome to the test area</h1>





      </div>



    )
  }
}