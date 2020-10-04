import React from 'react';
import axios from 'axios';
import './Login.css';
import {Redirect} from 'react-router-dom';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email : '',
            password: '',
            isAuthenticated: 'false'
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
        axios.post('http://localhost:5000/business/login',{
                email: email,
                password: password
        }).then(res => {
            if(res.data.confirmation === 'true'){
                this.setState({
                    isAuthenticated: 'true'
                })
                console.log(this.state.isAuthenticated)
            } else {
                this.setState({
                    isAuthenticated: 'false'
                })
                console.log(this.state.isAuthenticated)
            }
        })
    }

    render() {

        if(this.setState.isAuthenticated === 'true') {
            return <Redirect to = {{pathname :'/business/signup'}}/>
        } //else {
        //     return <Redirect to = {{pathname :'/business/signin'}}/>
        // }

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
            </div>
            
        )
    }
}

export default Login;