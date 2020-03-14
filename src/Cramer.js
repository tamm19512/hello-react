import React, { useState} from "react";
import './App.css';

import { Select,Table,InputNumber, Button,Layout} from 'antd';

import 'antd/dist/antd.css';

const { Content } = Layout;

const { det } = require("mathjs");
const { Column } = Table;

function Cramer() {

    let [n, setn] = useState(2);
    const queue_data = []

    var temp 
    var matrixA = []
    var matrixB = []
    var x = []
    

    const [datashow, setdatashow] = useState();


    const createInput = () => {
      temp = Array.from(Array(n), _ => Array(n + 1).fill(0))
      matrixA = Array.from(Array(n), _ => Array(n).fill(0))
      matrixB = Array(n).fill(0)
      return (
        <div >
          <tr>
            <th></th>
            {createHead()}
            {(n > 0) ? <th>b</th> : ""}
          </tr>
          {createRow()}
        </div>
      );
    }
  
    const createHead = () => {
      return temp.map((x, j) => <th>x{j + 1}</th>);
    }
  
    const createRow = () => {
      return temp.map((x, i) => (
        <tr>
          <th>{i + 1}</th>
          {createCol(i)}
        </tr>
      ));
    }
  
    const createCol = (i) => {
      return temp[0].map((x, j) => (
        <td>
          <InputNumber defaultValue={0} size="small" onChange={value => {
            if (j === n) {
              matrixB[i] = value
            } else {
              matrixA[i][j] = value
            }
          }}
          />
        </td>
      ));
    }

    const calmatrix = () =>{








      setdatashow(queue_data)

    }

    const show = () => {
      
      return(

        <div>

           <Table style={{ marginTop: 30 }} dataSource={datashow}>

                <Column title="det" dataIndex="i" key="i" />
 
                <Column title="Ans" dataIndex="error" key="error" />

           </Table>



        </div>
      );

    }


    function set() {

        setn(3);
    }

    const span = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);

        return(



                <div className = "App">

                    <div className = "up-extext">

                        <h1> Cramer's Rule </h1>     

                    </div>

                    <div className = "text-topic">


                          <h2>Input n</h2>


                          <input

                              type="number"
                              min = {2}
                              value={n}
                              onChange={e => setn(+e.target.value)}
                              placeholder="0"
                              
                          />

                    </div>

                    <button onClick={calmatrix}>Add Them!</button>

                    {span}
                    
                    <button onClick={set}>Set!</button>

                    {span}

                   
                      

                    {createInput(n)}

                    {show()}
                      
                      
                      


                </div>


        )
    
}
export default Cramer;