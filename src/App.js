import React, { Component } from 'react';
import './App.css';

import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';

import Home from './Home'
import Bisection from './Bisection'
import FalsePos from './FalsePos'
import Onepoint from './Onepoint'
import Test from './Test'
import Newton from './Newton'
import Secant from './Secant'

import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";


const menu1 = (

  <div className = "nav">

      <Menu>

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
                <NavLink to ="/Onepoint" activeClassName="active">One Point Interaction</NavLink>
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/Newton" activeClassName="active">Newton Raphson Method</NavLink>
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/Secant" activeClassName="active">Secant Method</NavLink>
            </Menu.Item>
            
      </Menu>

  </div>

);

const menu2 = (

  <div className = "nav">

      <Menu>

            <Menu.Item>
            <NavLink to ="/Test" activeClassName="active">Test</NavLink>
                
            </Menu.Item>


      </Menu>

  </div>


);

const menu3 = (

  <div className = "nav">

      <Menu>

            <Menu.Item>

            </Menu.Item>


      </Menu>

  </div>


);

function App (){

  
  return (


    <div className="App">

      <div className="nav">

          <Dropdown overlay={menu1} placement="bottomLeft">

             <button>Root of Equations</button>

          </Dropdown>

          <h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>
          
          <Dropdown overlay={menu2} placement="bottomLeft">

            <button>Linear Algebra</button>

          </Dropdown>

          <h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>
          <Dropdown overlay={menu3} placement="bottomLeft">

            <button>Interpolation</button>

          </Dropdown>

          <h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>
          <Dropdown overlay={menu3} placement="bottomLeft">

            <button>Least Square Method</button>

          </Dropdown>

          <h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>        

          <Dropdown overlay={menu3} placement="bottomLeft">

            <button>Iterative Method</button>

          </Dropdown>

        <h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>
        

        <Dropdown overlay={menu3} placement="bottomLeft">

          <button>Ordinary Differential Equations</button>

        </Dropdown>

          
          
        </div>
            
            <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route path = "/Bisection" component = {Bisection}/>
              <Route path="/FalsePos" component={FalsePos} />
              <Route path="/Onepoint" component={Onepoint} />
              <Route path="/Newton" component={Newton} />
              <Route path="/Secant" component={Secant} />

              <Route path="/Test" component={Test} />

            </Switch>
        

      </div>

    )
    
}
export default App;
