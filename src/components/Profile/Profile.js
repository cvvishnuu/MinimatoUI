import React, {Component} from 'react';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
import AuthenticatedNav from '../AuthenticatedNav/AuthenticatedNav';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                id: '',
                name: '',
                email: '',
                phoneNumber: '',
                address: ''
            }
        }
    }
    
    componentDidMount(){
        
        const token = JSON.parse(localStorage.getItem('Authorization'))
        axios.get('http://localhost:5000/business/profile', {
            headers : {
                Authorization: token
            },
            
        })
        .then(res => { 
            // console.log(res.data.payload.name);
            this.setState({
                user: {
                    id: res.data.payload.id,
                    name: res.data.payload.name,
                    email: res.data.payload.email,
                    phoneNumber: res.data.payload.phone_no,
                    address: res.data.payload.address
                }
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    render(){
        return (
            <div>
                <AuthenticatedNav />
                <h1>MiniMato</h1>

                
                {/* <h1>home page</h1>
                <h1>{this.state.user.id}</h1>
                <h1>{this.state.user.name}</h1>
                <h1>{this.state.user.email}</h1>
                <h1>{this.state.user.phoneNumber}</h1>
                <h1>{this.state.user.address}</h1> */}
            </div>
        )
    }
}

export default Profile;