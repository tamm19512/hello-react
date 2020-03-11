import React, { useState } from "react";
import './App.css';


function FalsePos() {

        const [number1, setNumber1] = useState();
        const [number2, setNumber2] = useState();
        const [total, setTotal] = useState(number1 + number2);

        function calculateTotal() {

            
            setTotal(number1 + number2);
        }

        function reset() {

            setNumber1('');
            setNumber2('');
        }

        return(

            <div className = "App">

                <div className = "up-extext">

                    <h1> FalsePos </h1>     

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
                        <button onClick={reset}>Reset!</button>

                        <h2>{total}</h2>

            </div>

        )

}
export default FalsePos;
