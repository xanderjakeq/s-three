import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggingIn, loggingOut, signingUp } from '../actions';

import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router basename="/app">
        <div className="App">
          <Route
            path="/login"
            render={props => (
              <div>
                <h2>Log In</h2>
                <Login {...props} onSubmit={this.props.loggingIn} />
              </div>
            )}
          />
          <Route
            path="/signup"
            render={props => (
              <div>
                <h2>Sign Up</h2>
                <Login {...props} signingUp onSubmit={this.props.signingUp} />
              </div>
            )}
          />
          <PrivateRoute exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loggingIn, loggingOut, signingUp }
)(App);
