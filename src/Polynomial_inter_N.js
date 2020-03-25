import React, { useState , useEffect} from "react";
import './App.css';

import { Select,Table,InputNumber} from 'antd';

import 'antd/dist/antd.css';
import axios from 'axios';


const { Column } = Table;
const { Option } = Select;

function Polynomial_inter_N() {

    let [n, setn] = useState(2);
    let [x1, setx1] = useState();
    var x = []

    var temp 
    var xx = []
    var xy = []

    const queue_data = []

    const [datashow, setdatashow] = useState();

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


        const eror = (fx) => ((-0.3202-fx)/-0.3202)*100
        
        var fx,c,i=0,round = 1,q=1

        fx = xy[0]


      for(var j=n;j!=1;j--){

        for(i=0;i<=n;i++){

          c = (xy[i+1]-xy[i])/(xx[i+round]-xx[i])

          xy[i] = c

        }

        for(var k=0;k<round;k++){    

          q=q*(x1-xx[k])

        }

        q=q*xy[0]

        fx = fx+q

        queue_data.push({

          fx:q.toFixed(6),
          ans:fx.toFixed(6)

      });

        round++
        n--;
        q=1

      }

        queue_data.push({

            ans:fx.toFixed(6),
            error:eror(fx).toFixed(2)+"%"
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

                        <h1> Polynomial Interpolation (Newton) </h1>     

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

      

                    <div className = "App-table">

                      <Table style={{ marginTop: 30 }} dataSource={datashow}>


                        <Column title="sumFx" dataIndex="fx" key="fx" /> 
                        <Column title="Ans" dataIndex="ans" key="ans" />
                        <Column title="Error" dataIndex="error" key="error" />
                      </Table>

                    </div>


                </div>

        )
    
}
export default Polynomial_inter_N;