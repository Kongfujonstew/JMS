import React from 'react';
import {render} from 'react-dom';


export class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    var pics = [
      "../images/angular.png",
      "../images/react.svg",
      "../images/nodenoblack.png",
      "../images/d3.png",
      "../images/socketio.png",
      "../images/express.png",
      "../images/googlemaps.jpg",
      "../images/htmljscss.png",
      "../images/js.png",
      "../images/mongodb.png",
      "../images/mysql.png",
      "../images/bookshelf.png",
      "../images/reddis.png",
      "../images/seek.png",
      "../images/yelp.jpg",
    ]

    var scrollY = document.body.scrollTop;
    console.log(scrollY);

    document.body.onscroll = () => {
      console.log(document.body.scrollTop, document.body.scrollHeight)
    }

    // var scrollWindow = document.getElementById(#scroll);

    var scrollStyle = {left: 0};


    var wheel = (event) => {
      event.preventDefault();
      event.returnValue=false;
    }

    var scrollLeftRight = () => {
      if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll',wheel,false);
      }
      window.onmousewheel=document.onmousewheel=wheel;
    }

    return (
      <div id="tech" className="windowSize">
        <div id="scroll" className="flexContainer" 
          style={scrollStyle}
          onMouseOver={scrollLeftRight}
        >
        {pics.map((pic, index) =>
          <div>
            <img
              src={pic}
              key={index}
              className="pic"
            />
          </div>

        )}
        </div>
      </div>
    )
  }
}