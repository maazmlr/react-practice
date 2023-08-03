import React from "react";
import reactLogo from '../assets/react.svg'

function Navbar(){
    return(
        <navbar className='navbar'>
            <img src={reactLogo} alt="" className="img"/>
            <h2>ReactLogo</h2>
            <h3>React Course-Project1</h3>
        </navbar>
        )
}
export{Navbar}