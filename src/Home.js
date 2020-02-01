import React, { Component } from 'react';
import logo from './Nororu.svg';
import './App.css';
 
  const Home = () =>{

     return (

      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Newmer.
        </p>

        <p>
          Very hard of Math in my life.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
    
          target="_blank"

        >
          Learn React
        </a>
      </header>

     );
     
  }
  export default Home;
