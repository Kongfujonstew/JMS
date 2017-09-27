import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';


export class Arrows extends React.Component {
  constructor(props) {
    super(props);

  }


  jumpDown () {
    var next = Math.floor(window.scrollY + window.innerHeight);
    // next = next < 0 ? next : 0;
    console.log(next);
    window.scrollTo(0, next);
  }

  jumpUp () {
    var next = Math.floor(window.scrollY - window.innerHeight);
    window.scrollTo(0, next);
    console.log(next);
  }

  jumpToTop () {
    window.scrollTo(0, 0);
  }

  jumpToBottom () {
    console.log('jumpToAbout')
    window.scrollTo(0, 4*window.innerHeight+100);
  }

  render () {
    return (
        <div className="arrows">
          <div className="arrowContainer">
            <img src="../images/arrow/doubleArrow.png"
              className="arrowImage"
              onClick={this.jumpToTop.bind(this)}
            />
            <img src="../images/arrow/arrow.png"
              className="arrowImage rotate"
              onClick={this.jumpUp.bind(this)}
            />
            <img src="../images/arrow/arrow.png"
              className="arrowImage"
              onClick={this.jumpDown.bind(this)}
            />
            <img src="../images/arrow/doubleArrow.png"
              className="arrowImage rotate"
              onClick={this.jumpToBottom.bind(this)}
            />
          </div>
        </div>
    )
  }
}