import React, { useState , useEffect} from "react";
import './App.css';

import { Select,Table} from 'antd';

import 'antd/dist/antd.css';


const { Column } = Table;

function Linear_inter_N() {

    let [x0, setx0] = useState();
    let [x1, setx1] = useState();
    let [fx0, setfx0] = useState();
    let [fx1, setfx1] = useState();
    let [x, setx] = useState();

    const queue_data = []

    const [datashow, setdatashow] = useState();

  const [getafcs, setgetafcs] = useState();
  const [getafx, setgetafx] = useState();
  let [getaXL, setgetaXL] = useState()
  let [getaXR, setgetaXR] = useState()


    function menu(value){
   
          setx(getafx[value])
          setx0(getaXL[value])
          setx1(getaXR[value])
          setfx0(getaXL[value])
          setfx1(getaXR[value])

    }

    const trap = () => {


        const eror = (fx) => ((-0.3202-fx)/-0.3202)*100
        var fx

        fx = fx0 + ((x-x0)*((fx1-fx0)/(x1-x0)))
      

        queue_data.push({

            fx:fx.toFixed(6),

            error:eror(fx).toFixed(2)+"%"

        });

        setdatashow(queue_data)
      }

      function set() {

        setx(3.2);
        setx0(2);
        setfx0(0.2239);
        setx1(4);
        setfx1(-0.3971);

    }

    const span = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1> Linear Interpolation (Newton) </h1>     

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
export default Linear_inter_N;