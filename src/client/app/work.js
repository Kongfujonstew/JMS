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
      "../images/images-1.png",
      "../images/js.png",
      "../images/mongodb.png",
      "../images/mysql.png",
      "../images/bookshelf.png",
      "../images/reddis.png",
      "../images/seek.png",
      "../images/yelp.jpg",
    ]

    return (
      <div id="work" className="flexContainer"
      >

        <div id="scroll">
          {pics.map((pic, index) =>
            <img
              key={index}
              className="pic "
            >Hello</img>
          )
          }
        </div>

      </div>
    )
  }
}