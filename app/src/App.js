import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import hasAuth from './components/hasAuth';
import LoginPage from './components/LoginPage/LoginPage';
import MainApp from './components/MainApp/MainApp';

import { AppContainer } from './components/StyledComps';

// TODO: Initialize FIrebase

class App extends Component {
  componentDidMount(){
    // TODO: add firebase instance to redux store.
  }
  render() {
    return (
      <AppContainer>
        {hasAuth(LoginPage)(MainApp)}
      </AppContainer>
    );
  }
}
const mstp = state => {
  return {
    isAuthed: state.auth.isAuthed
  };
};

export default connect(
  mstp,
  {}
)(App);
