import React from 'react';
import "../assets/styles/header.css";
import logo from "../assets/imgs/logo.gif"
const Header=()=>{
    return(
        <div className='headerContainer'>
            <div className='headerWrapper'>
                <div>
                    <img src={logo}/>
                </div>
                <h1>My Budget App</h1>
            </div>
        </div>

    )

}

export default Header
