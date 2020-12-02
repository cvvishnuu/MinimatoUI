import React, { useState, useEffect, Component } from 'react';
import AuthenticatedNav from '../AuthenticatedNav/AuthenticatedNav';
import { Link } from 'react-router-dom';
import Home from './Home';
import MenuNav from '../MenuNav/MenuNav';

class PrimaryMenu extends Component {
    constructor(props) {
       super(props);
       this.state = {
           catogory: props.catogory
       } 
    }
    componentDidUpdate(prevProps) {
        if(this.props.catogory !== prevProps.catogory) {
            this.setState({
                catogory: this.props.catogory
            })
        }
    }
    render() {
        const { catogory } = this.state;
        return (
            <div>
                <AuthenticatedNav />
                <h1>Primary Menu</h1>
                <Link className="btn btn-outline-dark btn-dark text-light" to={`/business/profile/primary_menu/${catogory}/add`}>Add User</Link>
                <MenuNav starters = "primary_menu/starters" mainCourse = "primary_menu/maincourse" deserts = "primary_menu/deserts" drinks = "primary_menu/drinks"  />
                <Home catogory = {catogory} />
            </div>
        )
    }
    
}

export default PrimaryMenu;