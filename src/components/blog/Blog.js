import React from 'react';
import {render} from 'react-dom';

import Posts from './Posts';

class Blog extends React.Component {
  render () {
    return (
      <main id="blog">
        <h1>Blog</h1>
        <Posts />
      </main>
    )
  }
}

export default Blog;
