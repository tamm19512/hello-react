import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css';


function FalsePos() {

        const [number1, setNumber1] = useState(0);
        const [number2, setNumber2] = useState(0);
        const [total, setTotal] = useState(number1 + number2);

        function calculateTotal() {
            setTotal(number1 + number2);
          }

        return(

            <div className = "App">

                <div className = "up-extext">

                    <h3> FalsePos </h3>     

                </div>

                <div className = "text-topic">
                    

                        <h1> input A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; input B </h1>

                        
                            <input
                                type="number"
                                value={number1}
                                onChange={e => setNumber1(+e.target.value)}
                                placeholder="0"
                            />
     
                    
                            <input
                                type="number"
                                value={number2}
                                onChange={e => setNumber2(+e.target.value)}
                                placeholder="0"
                            />
                        

                </div>
 

                        <button onClick={calculateTotal}>Add Them!</button>
                        <h2>{total}</h2>

            </div>

        )

}
const rootElement = document.getElementById("root");
ReactDOM.render(<FalsePos />, rootElement);
export default FalsePos;
