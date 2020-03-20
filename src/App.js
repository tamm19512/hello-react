import React, { Component } from 'react';
import './App.css';

import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';

import Home from './Home'
import Bisection from './Bisection'
import FalsePos from './FalsePos'
import Onepoint from './Onepoint'
import Newton from './Newton'
import Secant from './Secant'

import Cramer from './Cramer'

import Trapezoidal from './Trapezoidal'

import Test from './Test'

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

                <NavLink to ="/Cramer" activeClassName="active">Cramer</NavLink>
                
            </Menu.Item>


      </Menu>

  </div>


);

const menu3 = (

  <div className = "nav">

      <Menu>

            <Menu.Item>

            <NavLink to ="/Test" activeClassName="active">Linear Interpolation</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Test" activeClassName="active">Quadratic Interpolation</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Test" activeClassName="active">Polynomial Interpolation</NavLink>

            </Menu.Item>


      </Menu>

  </div>


);

const menu4 = (

  <div className = "nav">

      <Menu>

            <Menu.Item>

            <NavLink to ="/Test" activeClassName="active">Linear Regression</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Test" activeClassName="active">Polynomial Regression</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Test" activeClassName="active">Multiple Linear Regression</NavLink>

            </Menu.Item>


      </Menu>

  </div>


);

const menu5 = (

  <div className = "nav">

      <Menu>

            <Menu.Item>

            <NavLink to ="/Trapezoidal" activeClassName="active">Trapezoidal Rule</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Test" activeClassName="active">Composite Trapezoidal Rule</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Test" activeClassName="active">Simpson's Rule</NavLink>

            </Menu.Item>


      </Menu>

  </div>


);

function App (){

  const span = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);

  
  return (


    <div className="App">

      <div className="nav">

          <Dropdown overlay={menu1} placement="bottomLeft">

             <button>Root of Equations</button>

          </Dropdown>

          {span}

          <Dropdown overlay={menu2} placement="bottomLeft">

            <button>Linear Algebra</button>

          </Dropdown>

          {span}

          <Dropdown overlay={menu3} placement="bottomLeft">

            <button>Interpolation</button>

          </Dropdown>

          {span}
          
          <Dropdown overlay={menu4} placement="bottomLeft">

            <button>Least Square Regression</button>

          </Dropdown>

          {span}
          
          <Dropdown overlay={menu5} placement="bottomLeft">

            <button>Numerical Integration and Differentation</button>

          </Dropdown>

          {span}        

          
          
        </div>
            
            <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route path = "/Bisection" component = {Bisection}/>
              <Route path="/FalsePos" component={FalsePos} />
              <Route path="/Onepoint" component={Onepoint} />
              <Route path="/Newton" component={Newton} />
              <Route path="/Secant" component={Secant} />

              <Route path="/Cramer" component={Cramer} />

              <Route path="/Trapezoidal" component={Trapezoidal} />

              <Route path="/Test" component={Test} />

            </Switch>
        

      </div>

    )
    
}
export default App;
