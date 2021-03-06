import React, { useState , useEffect} from "react";
import './App.css';

import { Select,Table} from 'antd';

import 'antd/dist/antd.css';
import axios from 'axios';

const { parse,create,all } = require("mathjs");
const mathjs = create(all);
const mathInt = require('mathjs-simple-integral');
mathjs.import(mathInt)


const { Column } = Table;
const { Option } = Select;

function Comtrapezoidal() {

    let [a, seta] = useState();
    let [b, setb] = useState();
    let [n, setn] = useState();
    let [fx, setfx] = useState();

    const queue_data = []

    const [datashow, setdatashow] = useState();

    const [getafcs, setgetafcs] = useState();
    const [getafx, setgetafx] = useState();
    let [getaA, setgetaA] = useState()
    let [getaB, setgetaB] = useState()
    let [getaN, setgetaN] = useState()
  
      useEffect(() => {
        axios.get("http://localhost:3001/api/users/showcomtrap").then(res => {
          console.log(res.data);
          console.log(fx, a, b,n)
          const tempfx = []
          const tempfcs = []
          const tempA = []
          const tempB = []
          const tempN = []
          for (let i = 0; i < res.data.data.length; i++) {
            tempfcs.push(<Option key={i} value={i} label={res.data.data[i].fx}>fn : {res.data.data[i].fx} <br/> a : {res.data.data[i].a} <br/> b: {res.data.data[i].b} <br/> n: {res.data.data[i].n} </Option>)
            tempfx.push(res.data.data[i].fx)
            tempA.push(res.data.data[i].a)
            tempB.push(res.data.data[i].b)
            tempN.push(res.data.data[i].n)
            console.log(tempfx[i])
            console.log(tempA[i])
            console.log(tempB[i])
            console.log(tempN[i])
          }
          setgetafcs(tempfcs)
          setgetafx(tempfx)
          setgetaA(tempA)
          setgetaB(tempB)
          setgetaN(tempN)
        })
      }, [])
  
  
      function menu(value){
  
        
            setfx(getafx[value])
            seta(getaA[value])
            setb(getaB[value])
            setn(getaN[value])
  
            console.log('fx =', fx)
            console.log('XL =', a)
            console.log('XR =', b)

      }

    const trap = () => {
      
        const f = (fx, value) => parse(fx).evaluate({ x: value })
        const inte =  mathjs.integral(fx,'x')
        const toString = inte.toString()    

        const eror = (ans, I) => ((ans - I) / ans)*100
        
        var x0,x1,h,data=a,ans=0,i,ans2,a1,a2
        var I2 = ""
       
        h=(b-a)/n

        x0 = f(fx,a)
        ans = ans+x0

        queue_data.push({
            
            x: x0.toFixed(6),

          });

        for(i=1;i<=n-1;i++){

            data = data+h
            ans = ans+(2*f(fx,data))

            queue_data.push({
            
                x: f(fx,data).toFixed(6),
    
            });
        }
        
        x1 = f(fx,b)
        ans = ans+x1

        ans2 = (h/2)*ans

        I2 = toString

        a1 = f(I2,a)
        a2 = f(I2,b)

        ans = a1+a2

          queue_data.push({
            
            x: x1.toFixed(6),
            ans: ans.toFixed(6),
            ans2: ans2.toFixed(6),
            error: eror(ans, ans2).toFixed(2)+" %"
          });

        setdatashow(queue_data)
      }

      function set() {

        seta(0);
        setb(2);
        setn(4);
        setfx('(2*(x^3))-(5*(x^2))+(3*x)+1');
    }

    const span = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1> Composite Trapezoidal Rule </h1>     

                    </div>

                    <div className = "text-topic">


                          <h2>fn</h2>

                          <input

                              placeholder="input function" 
                              value={fx}
                              onChange={event => setfx(event.target.value)} 

                          />

                          <h2> a {span}{span} b {span}{span} n</h2>

                              
                                  <input
                                      type="number"
                                      value={a}
                                      onChange={e => seta(+e.target.value)}
                                      placeholder="0"
                                  />

                                  <input
                                      type="number"
                                      value={b}
                                      onChange={e => setb(+e.target.value)}
                                      placeholder="0"
                                  />

                                  <input
                                      type="number"
                                      value={n}
                                      onChange={e => setn(+e.target.value)}
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
                        <Column title="Fxn" dataIndex="x" key="x" />
                        <Column title="sumFxn" dataIndex="ans" key="ans" />
                        <Column title="I" dataIndex="ans2" key="ans2" />
                        <Column title="Error" dataIndex="error" key="error" />
                      </Table>

                    </div>


                </div>

        )
    
}
export default Comtrapezoidal;