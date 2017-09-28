import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import {Nav} from './Nav.js';
import {Compass} from './Compass.js';


export class Open extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadState: 'preload',
      compassDegree: '0'
    }
  }

  componentDidMount() {
    this.setState({
      loadState: 'onload'
    })
  }

  jumpToAbout () {
    console.log('jumpToAbout')
    window.scrollTo(0, window.innerHeight);
  }

  jumpToWork () {
    console.log('jumpToAbout')
    window.scrollTo(0, 2*window.innerHeight);
  }

  jumpToChina () {
    console.log('jumpToAbout')
    window.scrollTo(0, 2*window.innerHeight+1320);
  }

  jumpToContact () {
    console.log('jumpToAbout')
    window.scrollTo(0, 3*window.innerHeight+1320);
  }

  changeCompassDegree (e) {
    console.log('ccd fired, x =', e.screenX);
    var deg = Math.atan2(200 - e.screenX, 800 - e.screenY) * 360 / Math.PI;
    this.setState({
      compassDegree: deg
    });
  }

  render () {
    return (
      <div className="page background-tiledMap"
        onMouseMove={this.changeCompassDegree.bind(this)}
      >

        <h1
          className="big rightTextAlign white"
        >Jon Michael Stewart</h1>


        <Nav 
          about={this.jumpToAbout.bind(this)}
          work={this.jumpToWork.bind(this)}
          china={this.jumpToChina.bind(this)}
          contact={this.jumpToContact.bind(this)}
        />

        <Compass 
          compassDegree={this.state.compassDegree}
        />

      </div>
    )
  }
}

