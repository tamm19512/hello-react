import React, { Component } from 'react';

import logo from './Nororu.svg';
import './App.css';

import menu from './menu';



import Bisection from './Bisection';
import FalsePos from './FalsePos';

import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class App extends Component {

  render() {

  return (
    
      

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Newmer <code>src/App.js</code> and save to reload.
        </p>

        <p>
          Very hard of Math in my life.
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

    

   );
  }
}

export default App;
