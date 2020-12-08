import React, { useState, useEffect, Component } from 'react';
import AuthenticatedNav from '../AuthenticatedNav/AuthenticatedNav';
import { Link } from 'react-router-dom';
import Home from './Home';
import MenuNav from '../MenuNav/MenuNav';
import axios from 'axios';

class PrimaryMenu extends Component {
    constructor(props) {
       super(props);
       this.state = {
           catogory: props.catogory
       } 
    }

    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('Authorization'))
        const starters = (JSON.parse(localStorage.getItem('starters'))).length
        const maincourse = (JSON.parse(localStorage.getItem('maincourse'))).length
        const deserts = (JSON.parse(localStorage.getItem("deserts"))).length
        const drinks = (JSON.parse(localStorage.getItem("drinks"))).length
        console.log(drinks)
        if((starters === 0 && maincourse === 0 && deserts === 0 && drinks === 0)){
            console.log("imi working bro")
            axios.get("http://localhost:5000/business/primary_menu", {
                headers : {
                    Authorization: token
                }
            })
            .then(res => {
                console.log(res.data) 
                const { starters, maincourse, deserts, drinks } = res.data;
                localStorage.setItem("starters", JSON.stringify(starters));
                localStorage.setItem("maincourse", JSON.stringify(maincourse));
                localStorage.setItem("deserts", JSON.stringify(deserts));
                localStorage.setItem("drinks", JSON.stringify(drinks));
            })
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.catogory !== prevProps.catogory) {
            this.setState({
                catogory: this.props.catogory
            })
        }
    }

    onSubmit = () => {
        const starters = JSON.parse(localStorage.getItem("starters"));
        const maincourse = JSON.parse(localStorage.getItem("maincourse"));
        const deserts = JSON.parse(localStorage.getItem("deserts"));
        const drinks = JSON.parse(localStorage.getItem("drinks"));  
        const arr = {
            starters :starters,
            maincourse: maincourse,
            deserts : deserts, 
            drinks:drinks
        }
        const token = JSON.parse(localStorage.getItem('Authorization'))
        // const userInfo = JSON.parse(localStorage.getItem('User'));
        // const { id } = userInfo;    
        axios.post("http://localhost:5000/business/primary_menu", {
            arr:arr,
            // id:id
        },
        {
            headers : {
                Authorization: token
            }
        })
        .then(res => console.log(res.data.message))
    }

    render() {
        const { catogory } = this.state;   
        return (
            <div>
                <AuthenticatedNav />
                <h1>Menu</h1>
                <Link className = "btn btn-outline-dark btn-dark text-light" to = {`/business/profile/primary_menu/${catogory}/add`}>Add Food Item</Link>
                <button className = "btn btn-success text-light" onClick = {this.onSubmit}>Submit</button>
                <MenuNav starters = "primary_menu/starters" mainCourse = "primary_menu/maincourse" deserts = "primary_menu/deserts" drinks = "primary_menu/drinks"  />
                <Home catogory = {catogory} />
            </div>
        )
    }
    
}

export default PrimaryMenu;