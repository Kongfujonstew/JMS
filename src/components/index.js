import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main/Main';
import Blog from './blog/Blog';

render(<BrowserRouter location={window.location}>
          <div>
            <Route path="/blog" exact component={Blog} />
            <Route path="/" exact component={Main} />
          </div>
        </BrowserRouter>,
  document.getElementById('JMS'));
