import React from 'react';
import {render} from 'react-dom';


class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        Hello from blog
      </div>
    )
  }

}

render(<Blog/>, document.getElementById('JMSBlog'));
