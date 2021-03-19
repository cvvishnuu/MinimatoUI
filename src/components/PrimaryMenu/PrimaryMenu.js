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

    onSubmit = (event) => {
        event.preventDefault();
        const starters = JSON.parse(localStorage.getItem("starters"));
        const maincourse = JSON.parse(localStorage.getItem("maincourse"));
        const deserts = JSON.parse(localStorage.getItem("deserts"));
        const drinks = JSON.parse(localStorage.getItem("drinks"));          
        const startersFoodImageArr = starters.map(({food_name, imageURL, price, status, ...rest}) => {
            // convert base64/URLEncoded data component to raw binary data held in a string
            let byteString;            
                if (rest.image.split(',')[0].indexOf('base64') >= 0)
                    byteString = atob(rest.image.split(',')[1]);
                else
                    byteString = unescape(rest.image.split(',')[1]);

                // separate out the mime component
                var mimeString = rest.image.split(',')[0].split(':')[1].split(';')[0];

                // write the bytes of the string to a typed array
                var ia = new Uint8Array(byteString.length);
                for (let j = 0; j < byteString.length; j++) {
                    ia[j] = byteString.charCodeAt(j);
                }                    
                return {image: new Blob([ia], {type:mimeString})};
            }                  
        );

        const maincourseFoodImageArr = maincourse.map(({food_name, imageURL, price, status, ...rest}) => {
            // convert base64/URLEncoded data component to raw binary data held in a string
            let byteString;            
                if (rest.image.split(',')[0].indexOf('base64') >= 0)
                    byteString = atob(rest.image.split(',')[1]);
                else
                    byteString = unescape(rest.image.split(',')[1]);

                // separate out the mime component
                var mimeString = rest.image.split(',')[0].split(':')[1].split(';')[0];

                // write the bytes of the string to a typed array
                var ia = new Uint8Array(byteString.length);
                for (let j = 0; j < byteString.length; j++) {
                    ia[j] = byteString.charCodeAt(j);
                }                    
                return {image: new Blob([ia], {type:mimeString})};
            }                  
        );
        const desertsFoodImageArr = deserts.map(({food_name, imageURL, price, status, ...rest}) => {
            // convert base64/URLEncoded data component to raw binary data held in a string
            let byteString;            
                if (rest.image.split(',')[0].indexOf('base64') >= 0)
                    byteString = atob(rest.image.split(',')[1]);
                else
                    byteString = unescape(rest.image.split(',')[1]);

                // separate out the mime component
                var mimeString = rest.image.split(',')[0].split(':')[1].split(';')[0];

                // write the bytes of the string to a typed array
                var ia = new Uint8Array(byteString.length);
                for (let j = 0; j < byteString.length; j++) {
                    ia[j] = byteString.charCodeAt(j);
                }                    
                return {image: new Blob([ia], {type:mimeString})};
            }                  
        );
        const drinksFoodImageArr = drinks.map(({food_name, imageURL, price, status, ...rest}) => {
            // convert base64/URLEncoded data component to raw binary data held in a string
            let byteString;            
                if (rest.image.split(',')[0].indexOf('base64') >= 0)
                    byteString = atob(rest.image.split(',')[1]);
                else
                    byteString = unescape(rest.image.split(',')[1]);

                // separate out the mime component
                var mimeString = rest.image.split(',')[0].split(':')[1].split(';')[0];

                // write the bytes of the string to a typed array
                var ia = new Uint8Array(byteString.length);
                for (let j = 0; j < byteString.length; j++) {
                    ia[j] = byteString.charCodeAt(j);
                }                    
                return {image: new Blob([ia], {type:mimeString})};
            }                  
        );
        const fd = new FormData();
        
        for(let i = 0; i < startersFoodImageArr.length; i++) {
            fd.append('starters', startersFoodImageArr[i].image);
        }
        for(let i = 0; i < maincourseFoodImageArr.length; i++) {
            fd.append('maincourse', maincourseFoodImageArr[i].image);
        }
        for(let i = 0; i < desertsFoodImageArr.length; i++) {
            fd.append('deserts', desertsFoodImageArr[i].image);
        }
        for(let i = 0; i < drinksFoodImageArr.length; i++) {
            fd.append('drinks', drinksFoodImageArr[i].image);
        }
        const arr = {
            starters :starters,
            maincourse: maincourse,
            deserts : deserts, 
            drinks:drinks
        }        
        const token = JSON.parse(localStorage.getItem('Authorization'))            
        const reqOne = axios.post("http://localhost:5000/business/primary_menu", {
                arr:arr,            
            },
            {
                headers : {
                    Authorization: token
                }
            }
        )
        const reqTwo = axios({
            method:'post',
            url: 'http://localhost:5000/business/uploadFoodImage',
            data: fd,            
            headers: { 
                'Authorization': token,
                'Content-Type': 'multipart/form-data'
            }
        })

        axios.all([reqOne, reqTwo]).then(axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];
            if(responseOne.data.payload.success){
                alert(responseOne.data.payload.mssg);
            } else {
                alert(responseOne.data.payload.mssg);
            }
            if(responseTwo.data.payload.success){
                alert(responseTwo.data.payload.mssg);
            } else {
                alert(responseTwo.data.payload.mssg);
            }
        }))
        // axios.post("http://localhost:5000/business/primary_menu", 
        // .then(res => console.log(res.data.message))
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