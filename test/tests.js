'use strict';

import React from "react";  
import should from "should";

var ReactTestUtils = require('react-dom/test-utils');

import App from '../src/client/app/index.js'

// import AppBar from 'material-ui/AppBar';
// import axios from 'axios';
// import annyang from 'annyang';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import Snackbar from 'material-ui/Snackbar';

// var ReactTestUtils = require('react-dom/test-utils');


describe('App should be be an element', function () {
  it('isElement(App) should be true', function (done) {
    ReactTestUtils.isElement(<App />).should.equal(true);
    done();
  });
});

