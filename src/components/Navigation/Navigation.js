import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import './Navigation.css';  
 
class Navigation extends React.Component {
   constructor() {
      super();
       this.state = {
           value:'',
       }
   }
    render() {
        return (
            <nav>
                <h4 className = 'logo'>MINIMATO{this.state.value} </h4>
                <ul className = "nav-links">
                    <li onClick={()=> this.setState({value:'| LOGIN'})}>
                        <Link to = "/business/signin">LOGIN</Link>
                    </li>
                    <li onClick = {()=> this.setState({value:'| REGISTER'})}> 
                        <Link to = '/business/signup'>REGISTER</Link>
                    </li>
                </ul>
            </nav>
        )    
    }
    
}

export default Navigation;


