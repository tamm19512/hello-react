import React from 'react';

import { render } from "react-dom";
import { C2C } from "react-c2c";
import styles from "./styles.js";

var value1,value2



class FalsePos extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          value1: "" ,value2: "",
          clicks:0,show: true
        };
      }

      
    
      IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      ToggleClick = () => {
        this.setState({ show: !this.state.show });
      }

      

    render(){

        return(

            <div className = "App">

                <div className = "up-extext">

                    <h3> FalsePos </h3>     

                </div>

                <div className = "text-topic">
                    
                    <div className = "textcolumn">
                        <p> input A </p>

                            <input

                                value1={this.state.value1}
                                onChange={({ target: { value } }) =>
                                this.setState({ value })}
                            />

                        
                    </div>

                    <div className = "textcolumn">
                        <p> input B </p>

                            <input

                                value2={this.state.value2}
                                onChange={({ target: { value2 } }) =>
                                this.setState({ value2 })}
                            />

                        
                    </div>

                    <div className = "Pic-stop">

                    <button onClick={this.IncrementItem}>Click to increment by 1</button>

                    
                    </div>
                    <div className = "Pic-stop">

                    
                    <button onClick={this.ToggleClick}>
                        
                        { this.state.show ? 'Hide number' : 'Show number' }

                    </button>

                    { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }

                    </div>


                        
                
                    

                </div>

            </div>

        )

    }

    

}
render(<FalsePos />, document.getElementById("root"));
export default FalsePos;