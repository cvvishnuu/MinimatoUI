import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import './Register.css';


class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            canteenName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            isRegistered:'false'
        }
    }

    onCanteenNameChange = (event) => {
        this.setState({canteenName: event.target.value})
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPhoneNumberChange = (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onConfirmPasswordChange = (event) => {
        this.setState({confirmPassword: event.target.value})
    }
   
    onSubmit=(event)=>{
        event.preventDefault()
        const {canteenName,email,phoneNumber,password,confirmPassword} = this.state;
        if (password===confirmPassword){
          axios.post('http://localhost:5000/business/signup',{
                canteenName: canteenName,
                email: email,
                phoneNumber: phoneNumber,
                password: password
            })
            .then(res => {
                if (res.data.confirm ==='true'){
                    console.log('working');
                    this.setState({isRegistered:'true'});
                }
            })

            .catch(err => alert(err))
        } 
        else{
            alert('it doent match');
        }
    }
    render() {
        if(this.state.isRegistered === 'true'){
            return <Redirect to={{pathname :'/business/signin'}}/>
       }
        return (
            <div className = "register-container">
                <h4>MINIMATO | REGISTER </h4>
                <form onSubmit={this.onSubmit}>
                    <div className = "user-box-register">
                        <input 
                            type = "text" 
                            name = "canteen_name"  
                            required 
                            onChange={this.onCanteenNameChange}
                        />
                        <label>Canteen Name</label>
                    </div>
                    <div className = "user-box-register">
                        <input 
                            type = "email" 
                            name = "email"  
                            onChange={this.onEmailChange}  
                            required
                        /> 
                        <label>Email</label>
                    </div>
                    <div className = "user-box-register">
                        <input 
                            type = "tel" 
                            name = "phone_no"  
                            required 
                            onChange={this.onPhoneNumberChange}
                        /> 
                        <label>Phone Number</label>
                    </div>
                    <div className = "user-box-register">
                        <input 
                            type = "password" 
                            name = "password"  
                            required 
                            onChange={this.onPasswordChange}
                        />
                        <label>Password</label>
                    </div>
                    <div className = "user-box-register">
                        <input 
                            type = "password" 
                            name = "confirm_password"  
                            required 
                            onChange={this.onConfirmPasswordChange}
                        />
                        <label>Confirm Password</label>
                    </div>
                    <input className = "register-submit" 
                        type='submit' 
                        value='submit' 
                    />
                </form>
                <p style = {{position: "fixed", bottom: 75}}>Already Registered ? <a href = "http://localhost:3000/business/signin">Login</a></p>   
            </div>
        )
    }
}

export default Register;