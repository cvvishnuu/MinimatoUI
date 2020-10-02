import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';  
 
const Navigation = () => {
    return (
        <nav className = "navigation">
            <h4 className = 'logo'>MINIMATO</h4>
            <ul className = "nav-links">
                <li >
                    <Link to = "/business/signin" style = {{position:"fixed", right: 200, top: 20}}>LOGIN</Link>
                 </li>
                <li > 
                    <Link to = '/business/signup' style = {{position:"fixed", top: 20, right: 50}}>REGISTER</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;


