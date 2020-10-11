import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import DefaultComponent from './components/DefaultComponent/Default';

const Rout = () => {
    return ( 
        <Router >
            <div>
                <Switch>
                    <Route exact path = '/'>
                        <Navigation/>
                        <DefaultComponent />
                    </Route>
                    <Route path = '/business/signup'>
                        <Navigation/>
                        <Register/>
                    </Route>
                    <Route path = "/business/signin">
                        <Navigation/>
                        <Login/>
                    </Route>
                </Switch>
           </div>
        </Router>
    )
}
 
export default Rout;


//