import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Splash from './components/splash.js';
import Interface from './components/interface.js';
import Error from './components/error.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Splash} />
          <Route exact path="/interface/:accessToken/:refreshToken" component={Interface} />
          {/* <Route exact path="/user/:accessToken/:refreshToken" component={User} /> */}
          <Route exact path="/error/:errorMsg" component={Error} />
        </div>
      </Router>
    );
  }
}

export default App;
