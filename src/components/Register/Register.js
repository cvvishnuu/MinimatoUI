import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            canteenName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: ''
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
        const {canteenName,email,phoneNumber,password,confirmPassword} = this.state;
        if (password===confirmPassword){
            console.log(password);
            console.log(confirmPassword);
            axios.post('http://localhost:5000/business/signup',{canteenName,email,phoneNumber,password})
            .then(res => {
                if (res){
                    alert('its working')
                } else {
                    alert('aint working');
                }
            })
        }
        else{
            alert('it doent match');
        }

        
    }
    render() {
        const {canteenName,email,phoneNumber,password,confirmPassword} = this.state;
        return (
            <div>
                <h3>MiniMato</h3>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type = "text" 
                        name = "canteen_name" 
                        placeholder = "Canteen Name" 
                        required 
                        onChange={this.onCanteenNameChange}
                    /> <br/>
                    <input 
                        type = "email" 
                        name = "email" 
                        placeholder = "email" 
                        onChange={this.onEmailChange}  
                        required
                    /> <br/>
                    <input 
                        type = "tel" 
                        name = "phone_no" 
                        placeholder = "Phone number" 
                        required 
                        onChange={this.onPhoneNumberChange}
                    /> <br/>
                    <input 
                        type = "password" 
                        name = "password" 
                        placeholder = "Password" 
                        required 
                        onChange={this.onPasswordChange}
                    /> <br/>
                    <input 
                        type = "password" 
                        name = "confirm_password" 
                        placeholder = "Confirm Password" 
                        required 
                        onChange={this.onConfirmPasswordChange}
                    /> <br/>
                    <input 
                        type='submit' 
                        value='submit' 
                    />
                </form>   
            </div>
            
            
        )
    }
}

export default Register;