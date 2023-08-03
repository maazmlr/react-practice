import React from "react";
import '../App.css'
import logo from '../assets/logo.png'
function MainContent(){
    return(
        <div className="main-content">
        <h1 className="main-heading">Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>

        </ul>
        </div>
    )
}
export {MainContent}