import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';

const ProtectedRoutes = (props) => {
    const { userObject } = props;
    console.log(userObject)
    return(
        <div>
        <h1>hello</h1>
            <Router>
            <Navigation />
                <Switch>
                    <Route path = '/business/home' component = {Profile} />
                </Switch>
            </Router>
            <h1>
                {userObject.name}
            </h1>
        </div>
    )
}

export default ProtectedRoutes;