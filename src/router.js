import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

const Rout =() => {
    return ( 
        <Router >
            <div>
                <Navigation/>
                <Switch>
                    <Route path='/business/signup'>
                        <Register/>
                    </Route>
                    <Route path="/business/signin">
                        <Login/>
                    </Route>
                </Switch>
           </div>
        </Router>
    )
}
 
export default Rout;