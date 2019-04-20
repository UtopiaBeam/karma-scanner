import React, { Component } from 'react';
import Home from "./component/Home";
import Result from "./component/Result";
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Route path = "/" exact component = { Home } />
            <Route path = "/result" component = { Result } />
        </div>
    </Router>
    );
  }
}

export default App;
