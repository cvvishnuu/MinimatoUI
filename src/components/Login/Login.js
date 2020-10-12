import React from 'react';
import axios from 'axios';
import './Login.css';
import { Redirect } from 'react-router';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email : '',
            password: '',
            errorMessage: '',
            isAuthenticated: false
        }
    }

    componentDidMount() {
        this.checkStore();
    }

    checkStore() {
        const store = JSON.parse(localStorage.getItem('Authorization'));
        if(store) {
            this.setState({
                isAuthenticated: true
            })
        }
    }
    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    
    onPasswordChange = (event) => {
        this.setState({
            password:event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            if(email === '' || password === '' ) {
                alert("The input fields are empty");
             } else {
                axios.post('http://localhost:5000/business/login',{
                    email: email,
                    password: password
                }, {
                    withCredentials: true
                }).then(res => {
                    if(!res.data.success){
                        this.setState({errorMessage: "Incorrect Email or Password"})
                    } else {
                        const token = JSON.stringify(res.data.token);
                        localStorage.setItem('Authorization', token);
                        this.checkStore();
                    }
                }).catch(err => {
                    alert("sorry there has been an error")
                })
            }
        } 
        catch (error) {
            alert("sorry there has been an error");
        }
    }

    render() {
        if(this.state.isAuthenticated) {
            return <Redirect to = {{pathname :'/business/profile'}}/>
        }
        return (
            <div className = 'login-container'>
                 <h4>MiniMato | Login </h4>
                <form >
                    <div className = "user-box-login">
                        <input 
                            type="email" 
                            name="email"  
                            required
                            onChange={this.onEmailChange}
                        />
                        <label>Email</label>
                    </div>
                     <div className = "user-box-login">
                        <input 
                            style = {{marginBottom: "25px"}} 
                            type="password" 
                            name="password" 
                            required 
                            onChange={this.onPasswordChange}
                        />
                        <label>Password</label>
                     </div>
                    <input 
                        className = "login-submit" 
                        type="submit" 
                        value="submit"
                        onClick={this.onSubmit}
                    />
                </form>
                <p style = {{position: "fixed", top: 470}}>New to MiniMato? <a href = "http://localhost:3000/business/signup">Register</a></p>
                <p style = {{marginTop: "50px", color: "red"}}>{this.state.errorMessage}</p>
            </div>
            
        )
    }
}

export default Login;