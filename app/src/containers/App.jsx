import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import Home from './Home';

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
