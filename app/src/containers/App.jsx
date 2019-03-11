import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggingIn } from '../actions';

import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Route path="/login" render={(props) => (
            <Login {...props} onSubmit={this.props.loggingIn}/>
          )}/>
          <PrivateRoute exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}



export default connect(null, { loggingIn })(App);
