import React, { useState , useEffect} from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';
import axios from 'axios';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function FalsePos() {

    let [xl, setxl] = useState();
    let [xr, setxr] = useState();
    let [fx, setfx] = useState();

    const queue_data = []

    const [datashow, setdatashow] = useState();

  const [getafcs, setgetafcs] = useState();
  const [getafx, setgetafx] = useState();
  let [getaXL, setgetaXL] = useState()
  let [getaXR, setgetaXR] = useState()

    useEffect(() => {
      axios.get("http://localhost:3001/api/users/showfalse").then(res => {
        console.log(res.data);
        console.log(fx, xl, xr)
        const tempfx = []
        const tempfcs = []
        const tempXL = []
        const tempXR = []
        for (let i = 0; i < res.data.data.length; i++) {
          tempfcs.push(<Option key={i} value={i} label={res.data.data[i].fx}>xl : {res.data.data[i].xl} || xr: {res.data.data[i].xr} </Option>)
          tempfx.push(res.data.data[i].fx)
          tempXL.push(res.data.data[i].xl)
          tempXR.push(res.data.data[i].xr)
          console.log(tempfx[i])
          console.log(tempXL[i])
          console.log(tempXR[i])
        }
        setgetafcs(tempfcs)
        setgetafx(tempfx)
        setgetaXL(tempXL)
        setgetaXR(tempXR)
      })
    }, [])


    function menu(value){

      
          setfx(getafx[value])
          setxl(getaXL[value])
          setxr(getaXR[value])


          console.log('fx =', fx)
          console.log('XL =', xl)
          console.log('XR =', xr)




    }

    const falsepos = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        const eror = (xm, prexm) => Math.abs((xm - prexm) / xm)
        
        var i = 0, xm = 0, prexm
        
        while (true) {

          prexm = xm
          xm = ( (xl * f(fx,xr)) - (xr * f(fx,xl)) ) / (f(fx,xr)- f(fx,xl))

          if (f(fx, xm) * f(fx, xl) > 0) {
            xl = xm
          }
          else {
            xr = xm
          }

          queue_data.push({
            i: i,
            xm: xm.toFixed(6),
            fxm: f(fx, xm).toFixed(6),
            error: eror(xm, prexm).toFixed(6)
          });

            if(eror(xm, prexm) <= 0.000001){

              break;

            }

          i++;
        }

        setdatashow(queue_data)
      }

      function set() {

        setxl(0.02);
        setxr(0.03);
        setfx('1/x-43');
    }

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1> False Position </h1>     

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

                    <button onClick={falsepos}>Add Them!</button>
                    <button onClick={set}>Set!</button>

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
export default FalsePos;
