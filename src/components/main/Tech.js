import React from 'react';
import {render} from 'react-dom';
import techPics from './techPics';

export class Tech extends React.Component {
  render () {
    return (
      <div id="tech" className="scrollPadding">
        <div className="flexContainer scroll">
          {techPics.map((pic, index) =>
            <div key={index}>
              <img src={pic} className="pic" />
            </div>
          )}
        </div>
      </div>
    );
  }
};
