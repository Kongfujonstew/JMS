import React from 'react';
import {render} from 'react-dom';
// import {Socials} from './socials.js';
import Column from './column.js';
import Background from './background.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: '',
      upDown: true
    }
  }

  handleAllDown () {
    console.log('handleAllDown')
    this.setState({
      upDown: false
    })
  }

  handleAllUp () {
    console.log('handleAllUp')
    this.setState({
      upDown: true
    })
  }

  changeDisplayText (columnName) {
    console.log('changeDisplayText triggered')
    this.setState({"displayText": columnName})
  }

  removeDisplayText () {
    this.setState({"displayText": ""})
  }


  render () {
    return (
      <div id="main"
        onMouseEnter={this.handleAllDown.bind(this)}
        onMouseLeave={this.handleAllUp.bind(this)}
      >
        <div id="flexContainer" className="flexContainer">
          <Column columnName="zeppelin" 
            upDown={this.state.upDown}
            changeDisplayText={this.changeDisplayText.bind(this, "Zeppelin")}
            removeDisplayText={this.removeDisplayText.bind(this)}

          />
          <Column columnName="contact" 
            upDown={this.state.upDown}
            changeDisplayText={this.changeDisplayText.bind(this, "Contact")}
            removeDisplayText={this.removeDisplayText.bind(this)}

          />
          <Column columnName="about" 
            upDown={this.state.upDown}
            changeDisplayText={this.changeDisplayText.bind(this, "About")}
            removeDisplayText={this.removeDisplayText.bind(this)}
          />
          <Column columnName="china" 
            upDown={this.state.upDown}
            changeDisplayText={this.changeDisplayText.bind(this, "China")}
            removeDisplayText={this.removeDisplayText.bind(this)}
          />
          <Column columnName="dev" 
            upDown={this.state.upDown}
            changeDisplayText={this.changeDisplayText.bind(this, "Web Development")}
            removeDisplayText={this.removeDisplayText.bind(this)}
          />
          <Column columnName="upload" 
            upDown={this.state.upDown}
            changeDisplayText={this.changeDisplayText.bind(this, "Upload")}
            removeDisplayText={this.removeDisplayText.bind(this)}
          />
        </div>
        {this._renderFloater()}
        <Background />
      </div>

    )
  }

  _renderFloater () {
    if (!this.state.displayText) {  
      return (
        <h1 id="floaterText">Jon Michael Stewart</h1>
      )
    } else {
      return (
        <h1 id="floaterText">{this.state.displayText}</h1>
      )
    }
  }

}

export default App;

// removeDisplayText={this.removeDisplayText.bind(this)}
// upDown={this.props.upDown}


render(<App/>, document.getElementById('app'));

