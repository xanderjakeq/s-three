import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import PrivateRoute from '../components/private-route/PrivateRoute';
import Home from '../components/home/Home';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Route path="/login" componeent={Login}/>
          <PrivateRoute exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
