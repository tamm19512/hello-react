import React, { useState , useEffect} from "react";
import './App.css';

import { Select,Table,InputNumber} from 'antd';

import 'antd/dist/antd.css';
import axios from 'axios';


const { Column } = Table;
const { Option } = Select;

function Polynomial_inter_N() {

    let [n, setn] = useState(2);
    let [x1, setxx] = useState();
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
          setxx(getafx[value])

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


        const eror = (fx) => ((-0.3202-fx)/-0.3202)*100
        var fx,c0=0,c1=0,c2

        for(var i=0;i<n;i++){

            c0 = c0+xx[i];
            c1 = c1+xy[i];

        }

        queue_data.push({

            c0:c0.toFixed(6),
            c1:c1.toFixed(6),



        });

        setdatashow(queue_data)
      }

      function set() {

        setn(2);
        setxx(3.2);

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
                              value={xx}
                              onChange={event => setxx(event.target.value)} 

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

                        <Column title="C0" dataIndex="c0" key="c0" />
                        <Column title="C1" dataIndex="c1" key="c1" />
                        <Column title="C2" dataIndex="c2" key="c2" />
                        <Column title="Fxn" dataIndex="fx" key="fx" />
                        <Column title="Error" dataIndex="error" key="error" />
                      </Table>

                    </div>


                </div>

        )
    
}
export default Polynomial_inter_N;