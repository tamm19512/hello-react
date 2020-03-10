import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Card, Input, Button, Table, Col, Row } from 'antd';
import 'antd/dist/antd.css';
const { parse } = require("mathjs");




function Bisection() {

    const [xl, setxl] = useState();
    const [xr, setxr] = useState();
    const [fx, setfx] = useState();
    const [data, setdata] = useState();
    const temp = []
    const [x, setx] = useState(0)

    const codebisection = () => {
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        const e = (xm, xm0) => Math.abs((xm - xm0) / xm)
        const fxm = (xl, xr) => (xl + xr) / 2
        var xm
        var xm0
        var i = 0
        while (i <= 1 || e(xm, xm0) > 0.000001) {
          xm0 = xm
          xm = fxm(xl, xr)
          if (f(fx, xm) * f(fx, xl) > 0) {
            xl = xm
          }
          else {
            xr = xm
          }
          temp.push({
            i: i,
            x: xm.toFixed(6),
            y: f(fx, xm).toFixed(6),
            error: e(xm, xm0).toFixed(6)
          });
          i++;
        }
        setx(xm.toFixed(6))
        setdata(temp)
      }

  

        return(

                <div className = "section">

                    <div className = "up-extext">

                        <h1> Bisection </h1>     

                    </div>

                    <div className = "text-topic">

                    <div className="number-inputs">

                        <h2>fn</h2>

                        <input

                            placeholder="input function" 
                            onChange={event => setfx(event.target.value)} 

                        />


                        <h2> xl &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xr </h2>

                            
                                <input
                                    type="number"
                                    value={xl}
                                    onChange={e => setxl(+e.target.value)}
                                    placeholder="0"
                                />


                                <input
                                    type="number"
                                    value={xr}
                                    onChange={e => setxr(+e.target.value)}
                                    placeholder="0"
                                />


                        </div>

                    </div>

                    <button onClick={codebisection}>Add Them!</button>




                </div>

        )
    
    
    

}
const rootElement = document.getElementById("root");
ReactDOM.render(<Bisection />, rootElement);
export default Bisection;