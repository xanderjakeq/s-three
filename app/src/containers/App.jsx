import React, { Component } from 'react';
<<<<<<< HEAD:app/src/containers/App.jsx
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import Home from './Home';
||||||| merged common ancestors
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/private-route/PrivateRoute';
import Home from './components/home/Home';
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> ef50e0aee4fb409336285ee83155b63a50788442:app/src/App.js

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
