import React from 'react';
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import TodaysMenu from './components/TodaysMenu/TodaysMenu';
import PrimaryMenu from './components/PrimaryMenu/PrimaryMenu';
import IncomingOrder from './components/IncomingOrder/IncomingOrder';
import OrderHistory from './components/OrderHistory/OrderHistory';
import AddFoodItem from './components/PrimaryMenu/AddFoodItem'
import ViewFoodItem from './components/PrimaryMenu/ViewFoodItem'
import EditFoodItem from './components/PrimaryMenu/EditFoodItem'



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
                    <Route exact path = '/business/profile' render={()=> localStorage.getItem('Authorization')? <Profile/>: <Redirect to = '/business/signin'/>}/>
                    <Route path = '/business/profile/todays_menu' render={()=> localStorage.getItem('Authorization')? <TodaysMenu/>: <Redirect to = '/business/signin'/>}/>
                    <Route exact path = '/business/profile/primary_menu' render={()=> localStorage.getItem('Authorization')? <PrimaryMenu/>: <Redirect to = '/business/signin'/>}/>
                    <Route path = '/business/profile/primary_menu/add' render={()=> localStorage.getItem('Authorization')? <AddFoodItem/> : <Redirect to = '/business/signin'/>}/>  
                    
                    <Route path = '/business/profile/primary_menu/view/:food_name' render={()=> localStorage.getItem('Authorization')? <ViewFoodItem/> : <Redirect to = '/business/signin'/>}/>  
                    <Route path = '/business/profile/primary_menu/edit/:food_name' render={()=> localStorage.getItem('Authorization')? <EditFoodItem/> : <Redirect to = '/business/signin'/>}/>  

                    {/* <Route exact path="/view/:food_name" component={User} /> */}
                    
                    
                    
                    <Route path = '/business/profile/incoming_orders' render={()=> localStorage.getItem('Authorization')? <IncomingOrder/>: <Redirect to = '/business/signin'/>}/>
                    <Route path = '/business/profile/order_summary' render={()=> localStorage.getItem('Authorization')? <OrderHistory/>: <Redirect to = '/business/signin'/>}/>
                </Switch>
            </div>
        </Router>
    )   
}

 
export default Rout;


