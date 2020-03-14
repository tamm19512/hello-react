import React, { useState , useEffect} from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';
import axios from 'axios';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function Secant() {

    let [x0, setx0] = useState();
    let [x1, setx1] = useState();
    let [fx, setfx] = useState();

    const queue_data = []

    const [datashow, setdatashow] = useState();
    const [getafcs, setgetafcs] = useState();
    const [getafx, setgetafx] = useState();
    let [getaX0, setgetaX0] = useState()
    let [getaX1, setgetaX1] = useState()
  
      useEffect(() => {
        axios.get("http://localhost:3001/api/users/showsecant").then(res => {
          console.log(res.data);
          console.log(fx, x0, x1)
          const tempfx = []
          const tempfcs = []
          const tempX0 = []
          const tempX1 = []
          for (let i = 0; i < res.data.data.length; i++) {
            tempfcs.push(<Option key={i} value={i} label={res.data.data[i].fx}>x0 : {res.data.data[i].x0} || xr: {res.data.data[i].x1} </Option>)
            tempfx.push(res.data.data[i].fx)
            tempX0.push(res.data.data[i].x0)
            tempX1.push(res.data.data[i].x1)
            console.log(tempfx[i])
            console.log(tempX0[i])
            console.log(tempX1[i])
          }
          setgetafcs(tempfcs)
          setgetafx(tempfx)
          setgetaX0(tempX0)
          setgetaX1(tempX1)
        })
      }, [])
  
  
      function menu(value){
  
        
            setfx(getafx[value])
            setx0(getaX0[value])
            setx1(getaX1[value])
  
  
            console.log('fx =', fx)
            console.log('X0 =', x0)
            console.log('X1 =', x1)
  
  
  
  
      }

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

    const span = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);

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

                        <h2> xl  {span}{span}  xr </h2>

                            
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

                    {span}

                    <button onClick={set}>Set!</button>

                    {span}
                    
                    <Select defaultValue="set from db" style={{ width: 150 }}  onChange={menu}>

                       {getafcs}

                    </Select>

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
