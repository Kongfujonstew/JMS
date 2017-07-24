import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import {Nav} from './nav.js';
import {Compass} from './compass.js';


export class Open extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadState: 'preload'
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
    window.scrollTo(0, window.innerHeight+100);
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





  render () {
    return (
      <div className="windowSize background">

        <h1
          className="name openText"
        >Jon Michael Stewart</h1>


        <Nav 
          about={this.jumpToAbout.bind(this)}
          tech={this.jumpToTech.bind(this)}
          work={this.jumpToWork.bind(this)}
          china={this.jumpToChina.bind(this)}
          contact={this.jumpToContact.bind(this)}
        />

        <Compass />

      </div>
    )
  }
}

        // <p 
        //   className="title openText"
        // >Full Stack JavaScript</p>
