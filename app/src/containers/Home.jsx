import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Home Page</div>;
  }
}

mstp = state => {
  return {};
};
export default connect(mstp)(Home);
