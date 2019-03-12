import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import hasAuth from './components/hasAuth'
import LoginPage from './components/LoginPage/LoginPage'
import MainApp from './components/MainApp/MainApp'

import SearchPage from './components/SearchPage/SearchPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* {hasAuth(LoginPage)(MainApp)} */}
        <SearchPage/>
      </div>
    );
  }
}

export default App;
