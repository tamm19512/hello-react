import React, { useState} from "react";
import './App.css';

import { Select,Table,InputNumber, Button,Layout} from 'antd';

import 'antd/dist/antd.css';

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
          <th>{i + 1} . {span2} </th>
          {createCol(i)}
        </tr>
      ));
    }
  
    const createCol = (i) => {
      return temp[0].map((x, j) => (
        <td>
          <InputNumber defaultValue={0} size="large" onChange={value => {
            if (j === n) {
              matrixB[i] = value
            } else {
              matrixA[i][j] = value
            }
          }}
          />
          {span3}

        </td>
        
      ));
    }

    const calmatrix = () =>{

      var deta = det(matrixA)

      var ans = 0

      var deta2


      for(var i=0;i<n;i++){

        //var matrix = matrixA
        var matrix = JSON.parse(JSON.stringify(matrixA));

        for(var j=0;j<n;j++){
          
          matrix[j][i] = matrixB[j];
        
        }

        deta2 = det(matrix)

        ans = deta2/deta

        queue_data.push({
          i: "x"+i,
          deta: deta.toFixed(6),
          deta2: deta2.toFixed(6),
          ans: ans.toFixed(6)
        });

        
      }


      setdatashow(queue_data)

    }

    let show = () => {
      
      return(

        <div>

           <Table style={{ marginTop: 30 }} dataSource={datashow}>

                <Column title="i" dataIndex="i" key="i" />

                <Column title="deta" dataIndex="deta" key="deta" />

                <Column title="deta[i]" dataIndex="deta2" key="deta2" />
 
                <Column title="Ans" dataIndex="ans" key="ans" />

           </Table>



        </div>
      );

    }


    function set() {

        setn(3);
    }

    const span = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);
    const span2 = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);
    const span3 = (<h>&nbsp;&nbsp;&nbsp;</h>);

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
                    

                      
                    <div className = "App-table" style={{ marginTop: 30 }}>
                      
                    {createInput(n)}{span}
                    
                    </div>

                    <div className = "App-table">
                      
                    {show()}

                    </div>
                      
                      
                      


                </div>


        )
    
}
export default Cramer;