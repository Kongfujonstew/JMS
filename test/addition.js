'use strict';


describe('this just tells me mocha is working correctly', function () {
  it('addition should work in addition.js', function (done) {
    var onePlusOne = 1 + 1;
    onePlusOne.should.equal(2);
    // must call done() so that mocha know that we are... done.
    // Useful for async tests.
    done();
  });
});