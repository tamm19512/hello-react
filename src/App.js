import React, { Component } from 'react';
import './App.css';

import Home from './Home';
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


    <div className="App">


      <div className="nav">

         <NavLink exact to ="/" activeClassName="active">Home </NavLink>
         <NavLink to ="/Bisection" activeClassName="active">Bisection </NavLink>
         <NavLink to ="/FalsePos" activeClassName="active">FalsePos</NavLink>

      </div>
           
           <Switch>
             <Route exact path = "/" component = {Home}/>
             <Route path = "/Bisection" component = {Bisection}/>
             <Route path="/FalsePos" component={FalsePos} />

           </Switch>
      

    </div>

    );
  }

}

export default App;
