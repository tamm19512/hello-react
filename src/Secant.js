import React, { useState } from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function Secant() {

    let [x0, setx0] = useState();
    let [x1, setx1] = useState();
    let [fx, setfx] = useState();

    const queue_data = []

    const [datashow, setdatashow] = useState();

    const secant = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        const eror = (xm, prexm) => Math.abs((xm - prexm) / xm)
        
        var i = 0, xm = 0, prexm
        
        while (true) {

          prexm = xm

          xm = x1 - ( (f(fx,x1)* (x0-x1)) / (f(fx,x0)-f(fx,x1)) )
         
          queue_data.push({
            i: i,
            xm: xm.toFixed(6),
            fxm: f(fx, xm).toFixed(6),
            error: eror(xm, prexm).toFixed(6)
          });

            if(eror(xm, prexm) <= 0.000001){

              break;

            }

          x0 = x1
          x1 = xm
          i++;
        }

        setdatashow(queue_data)
      }

      function set() {

        setx0(2);
        setx1(2.5);
        setfx('x^2-7');
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1> Secant Method </h1>     

                    </div>

                    <div className = "text-topic">

                    <div className="number-inputs">

                        <h2>fn</h2>

                        <input

                            placeholder="input function" 
                            value={fx}
                            onChange={event => setfx(event.target.value)} 

                        />

                        <h2> xl &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xr </h2>

                            
                                <input
                                    type="number"
                                    value={x0}
                                    onChange={e => setx0(+e.target.value)}
                                    placeholder="0"
                                />

                                <input
                                    type="number"
                                    value={x1}
                                    onChange={e => setx1(+e.target.value)}
                                    placeholder="0"
                                />


                        </div>

                    </div>

                    <button onClick={secant}>Add Them!</button>
                    <button onClick={set}>Set!</button>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="Iterations" dataIndex="i" key="i" />
                        <Column title="xm" dataIndex="xm" key="xm" />
                        <Column title="Fn(xm)" dataIndex="fxm" key="fxm" />
                        <Column title="Error" dataIndex="error" key="error" />
                      </Table>

                    </div>

                    <LineChart
                        width={1900}
                        height={800}
                        data={datashow}
                        margin={{ top: 30, right: 20, left: 80, bottom: 5 }}
                        style={{ backgroundColor: "#fff" }}
                    >

                    <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="xm" />
                            <YAxis
                              type="number"
                              dataKey="fxm"
                              domain={["auto", "auto"]}
                              allowDataOverflow="true"
                            />
                            <Tooltip />
                            <Legend />
                            <Line type="linear" dataKey="fxm" stroke="#82ca9d" strokeWidth={4} />
                            

                    </LineChart>

                </div>

        )
    
}
export default Secant;
