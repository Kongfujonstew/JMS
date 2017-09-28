import React from 'react';
import {render} from 'react-dom';
import posts from './posts/index';


class Posts extends React.Component {
  render () {
    return (
      <div>
        {posts.map((data, index) => {
          return (
            <div className="post">
              <h1>{data.title} || {data.date}</h1>
              <h3>{data.subtitle}</h3>
              <p>{data.text}</p>
              <pre><code>{data.code}</code></pre>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Posts;