import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import firebase from './firebaseApp'
import LoginPage from './components/LoginPage/LoginPage';
import MainApp from './components/MainApp/MainApp';

import { AppContainer } from './components/StyledComps';

import {getUserData, saveFirebaseUser} from './actions/authActions'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      isAuthed: false
    }
  }
  
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.props.saveFirebaseUser(user)
          this.props.getUserData(user)
          this.setState({
            isAuthed: true
          })
        } else {
          this.setState({
            isAuthed: false
          })
        }
    });
  }

  render() {
    return (
      <AppContainer>
        {this.state.isAuthed ? <MainApp/> : <LoginPage/>}
      </AppContainer>
    );
  }
}

export default connect(null, {getUserData, saveFirebaseUser})(App);
