import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggingIn, loggingOut } from '../actions';

import NavBar from '../components/NavBar';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/login"
            render={props => (
              <Login {...props} onSubmit={this.props.loggingIn} />
            )}
          />
          <PrivateRoute
            path="/"
            component={() => <NavBar loggingOut={this.props.loggingOut} />}
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
  { loggingIn, loggingOut }
)(App);
