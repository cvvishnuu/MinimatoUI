import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers =  () => {
    
    if(window.localStorage.getItem('menu')== null){
      window.localStorage.setItem('menu','[]')
    }
    let arr =JSON.parse(window.localStorage.getItem('menu'))
    setUser(arr)
    
  };
  
  

  return (
    <div className="container">
      <div className="py-4">
        <h1>Menu Items</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Food Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index +1}>
                <th scope="row">{index +1}</th>
                <td>{user.food_name}</td>
                <td>{user.quantity}</td>
                <td>{user.price}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/business/profile/primary_menu/view/${user.food_name}`}>
                    View
                    
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/business/profile/primary_menu/edit/${user.food_name }`}
                   
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() =>   
                      
                      
                      {
                        
                        let arr=JSON.parse(localStorage.getItem('menu'))
                        console.log(typeof Object.keys(arr).length)
                        if(Object.keys(arr).length <= 1){
                          localStorage.setItem('menu','[]')
                          setUser([])
                        }if(Object.keys(arr).length > 1){
                          const index = arr.findIndex(x => x.food_name === user.food_name && x.price ===user.price);

                              if (index !== undefined) arr.splice(index, 1);
                              localStorage.setItem('menu',JSON.stringify(arr))
                               setUser(arr)
                              
                          

                        }
                        
                     
                   }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
