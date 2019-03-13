import React, { Component } from 'react';
import queryString from 'query-string'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

import hasAuth from './components/hasAuth'
import LoginPage from './components/LoginPage/LoginPage'
import MainApp from './components/MainApp/MainApp'

import {AppContainer} from './components/StyledComps'

class App extends Component {

  componentDidMount(){
    // get access spotify access token
    const parsed = queryString.parse(window.location.search)
    if(parsed.access_token){
      localStorage.setItem('access_token', parsed.access_token)
    }
  }
  
  render() {
    return (
      <AppContainer>
        {hasAuth(LoginPage, this.props.isAuthed)(MainApp)}
      </AppContainer>
    );
  }
}

const mstp = state => {
    return {
        isAuthed: state.auth.isAuthed
    }
}

export default connect(mstp, {})(App);
