import React, { useState , useEffect} from "react";
import './App.css';

import { Select,Table} from 'antd';

import 'antd/dist/antd.css';
import axios from 'axios';


const { Column } = Table;
const { Option } = Select;

function Quadratic_inter_N() {

    let [x, setx] = useState();
    let [x0, setx0] = useState();
    let [x1, setx1] = useState();
    let [x2, setx2] = useState();
    let [fx0, setfx0] = useState();
    let [fx1, setfx1] = useState();
    let [fx2, setfx2] = useState();


    const queue_data = []

    const [datashow, setdatashow] = useState();

    const [getafcs, setgetafcs] = useState();
    const [getax, setgetax] = useState();
    let [getaX0, setgetaX0] = useState()
    let [getaFX0, setgetaFX0] = useState()
    let [getaX1, setgetaX1] = useState()
    let [getaFX1, setgetaFX1] = useState()
    let [getaX2, setgetaX2] = useState()
    let [getaFX2, setgetaFX2] = useState()
  
      useEffect(() => {
        axios.get("http://localhost:3001/api/users/showquainnew").then(res => {
  
          const tempfcs = []
          const tempx = []
          const tempX0 = []
          const tempFX0 = []
          const tempX1 = []
          const tempFX1 = []
          const tempX2 = []
          const tempFX2 = []

          for (let i = 0; i < res.data.data.length; i++) {
            tempfcs.push(<Option key={i} value={i} label={res.data.data[i].x}>x : {res.data.data[i].x}  <br/> x0 : {res.data.data[i].x0}  <br/> fx0: {res.data.data[i].fx0} 
                                                                            <br/> x1 : {res.data.data[i].x1}  <br/> fx1: {res.data.data[i].fx1}
                                                                            <br/> x2 : {res.data.data[i].x2}  <br/> fx2: {res.data.data[i].fx2}</Option>)
            tempx.push(res.data.data[i].x)
            tempX0.push(res.data.data[i].x0)
            tempFX0.push(res.data.data[i].fx0)
            tempX1.push(res.data.data[i].x1)
            tempFX1.push(res.data.data[i].fx1)
            tempX2.push(res.data.data[i].x2)
            tempFX2.push(res.data.data[i].fx2)
  
          }
          setgetafcs(tempfcs)
          setgetax(tempx)
          setgetaX0(tempX0)
          setgetaFX0(tempFX0)
          setgetaX1(tempX1)
          setgetaFX1(tempFX1)
          setgetaX2(tempX2)
          setgetaFX2(tempFX2)
        })
      }, [])
  
  
      function menu(value){
       
            setx(getax[value])
            setx0(getaX0[value])
            setfx0(getaFX0[value])
            setx1(getaX1[value])
            setfx1(getaFX1[value])
            setx2(getaX2[value])
            setfx2(getaFX2[value])
  
      }

    const trap = () => {


        const eror = (fx) => ((-0.3202-fx)/-0.3202)*100
        var fx,c0,c1,c2

        c0 = fx0

        c1 = (fx1-fx0)/(x1-x0)

        c2 = (((fx2-fx1)/(x1-x0)) - c1) / (x2-x0)

        fx = c0+(c1*(x-x0))+(c2*(x-x0)*(x-x1))

        queue_data.push({

            c0:c0.toFixed(6),
            c1:c1.toFixed(6),
            c2:c2.toFixed(6),

            fx:fx.toFixed(6),

            error:eror(fx).toFixed(2)+"%"

        });

        setdatashow(queue_data)
      }

      function set() {

        setx(3.2);
        setx0(2);
        setfx0(0.2239);
        setx1(3);
        setfx1(-0.2601);
        setx2(4);
        setfx2(-0.3971);

    }

    const span = (<h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>);

        return(

                <div className = "App">

                    <div className = "up-extext">

                        <h1> Quadratic Interpolation (Newton) </h1>     

                    </div>

                    <div className = "text-topic">


                          <h2> X </h2>

                          <input

                              type="number"
                              placeholder="Input X" 
                              value={x}
                              onChange={event => setx(event.target.value)} 

                          />


                          <h2> x0 {span}{span} fx0 {span}{span} x1 {span}{span} fx1 {span}{span} x2 {span}{span} fx2 </h2>

                                  <input

                                        type="number"
                                        placeholder="0" 
                                        value={x0}
                                        onChange={event => setx0(event.target.value)} 

                                    />

                                  <input

                                        type="number"
                                        placeholder="0" 
                                        value={fx0}
                                        onChange={event => setfx0(event.target.value)} 

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
                                  <input
                                      type="number"
                                      value={x2}
                                      onChange={e => setx2(+e.target.value)}
                                      placeholder="0"
                                  />

                                  <input
                                      type="number"
                                      value={fx2}
                                      onChange={e => setfx2(+e.target.value)}
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

                        <Column title="C0" dataIndex="c0" key="c0" />
                        <Column title="C1" dataIndex="c1" key="c1" />
                        <Column title="C2" dataIndex="c2" key="c2" />
                        <Column title="Fn" dataIndex="fx" key="fx" />
                        <Column title="Error" dataIndex="error" key="error" />
                      </Table>

                    </div>


                </div>

        )
    
}
export default Quadratic_inter_N;