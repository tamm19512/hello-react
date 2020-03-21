import React, { useState , useEffect} from "react";
import './App.css';

import { Select,Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import 'antd/dist/antd.css';
import axios from 'axios';

const { parse } = require("mathjs");
const { Column } = Table;
const { Option } = Select;

function Newton() {

    let [x0, setx0] = useState();
    let [fx, setfx] = useState();

    const queue_data = []

    const [datashow, setdatashow] = useState();
    const [getafcs, setgetafcs] = useState();
    const [getafx, setgetafx] = useState();
    let [getaX0, setgetaX0] = useState()
  
      useEffect(() => {
        axios.get("http://localhost:3001/api/users/shownewton").then(res => {
          console.log(res.data);
          console.log(fx, x0)
          const tempfx = []
          const tempfcs = []
          const tempX0 = []
  
          for (let i = 0; i < res.data.data.length; i++) {
            tempfcs.push(<Option key={i} value={i} label={res.data.data[i].fx}>fn : {res.data.data[i].fx} || x0 : {res.data.data[i].x0} </Option>)

            tempfx.push(res.data.data[i].fx)
            tempX0.push(res.data.data[i].x0)
  
            console.log(tempfx[i])
            console.log(tempX0[i])
   
          }
          setgetafcs(tempfcs)
          setgetafx(tempfx)
          setgetaX0(tempX0)
        })
      }, [])
  
  
      function menu(value){
  
        
            setfx(getafx[value])
            setx0(getaX0[value])
  
  
            console.log('fx =', fx)
            console.log('X0 =', x0)
  
      }

    const newton = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        const eror = (x0, prex) => Math.abs((x0 - prex) / x0)
        
        var i = 0, prex ,del
        
        while (true) {

          prex = x0

          del = - (f(fx,x0)/(x0*2))

          x0 = prex + del

          queue_data.push({
            i: i,
            x: prex.toFixed(6),
            fx: f(fx, x0).toFixed(6),
            error: eror(x0, prex).toFixed(6)
          });

            if(eror(x0, prex) <= 0.000001){

              break;

            }

          i++;
        }

        setdatashow(queue_data)
      }

      function set() {

        setx0(2);

        setfx('x^2-7');
    }

    const span = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1> Newton Raphson Method </h1>     

                    </div>

                    <div className = "text-topic">

                    <div className="number-inputs">

                        <h2>fn</h2>

                        <input

                            placeholder="input function" 
                            value={fx}
                            onChange={event => setfx(event.target.value)} 

                        />

                        <h2> x0 </h2>

                            
                                <input
                                    type="number"
                                    value={x0}
                                    onChange={e => setx0(+e.target.value)}
                                    placeholder="0"
                                />

                        </div>

                    </div>

                    <button onClick={newton}>Add Them!</button>

                    {span}

                    <button onClick={set}>Set!</button>

                    {span}

                    <Select defaultValue="set from db" style={{ width: 200 }}  onChange={menu}>

                       {getafcs}

                    </Select>

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="Iterations" dataIndex="i" key="i" />
                        <Column title="x" dataIndex="x" key="x" />
                        <Column title="Fn(x)" dataIndex="fx" key="fx" />
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

                            <XAxis dataKey="x" />
                            <YAxis
                              type="number"
                              dataKey="fx"
                              domain={["auto", "auto"]}
                              allowDataOverflow="true"
                            />
                            <Tooltip />
                            <Legend />
                            <Line type="linear" dataKey="fx" stroke="#82ca9d" strokeWidth={4} />
                            
                    </LineChart>

                </div>

        )
    
}
export default Newton;
