import React from 'react';
import './Login.css';
class Login extends React.Component {
    render() {
        return (
            <div className = 'login-container'>
                 <h4>MINIMATO | LOGIN </h4>
                <form >
                    <div className = "user-box-login">
                        <input 
                            type="email" 
                            name="email"  
                            required
                        />
                        <label>Email</label>
                    </div>
                     <div className = "user-box-login">
                        <input 
                            style = {{marginBottom: "25px"}} 
                            type="password" 
                            name="password" 
                            required 
                        />
                        <label>Password</label>
                     </div>
                    <input 
                        className = "login-submit" 
                        type="submit" 
                        value="submit"
                    />
                </form>
                <p style = {{position: "fixed", top: 470}}>New to MiniMato? <a href = "http://localhost:3000/business/signup">Register</a></p>
            </div>
            
        )
    }
}

export default Login;