import React from 'react';
import logo from './Nororu.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header-up">
      
      s<span></span>

      <a
        href = "index.html"
      >
      <button>Bisection </button>
      </a>

      sp<span></span>
      

      <a
        href = "index.html"
      >
      <button>False Position </button>
      </a>
      



      </header>

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
    </div>
  );
}

export default App;
