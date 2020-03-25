import React from 'react';
import './App.css';

import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';

import Home from './Home'
import Bisection from './Bisection'
import FalsePos from './FalsePos'
import Onepoint from './Onepoint'
import Newton from './Newton'
import Secant from './Secant'

import Cramer from './Cramer'

import Trapezoidal from './Trapezoidal'
import Comtrapezoidal from './Comtrapezoidal'
import Simpson from './Simpson'
import Comsimpson from './Comsimpson'

import Linear_Regress from './Linear_Regress'
import Polynomial_Regress from './Polynomial_Regress'


import Linear_inter_N from './Linear_inter_N'
import Quadratic_inter_N from './Quadratic_inter_N'
import Polynomial_inter_N from './Polynomial_inter_N'
import Linear_inter_L from './Linear_inter_L'
import Quadratic_inter_L from './Quadratic_inter_L'


import Forward_h from './Forward_h'
import Forward_h2 from './Forward_h2'
import Backward_h from './Backward_h'
import Backward_h2 from './Backward_h2'
import Central_h2 from './Central_h2'
import Central_h4 from './Central_h4'

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
                <NavLink to ="/Bisection" activeClassName="active">Bisection Method</NavLink>
            </Menu.Item>

            <Menu.Item>
                <NavLink to ="/FalsePos" activeClassName="active">False Position Method</NavLink>  
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

            <NavLink to ="/Linear_inter_N" activeClassName="active">Linear Interpolation (Newton)</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Quadratic_inter_N" activeClassName="active">Quadratic Interpolation (Newton)</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Polynomial_inter_N" activeClassName="active">Polynomial Interpolation (Newton)</NavLink>

            </Menu.Item>
          
            <Menu.Item>

            <NavLink to ="/Linear_inter_L" activeClassName="active">Linear Interpolation (Lagrange)</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Quadratic_inter_L" activeClassName="active">Quadratic Interpolation (Lagrange)</NavLink>

            </Menu.Item>

            


      </Menu>

  </div>


);

const menu4 = (

  <div className = "nav">

      <Menu>

            <Menu.Item>

            <NavLink to ="/Linear_Regress" activeClassName="active">Linear Regression</NavLink>

            </Menu.Item>

            {/* <Menu.Item>

            <NavLink to ="/Polynomial_Regress" activeClassName="active">Polynomial Regression</NavLink>

            </Menu.Item> */}

            {/* <Menu.Item>

            <NavLink to ="/Test" activeClassName="active">Multiple Linear Regression</NavLink>

            </Menu.Item> */}


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

            <NavLink to ="/Comtrapezoidal" activeClassName="active">Composite Trapezoidal Rule</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Simpson" activeClassName="active">Simpson's Rule</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/ComSimpson" activeClassName="active">Composite Simpson's Rule</NavLink>

            </Menu.Item>


      </Menu>

  </div>


);

const menu6 = (

  <div className = "nav">

      <Menu>

            <Menu.Item>

            <NavLink to ="/Forward_h" activeClassName="active">Forward Divided Difference (h)</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Forward_h2" activeClassName="active">Forward Divided Difference (h^2)</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Backward_h" activeClassName="active">Backward Divided-Difference (h)</NavLink>

            </Menu.Item>

            <Menu.Item>

            <NavLink to ="/Backward_h2" activeClassName="active">Backward Divided-Difference (h^2)</NavLink>

            </Menu.Item>
            <Menu.Item>

            <NavLink to ="/Central_h2" activeClassName="active">Central Divided-Difference (h^2)</NavLink>

            </Menu.Item>
            <Menu.Item>

            <NavLink to ="/Central_h4" activeClassName="active">Central Divided-Difference (h^4)</NavLink>

            </Menu.Item>



      </Menu>

  </div>


);

function App (){

  const span = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);
  const span2 = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);

  
  return (


    <div className="App">

      <div className="nav">

         <NavLink exact to ="/" activeClassName="active">Home </NavLink>

          {span2}

          <Dropdown overlay={menu1} placement="bottomLeft">

             <button>Root of Equations</button>

          </Dropdown>

          {span2}

          <Dropdown overlay={menu2} placement="bottomLeft">

            <button>Linear Algebra</button>

          </Dropdown>

          {span2}

          <Dropdown overlay={menu3} placement="bottomLeft">

            <button>Interpolation <br/>and Extrapolation</button>

          </Dropdown>

          {span2}
          
          <Dropdown overlay={menu4} placement="bottomLeft">

            <button>Least Square Regression</button>

          </Dropdown>

          {span2}
          
          <Dropdown overlay={menu5} placement="bottomLeft">

            <button>Numerical Integration</button>

          </Dropdown>

          {span2}  

          
          <Dropdown overlay={menu6} placement="bottomLeft">

            <button>Numerical Differentation</button>

          </Dropdown>     

          
          
        </div>
            
            <Switch>
              <Route exact path = "/" component = {Home}/>

              <Route path = "/Bisection" component = {Bisection}/>
              <Route path="/FalsePos" component={FalsePos} />
              <Route path="/Onepoint" component={Onepoint} />
              <Route path="/Newton" component={Newton} />
              <Route path="/Secant" component={Secant} />

              <Route path="/Cramer" component={Cramer} />

              <Route path="/Linear_inter_N" component={Linear_inter_N} />
              <Route path="/Quadratic_inter_N" component={Quadratic_inter_N} />
              <Route path="/Polynomial_inter_N" component={Polynomial_inter_N} />
              <Route path="/Linear_inter_L" component={Linear_inter_L} />
              <Route path="/Quadratic_inter_L" component={Quadratic_inter_L} />

              <Route path="/Linear_Regress" component={Linear_Regress} />
              <Route path="/Polynomial_Regress" component={Polynomial_Regress} />

              <Route path="/Trapezoidal" component={Trapezoidal} />
              <Route path="/Comtrapezoidal" component={Comtrapezoidal} />
              <Route path="/Simpson" component={Simpson} />
              <Route path="/Comsimpson" component={Comsimpson} />

              <Route path="/Forward_h" component={Forward_h} />
              <Route path="/Forward_h2" component={Forward_h2} />
              <Route path="/Backward_h" component={Backward_h} />
              <Route path="/Backward_h2" component={Backward_h2} />
              <Route path="/Central_h2" component={Central_h2} />
              <Route path="/Central_h4" component={Central_h4} />

              <Route path="/Test" component={Test} />

            </Switch>
        

      </div>

    )
    
}
export default App;
