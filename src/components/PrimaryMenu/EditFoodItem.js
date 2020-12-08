import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect, useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { food_namee,quantity,price } = useParams();
  const [user, setUser] = useState({
    food_name: "",
    // quantity: "",
    price: "",
    status: "true",   
  });
  const [flag,setFlag]=useState(false);
  const[arr_index,setArr]=useState()
  const[cato,setCato]=useState()



  
  const onInputChange = e => {
    
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit =  e => {
    e.preventDefault();
    // let ex_food_name=window.location.pathname.split('/')[3]
    // await axios.put(`http://localhost:5000/kiruba/update`, {user,ex_food_name})
    // .then(result => {
    //   if(result.data.success)
    //   {setFlag(true)}
    //   else
    //   {console.log("not updated properly")}})
   

     let arr=JSON.parse(localStorage.getItem(cato))
     arr[arr_index]=user
     localStorage.setItem(cato,JSON.stringify(arr))
     setFlag(true)

  };

  const loadUser = async () => {
    // console.log(window.location.pathname.split('/')[3])
    let catogory=window.location.pathname.split('/')[4]
    let food_name=window.location.pathname.split('/')[6]
    console.log(catogory)
    console.log(food_name)
    setCato(catogory)
    // 'const result = await axios.get(`http://localhost:5000/kiruba/edit/${food_name}`);
    // console.log(result.data)
    let arr=JSON.parse(localStorage.getItem(catogory))
                        // console.log(typeof Object.keys(arr).length)
                        
                        if(Object.keys(arr).length >= 1){
                          const index = arr.findIndex(x => x.food_name === food_name );

                              
                              setArr(index)
                               setUser(arr[index])}
    // setUser(result.data);
  };
  if(flag){
    return <Redirect to = {`/business/profile/primary_menu/${cato}`}/>
  }
  else{
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={user.food_name}
              name="food_name"
              value={food_namee}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder={user.quantity}
              name="quantity"
              value={quantity}
              onChange={e => onInputChange(e)}
            />
          </div> */}
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder={user.price}
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* {
            (user.status === "true")? 
            <>
              <label className="radio"><input type="radio" value="true" name={`status`} onChange = {e => onInputChange(e)} defaultChecked/>Available</label>
              <label className="radio"><input type="radio" value="false" name={`status`} onChange = {e => onInputChange(e)}/>Unavailable</label>
            </>
            :
            <>
              <label className="radio"><input type="radio" value="true" name={`status`} onChange = {e => onInputChange(e)}/>Available</label>
              <label className="radio"><input type="radio" value="false" name={`status`} onChange = {e => onInputChange(e)}/>Unavailable</label>
            </> 
          } */}
          <label className="radio"><input type="radio" value="true" name={`status`} onChange = {e => onInputChange(e)}/>Available</label>
          <label className="radio"><input type="radio" value="false" name={`status`} onChange = {e => onInputChange(e)}/>Unavailable</label>
          <button className="btn btn-warning btn-block">Update</button>
        </form>
      </div>
    </div>
  );}
};

export default EditUser;
