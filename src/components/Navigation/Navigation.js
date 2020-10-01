import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';  
 
class Navigation extends Component {
   constructor(props) {
      super(props);
       this.state = {
           value:'',
       }
   }
   
   onRouteChange = () => {
       if(window.location.pathname === "/business/signin"){
        this.setState({value:" | LOGIN"})
       } else {
        this.setState({value:" | REGISTER"})
       }
    }
   
    render() {
        return (
            <nav className = "navigation">
               <h4 className = 'logo'>MINIMATO</h4>
                <ul className = "nav-links">
                    <li onClick={this.onRouteChange}>
                        <Link to = "/business/signin" style = {{position:"fixed", right: 200, top: 20}}>LOGIN</Link>
                    </li>
                    <li onClick={this.onRouteChange} > 
                        <Link to = '/business/signup' style = {{position:"fixed", top: 20, right: 50}}>REGISTER</Link>
                    </li>
                </ul>
            </nav>
        )    
    }
    
}

export default Navigation;


