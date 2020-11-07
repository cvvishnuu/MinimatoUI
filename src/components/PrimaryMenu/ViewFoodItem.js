import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewFoodItem = () => {
  const [user, setUser] = useState({
    food_name: "",
    quantity: "",
    price: "",
    
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const food_nam=window.location.pathname.split('/')[5]
    console.log(food_nam)
    
    let arr=JSON.parse(localStorage.getItem('menu'))
    
    for(let i=0;i<Object.keys(arr).length;i++){
       if(arr[i].food_name===food_nam ){
         setUser(arr[i])
         break;
      }
    }
    
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/business/profile/primary_menu">
        back to Home
      </Link>
      <h1 className="display-4">Food</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">ITEM: {user.food_name}</li>
        <li className="list-group-item">QUANTITY: {user.quantity}</li>
        <li className="list-group-item">PRICE: {user.price}</li>
        
      </ul>
    </div>
  );
};

export default ViewFoodItem;
