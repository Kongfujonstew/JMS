import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';


class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // isPoppedUp: false,
      // isPoppedDown: false,
      upDown: true
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      upDown: newProps.upDown
    })
    console.log('here is upDown: ', this.state.upDown)
  }

  popUp () {
    this.setState({
      isPoppedUp: true,
      upDown: false
    })
    this.props.changeDisplayText();
  }

  popDown () {
    console.log('onMouseEnter/ popDown triggered');
    this.setState({
      isPoppedUp: false
    })
    this.props.removeDisplayText();
  }

  render () {

    if (!this.props.upDown) {
      var classes = classNames({
        "flexbox": true,
        "column": true,
        // "poppedUpColumn": this.state.isPoppedUp,
        "poppedDownColumn": !this.state.isPoppedUp,
      })
    }

    if (this.props.upDown) {
      var classes = classNames({
        "flexbox": false,
        "column": true,
        "noMoveYet": true,
        "poppedUpColumn": false,
        "poppedDownColumn": false        
      })
    }

    return (

      <div 
        className={classes + ' ' + this.props.columnName}      
        onMouseEnter={this.popUp.bind(this)}
        onMouseLeave={this.popDown.bind(this)}
      ></div>

    )
  }
}

export default Column;