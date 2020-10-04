import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';  
 

const Navigation = () => {
    return (
        <div>
            <nav className = "navigation">
                <h4 className = 'logo'>MINIMATO</h4>
                <ul className = "nav-links">
                <Link to = "/business/signin" style = {{position:"fixed", right: 200, top: 20}}>
                    <li>LOGIN</li>
                </Link>
                <Link to = '/business/signup' style = {{position:"fixed", top: 20, right: 50}}>
                    <li>REGISTER</li>
                </Link>
                </ul>
            </nav>
        </div>
    )
}
     
export default Navigation;


    