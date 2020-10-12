import React from 'react';
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile'


const Rout = () => {
    // constructor() {
    //     super();
    //     this.state = {
    //         protected: false
    //     }
    // }

    // componentDidMount() {
    //     this.checkLocalStorage()
    // }

    // checkLocalStorage = () => {
    //     const store = localStorage.getItem('Authorization');
    //     if(store) {
    //         this.setState({protected: true});
    //     }
    // }
    
        // if(this.state.protected) {
        //     return(
        //         <Router>
        //             <div>
        //                 <Switch>
        //                     <Route path = '/business/profile'>
        //                         <h1>This is the profile</h1>
        //                     </Route>
        //                 </Switch>
        //             </div>
        //         </Router>
        //     )
        // }
    return ( 
         <Router >
             <div>
                <Switch>
                    {/* <Route exact path = '/'>
                        <Navigation/>
                        <DefaultComponent />
                    </Route> */}
                    <Route path = '/business/signup'>
                        <Navigation/>
                        <Register/>
                    </Route>
                    <Route path = "/business/signin">
                        <Navigation/>
                        <Login/>
                    </Route>
                    {/* <Protectedroute path='/business/profile' Component = {profile} /> */}
                    {/* {localStorage.getItem('Authorization')?<Redirect to = '/business/profile'/>:<Redirect to = {{path:'/business/signin'}}/>}
                    {localStorage.getItem('Authorization')?<Route path='/business/profile' component={profile}/>:<Redirect to = {{path:'/business/signin'}}/>} */}
                    <Route path = '/business/profile' render={()=> localStorage.getItem('Authorization')? <Profile/>: <Redirect to = '/business/signin'/>}/>
                </Switch>
            </div>
        </Router>
    )   
}

 
export default Rout;


