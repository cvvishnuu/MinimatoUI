import React, { useState } from "react";
import axios from 'axios'
import { Redirect, useHistory } from "react-router-dom";

const AddFoodItem = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    food_name: "",
    quantity:"",
    price:"",
  });
 
  const [flag,setFlag]=useState(false)

  const { food_name, quantity,price} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  

  const onSubmit = async e => {
    e.preventDefault();

    if(window.localStorage.getItem('menu')== null){
      window.localStorage.setItem('menu','[]')
    }
    let arr=JSON.parse(window.localStorage.getItem('menu'))
    arr.push(user)
    window.localStorage.setItem('menu',JSON.stringify(arr))
    setFlag(true)
    console.log(window.localStorage.getItem('menu'))


  };
  if(flag){
    return <Redirect to='/business/profile/primary_menu' />
  }else{
  return (
    
    <div className="container">
        
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Food</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Food Name"
              name="food_name"
              required
              value={food_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter food quantity"
              name="quantity"
              value={quantity}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter food price"
              name="price"
              required
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          
          <button className="btn btn-primary btn-block">Add Food Item</button>
        </form>
      </div>
      
    </div>
  );}
};

export default AddFoodItem;
