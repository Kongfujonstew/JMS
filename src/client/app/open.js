import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import {Nav} from './nav.js';
import {Compass} from './compass.js';


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

  jumpToTech () {
    console.log('jumpToTech')
    window.scrollTo(0, window.innerHeight+140);
  }

  jumpToWork () {
    console.log('jumpToAbout')
    window.scrollTo(0, 2*window.innerHeight+100);
  }

  jumpToChina () {
    console.log('jumpToAbout')
    window.scrollTo(0, 3*window.innerHeight+100);
  }

  jumpToContact () {
    console.log('jumpToAbout')
    window.scrollTo(0, 4*window.innerHeight+100);
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
          tech={this.jumpToTech.bind(this)}
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

        // <p 
        //   className="title openText"
        // >Full Stack JavaScript</p>
