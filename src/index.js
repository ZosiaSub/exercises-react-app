import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';


ReactDOM.render(
  <BrowserRouter>
      <div>
          <Route exact path='/' component={App} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
      </div>
  </BrowserRouter>,
  document.getElementById('root')
);


