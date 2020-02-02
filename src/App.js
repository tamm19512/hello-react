import React, { Component } from 'react';
import './App.css';

import Home from './Home.js';
import Bisection from './Bisection.js';
import FalsePos from './FalsePos.js';
import test from './test.js';

import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class App extends Component {
  
  render() {
  return (


    <div className="App">


      <div className="nav">

         <NavLink exact to ="/" activeClassName="active">Home </NavLink>
         <NavLink to ="/Bisection" activeClassName="active">Bisection </NavLink>
         <NavLink to ="/FalsePos" activeClassName="active">FalsePos</NavLink>
         <NavLink to ="/test" activeClassName="active">test</NavLink>

      </div>
           
           <Switch>
             <Route exact path = "/" component = {Home}/>
             <Route path = "/Bisection" component = {Bisection}/>
             <Route path="/FalsePos" component={FalsePos} />
             <Route path="/test" component={test} />

           </Switch>
      

    </div>

    );
  }

}

export default App;
