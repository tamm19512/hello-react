import React, { Component } from 'react'
import logo from './logo.svg';

import { Card, Input, Button, Table, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { range, compile } from 'mathjs'




class Bisection extends Component{

    render() {

        return(

                <div className = "App">
                <section>

                        <img src={logo} className="App-logo" alt="logo" />
                        <h1>How to create animated page transitions in React?</h1>

                    </section>
                </div>

        );
    
    }
    

}
export default Bisection;