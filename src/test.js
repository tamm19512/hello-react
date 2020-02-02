import React from 'react';
import logo from './yunagi.svg';
import './App.css';


const test = () =>{

    return(
        <div className = "App">
         <section>

                <img src={logo} className="App-logo" alt="logo" />
                <h1>悠那_湯凪 Pixiv</h1>

            </section>

            <a
                className="App-link"
                href="https://www.pixiv.net/en/users/12628990"
            >
                <h1>My Pixiv</h1>

            </a>
        </div>
    )

    

}

export default test;