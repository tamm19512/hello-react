import React, { useState , useEffect} from "react";
import './App.css';

import { Select,Table} from 'antd';

import 'antd/dist/antd.css';
import axios from 'axios';

const { Column } = Table;
const { Option } = Select;

const { parse,derivative } = require("mathjs");

function Backward_h2() {

    let [d, setd] = useState();
    let [h, seth] = useState();
    let [x, setx] = useState();
    let [fx, setfx] = useState();

    const queue_data = []

    const [datashow, setdatashow] = useState();

  const [getafcs, setgetafcs] = useState();
  const [getafx, setgetafx] = useState();
  let [getaA, setgetaA] = useState()
  let [getaB, setgetaB] = useState()

    useEffect(() => {
      axios.get("http://localhost:3001/api/users/showtrap").then(res => {

        const tempfx = []
        const tempfcs = []
        const tempA = []
        const tempB = []
        
        for (let i = 0; i < res.data.data.length; i++) {
          tempfcs.push(<Option key={i} value={i} label={res.data.data[i].fx}>fn : {res.data.data[i].fx} <br/> a : {res.data.data[i].a} <br/> b: {res.data.data[i].b} </Option>)
          tempfx.push(res.data.data[i].fx)
          tempA.push(res.data.data[i].a)
          tempB.push(res.data.data[i].b)

        }
        setgetafcs(tempfcs)
        setgetafx(tempfx)
        setgetaA(tempA)
        setgetaB(tempB)
      })
    }, [])


    function menu(value){

      
          setfx(getafx[value])
          setd(getaA[value])
          seth(getaB[value])
          setx(getaB[value])

    }

    const trap = () => {
      
        const f = (value) => parse(fx).evaluate({ x: value });

        var ans = 0, ans2 = 0

        if (d === 1) {
             ans = (3*f(x) - 4 * f(x - h) + f(x-(2*h))) / (2 * h)
            ans2 = derivative(fx, 'x').evaluate({x});
        } else if (d === 2) {
            ans = (2* f(x)  -5 * f(x - h) + 4 * f(x -(2* h)) - f(x - (3 * h))) / Math.pow(h, 2)
            ans2 = derivative(derivative(fx, 'x'), 'x').evaluate({x});
         } else if (d === 3) {
            ans = (5 * f(x) - 18 * f(x -h) + 24 * f(x - (2 * h)) - 14 * f(x -(3* h)) +3 * f(x - (4 * h))) / (Math.pow(h, 3) * 2)
            ans2 = derivative(derivative(derivative(fx, 'x'), 'x'), 'x').evaluate({x});
        } else if (d === 4) {
            ans = (3 * f(x) - 14 * f(x - h) + 26 * f(x - (2 * h)) - 24 * f(x -(3* h)) + 11* f(x - (4 * h)) - 2 * f(x - (5 * h))) / Math.pow(h, 4)
            ans2 = derivative(derivative(derivative(derivative(fx, 'x'), 'x'), 'x'), 'x').evaluate({x});
        }
   
        var eror = Math.abs((ans2 - ans) / ans2)

          queue_data.push({

            ans: ans.toFixed(6),
            ans2: ans2.toFixed(6),
            eror: eror.toFixed(6)
            
          });


        setdatashow(queue_data)
      }


      function set() {

        setfx('(-0.1x^4)-(0.15x^3)-(0.5x^2)-(0.25x)+1.2');
        setd(2);
        seth(1);
        setx(0.5);
        
    }

    const span = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1> Backward Divided Difference  (h^2)</h1>     

                    </div>

                    <div className = "text-topic">


                          <h2>fn</h2>

                          <input

                              placeholder="input function" 
                              value={fx}
                              onChange={event => setfx(event.target.value)} 

                          />

                          <h2> D {span}{span} H {span}{span} X</h2>

                              
                                  <input
                                      type="number"
                                      value={d}
                                      onChange={e => setd(+e.target.value)}
                                      placeholder="0"
                                  />

                                  <input
                                      type="number"
                                      value={h}
                                      onChange={e => seth(+e.target.value)}
                                      placeholder="0"
                                  />
                                  <input
                                      type="number"
                                      value={x}
                                      onChange={e => setx(+e.target.value)}
                                      placeholder="0"
                                  />


                    </div>

                    <button onClick={trap}>Add Them!</button>

                    {span}
                    
                    <button onClick={set}>Set!</button>

                    {span}


                       <Select defaultValue="set from db" style={{ width: 300 }}  onChange={menu}>

                           {getafcs}

                       </Select>
      

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="Ans" dataIndex="ans" key="ans" />
                        <Column title="Ans2" dataIndex="ans2" key="ans2" />
                        <Column title="Eror" dataIndex="eror" key="e" />

                      </Table>

                    </div>


                </div>

        )
    
}
export default Backward_h2;