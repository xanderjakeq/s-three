import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import { loggingOut } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar loggingOut={this.props.loggingOut} />
        <p>Home Page</p>
      </div>
    );
  }
}

// const mstp = state => {};

export default connect(
  null,
  { loggingOut }
)(Home);
