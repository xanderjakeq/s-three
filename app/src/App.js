import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

import hasAuth from './components/hasAuth'
import LoginPage from './components/LoginPage/LoginPage'
import MainApp from './components/MainApp/MainApp'


class App extends Component {
  
  render() {
    return (
      <div className="App">
        {hasAuth(LoginPage, this.props.isAuthed)(MainApp)}
      </div>
    );
  }
}

const mstp = state => {
    return {
        isAuthed: state.auth.isAuthed
    }
}

export default connect(mstp, {})(App);
