import React, { useState , useEffect} from "react";
import './App.css';

import { Select,Table,InputNumber} from 'antd';

import 'antd/dist/antd.css';
import axios from 'axios';


const { Column } = Table;
const { Option } = Select;

function Polynomial_Regress() {

    let [n, setn] = useState(2);
    let [x1, setx1] = useState();
    var x = []

    var temp 
    var xx = []
    var xy = []

    const queue_data = []

    const [datashow, setdatashow] = useState();

  const [getafcs, setgetafcs] = useState();
  const [getafx, setgetafx] = useState();
  let [getaXL, setgetaXL] = useState()
  let [getaXR, setgetaXR] = useState()


    function menu(value){
   
          setn(getafx[value])
          setx1(getafx[value])

    }

    const createInput = () => {
        temp = Array.from(Array(n), _ => Array(n).fill(0))
        xx = Array(n).fill(0)
        xy = Array(n).fill(0)
        return (
          <div >  
            <tr>
                
             {span}

            
            {createHead()}
                 
            </tr>
            
            {createRow()}

          </div>
        );
      }
    
      const createHead = () => {

        return (

            <th>
                <div>
                    <h>
                        {span2}  x  {span2}{span2} fx
                     </h>
                </div>
            </th>
              
        );
       
      }
    
      const createRow = () => {

        return temp.map((x, i) => (
          <tr>
            <th>{i+1} . </th>

            
                {createCol(i)}

                {createCol2(i)}

          </tr>
        ));
      }
    
      const createCol = (i) => {
        return (

          <td>

            <InputNumber defaultValue={0} size="large" onChange={value => {

                xx[i] = value
              
            }}
            
            />
  
          </td>
          
        );
      }
      const createCol2 = (i) => {
        return (

          <td>

            <InputNumber defaultValue={0} size="large" onChange={value => {

                xy[i] = value
              
            }}
            
            />
  
          </td>
          
        );
      }

    const trap = () => {

      const square = x => Math.pow(x, 2);
      var sumx=0,sumfx=0,sumx2=0,sumfx2=0,a0,a1,fx


        for(var i=0;i<n;i++){

            sumx = sumx + xx[i]
            sumfx = sumfx + xy[i]

            sumx2 = sumx2 + square(xx[i])
            sumfx2 = sumfx2 + (xx[i]*xy[i])
        }

        a0 = ((sumfx*sumx2)-(sumfx2*sumx))/((n*sumx2)-(square(sumx)))
        a1 = ((n*sumfx2)-(sumx*sumfx))/((n*sumx2)-(square(sumx)))
        fx = a0+(a1*x1)

        queue_data.push({

            sumx:sumx.toFixed(6),
            sumfx:sumfx.toFixed(6),
            sumx2:sumx2.toFixed(6),
            sumfx2:sumfx2.toFixed(6),

            a0:a0.toFixed(6),
            a1:a1.toFixed(6),
            fx:fx.toFixed(6),
        });

        setdatashow(queue_data)
      }

      function set() {

        setn(4);
        setx1(2.4);

        xx[0] = -100

    }

    const span = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);
    const span2 = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);
    const span3 = (<h>&nbsp;&nbsp;&nbsp;</h>);

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1> Polynomial Regression </h1>     

                    </div>

                    <div className = "text-topic">

                          <h2> X {span}{span} N</h2>

                          <input

                              type="number"
                              placeholder="Input X" 
                              value={x1}
                              onChange={event => setx1(event.target.value)} 

                          />

                          <input

                              type="number"
                              placeholder="Input N" 
                              min = {2}
                              value={n}
                              onChange={e => setn(+e.target.value)} 

                          />

                    </div>

                    <div className = "App-table" style={{ marginTop: 30 }}>
                      
                         {createInput(n)}{span}
                    
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


                        <Column title="sumx" dataIndex="sumx" key="sumx" />
                        <Column title="sumfx" dataIndex="sumfx" key="sumfx" />
                        <Column title="sumx2" dataIndex="sumx2" key="sumx2" />
                        <Column title="sumfx2" dataIndex="sumfx2" key="sumfx2" />

                        <Column title="A0" dataIndex="a0" key="a0" /> 
                        <Column title="A1" dataIndex="a1" key="a1" /> 
                        <Column title="Fx" dataIndex="fx" key="fx" /> 


                      </Table>

                    </div>


                </div>

        )
    
}
export default Polynomial_Regress;