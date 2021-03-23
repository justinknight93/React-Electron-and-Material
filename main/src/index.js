
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home.js';
import About from './pages/about.js';
import { BrowserRouter, Route } from "react-router-dom";
 
import * as serviceWorker from './serviceWorker';
 
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();