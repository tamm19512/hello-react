import React, { useState , useEffect} from "react";
import './App.css';

import { Select,Table} from 'antd';

import 'antd/dist/antd.css';
import axios from 'axios';

const { Column } = Table;
const { Option } = Select;

function Linear_inter_L() {

    let [x0, setx0] = useState();
    let [x1, setx1] = useState();
    let [fx0, setfx0] = useState();
    let [fx1, setfx1] = useState();
    let [x, setx] = useState();

    const queue_data = []

    const [datashow, setdatashow] = useState();

    const [getafcs, setgetafcs] = useState();
    const [getax, setgetax] = useState();
    let [getaX0, setgetaX0] = useState()
    let [getaFX0, setgetaFX0] = useState()
    let [getaX1, setgetaX1] = useState()
    let [getaFX1, setgetaFX1] = useState()
  
      useEffect(() => {
        axios.get("http://localhost:3001/api/users/showlinearinla").then(res => {
  
          const tempfcs = []
          const tempx = []
          const tempX0 = []
          const tempFX0 = []
          const tempX1 = []
          const tempFX1 = []

          for (let i = 0; i < res.data.data.length; i++) {
            tempfcs.push(<Option key={i} value={i} label={res.data.data[i].x}>x : {res.data.data[i].x}  <br/> x0 : {res.data.data[i].x0}  <br/> fx0: {res.data.data[i].fx0} 
                                                                            <br/> x1 : {res.data.data[i].x1}  <br/> fx1: {res.data.data[i].fx1}</Option>)
            tempx.push(res.data.data[i].x)
            tempX0.push(res.data.data[i].x0)
            tempFX0.push(res.data.data[i].fx0)
            tempX1.push(res.data.data[i].x1)
            tempFX1.push(res.data.data[i].fx1)
  
          }
          setgetafcs(tempfcs)
          setgetax(tempx)
          setgetaX0(tempX0)
          setgetaFX0(tempFX0)
          setgetaX1(tempX1)
          setgetaFX1(tempFX1)
        })
      }, [])
  
  
      function menu(value){
       
            setx(getax[value])
            setx0(getaX0[value])
            setfx0(getaFX0[value])
            setx1(getaX1[value])
            setfx1(getaFX1[value])
  
      }

    const trap = () => {

        const eror = (fx) => ((-0.3202-fx)/-0.3202)*100
        var fx

        fx = (((x1-x)/(x1-x0))*fx0)+(((x0-x)/(x0-x1))*fx1)

        queue_data.push({

            fx:fx.toFixed(6),

            error:eror(fx).toFixed(2)+"%"

        });

        setdatashow(queue_data)
      }

      function set() {

        setx(250);
        setx0(-100);
        setfx0(215);
        setx1(400);
        setfx1(249);

    }

    const span = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1> Linear Interpolation (Lagrange) </h1>     

                    </div>

                    <div className = "text-topic">


                          <h2>X</h2>

                          <input

                              placeholder="input X" 
                              value={x}
                              onChange={event => setx(event.target.value)} 

                          />

                          <h2> x0 {span}{span} fx0 {span}{span} x1 {span}{span} fx1 </h2>

                              
                                  <input
                                      type="number"
                                      value={x0}
                                      onChange={e => setx0(+e.target.value)}
                                      placeholder="0"
                                  />

                                  <input
                                      type="number"
                                      value={fx0}
                                      onChange={e => setfx0(+e.target.value)}
                                      placeholder="0"
                                  />
                                  <input
                                      type="number"
                                      value={x1}
                                      onChange={e => setx1(+e.target.value)}
                                      placeholder="0"
                                  />

                                  <input
                                      type="number"
                                      value={fx1}
                                      onChange={e => setfx1(+e.target.value)}
                                      placeholder="0"
                                  />

        


                    </div>

                    <button onClick={trap}>Add Them!</button>

                    {span}
                    
                    <button onClick={set}>Set!</button>

                    {span}


                       <Select defaultValue="set from db" style={{ width: 150 }}  onChange={menu}>

                           {getafcs}

                       </Select>
      

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>
                        <Column title="Fn" dataIndex="fx" key="fx" />
                        <Column title="Error" dataIndex="error" key="error" />
                      </Table>

                    </div>


                </div>

        )
    
}
export default Linear_inter_L;