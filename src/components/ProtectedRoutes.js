// import React from 'react';
// import {Route, Redirect} from 'react-router-dom';
// //import Navigation from './Navigation/Navigation';
// // import Profile from './Profile/Profile';

// // const Protetedroute = (props) => {
// //      const { userObject } = props;
// //     // console.log(userObject)
// //     return(
// //         <div>
// //         <h1>this is profile component</h1>
// //             {/* <Router>
// //             <Navigation />
// //                 <Switch>
// //                     <Route path = '/business/home' component = {Profile} />

// //                 </Switch>
// //             </Router>
// //             <h1>
// //                 {userObject.name}
// //             </h1> */}
// //         </div>
// //     )
// // }
// // class ProtectedRoute extends React.Component {
// //     render() {
// //       const { component: Component, ...rest } = this.props
  
// //       return (
// //         <Route 
// //           {...rest} 
// //           render={props => (
// //             localStorage.getItem('Authorization') ?
// //               <Component {...props} /> :
// //               <Redirect to='/business/signin' />
// //           )} 
// //         />
// //       )
// //     }
// //   }

//   const ProtectedRoute = ({ component: Component, ...rest }) => {
//     return(
//       <Route 
//         {...rest} 
//         render = {(props) => {
//         const store = JSON.parse(localStorage.getItem('Authorization'))
//         if(store) {
//           return <Component {...props} />
//         } else {
//           return <Redirect to='/business/signin' />
//         } 
//       }} />
//     )
    

//   }
  


// export default ProtectedRoute;