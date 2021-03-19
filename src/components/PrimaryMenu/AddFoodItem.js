import React, { useState } from "react";
import axios from 'axios'
import { Redirect, useHistory } from "react-router-dom";


const AddFoodItem = (props) => {
  const { catogory } = props
  let history = useHistory();
  const [user, setUser] = useState({
    food_name: "",
    // quantity:"",
    price:"",    
    status: "true"
  });
  const [imageDetails, setImageDetails] = useState({
    image: null,
    imageURL: null,
  })
  
 
  const [flag,setFlag]=useState(false)

  const { food_name, price, status} = user;
  const onInputChange = e => {    
      setUser({ ...user, [e.target.name]: e.target.value });
      
    //   setUser({
    //     food_name: e.target.value,        
    //     price:e.target.value,
    //     image: e.target.files[0],
    //     imageURL: URL.createObjectURL(e.target.files[0]),
    //     status: "true"
    //   })
    // console.log(user)
    // console.log(imageDetails)
    
  };
  
  const onInputHandler = (event) => {    
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      setImageDetails({ image: reader.result, imageURL: URL.createObjectURL(file)})     
    });        
    // console.log(user)      
  }

  const onCheckBox = () => {
    setUser({...user, ...imageDetails})
  }

  const onSubmit = async e => {
    e.preventDefault();
    
    // console.log(user)
    // if(window.localStorage.getItem(catogory)== null){
    //   window.localStorage.setItem('menu','[]')
    // }
    let arr=JSON.parse(window.localStorage.getItem(catogory))
    arr.push(user)
    window.localStorage.setItem(catogory,JSON.stringify(arr))
    setFlag(true)
    // console.log(window.localStorage.getItem(catogory))
  };
  if(flag){
    return <Redirect to = {`/business/profile/primary_menu/${catogory}`} />
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
          {
            /* <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter food quantity"
              name="quantity"
              value={quantity}
              onChange={e => onInputChange(e)}
            />
          </div> 
          */
          }
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
          <div className="form-group">
            <label>Enter the food Image</label>
            <input 
                type = 'file' 
                name = 'foodPicture'                               
                onChange = {onInputHandler}
            />
          </div>  
          <div className="form-group">
            <label>Please check the checkbox</label>
            <input 
                type = 'checkbox' 
                                              
                onChange = {onCheckBox}
            />
          </div>          
          <button className="btn btn-primary btn-block">Add Food Item</button>
        </form>
      </div>
      
    </div>
  );}
}

export default AddFoodItem;
