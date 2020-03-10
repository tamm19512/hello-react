import React, { Component } from 'react';
import './App.css';

import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';

import Home from './Home'
import Bisection from './Bisection'
import FalsePos from './FalsePos'
import test from './test'

import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";


const menu1 = (

  

  <Menu>

    <div className="nav">

        <Menu.Item>
            <NavLink exact to ="/" activeClassName="active">Home </NavLink>
        </Menu.Item>
        
        <Menu.Item>
            <NavLink to ="/Bisection" activeClassName="active">Bisection </NavLink>
            
        </Menu.Item>

        <Menu.Item>
            <NavLink to ="/FalsePos" activeClassName="active">FalsePos</NavLink>  
        </Menu.Item>

        <Menu.Item>
            <NavLink to ="/test" activeClassName="active">One Point Interaction</NavLink>
        </Menu.Item>

        <Menu.Item>
            <NavLink to ="/test" activeClassName="active">Newton Raphson Method</NavLink>
        </Menu.Item>

        <Menu.Item>
            <NavLink to ="/test" activeClassName="active">Secant Method</NavLink>
        </Menu.Item>
        
    </div>

  </Menu>


);



function App (){

  
  

  return (


    <div className="App">

      <div className="nav">

          <Dropdown overlay={menu1} placement="bottomLeft">

             <button>Root of Equations</button>

          </Dropdown>

        <h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>
        

          <Dropdown overlay={menu1} placement="bottomLeft">

            <button>Linear</button>

          </Dropdown>

        <h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>
        

          <Dropdown overlay={menu1} placement="bottomLeft">

            <button>Iterative Method</button>

          </Dropdown>
          
          

        </div>

            
            <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route path = "/Bisection" component = {Bisection}/>
              <Route path="/FalsePos" component={FalsePos} />
              <Route path="/test" component={test} />

            </Switch>
        

      </div>

    )
    
  
  

}
export default App;
