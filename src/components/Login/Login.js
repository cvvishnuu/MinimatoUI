import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>MiniMato</h1>
                <form className="login-container">
                    <input type="email" name="email" placeholder="Email" required/> <br/>
                    <input type="password" name="password" placeholder="Password " required /><br/> 
                    <input type="submit" value="submit"/>
                </form>

            </div>
            
        )
    }
}

export default Login;