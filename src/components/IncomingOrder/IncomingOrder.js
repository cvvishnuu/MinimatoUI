import React from 'react';
import { Component } from 'react';
import AuthenticatedNav from '../AuthenticatedNav/AuthenticatedNav';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

class IncomingOrder extends Component {
    constructor() {
        super();
        this.state = {
            arr:[],
            visible: false,
            loading: false,
            foodOrder: []                        
        }
    }

    componentDidMount(){
        const token = JSON.parse(localStorage.getItem('Authorization'));
        axios.get('http://localhost:5000/business/incomingorder', {headers : {Authorization: token}})
        .then(res => {                   
            this.setState({
                arr :res.data.payload.orders                                
            })
        })
    }

    showModal = (order) => {
        this.setState({
            visible: true,
            foodOrder: order
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    onSearch=(id)=>{        
        for(let i=0;i < this.state.arr.length; i++) {
            if(id === this.state.arr[i].order_id){
                console.log("function called")
                console.log(this.state.arr[i].orders)
                return this.state.arr[i].orders
            }
        }
    }

    handleAccept = (phNo) => {        
        
        // axios.post('http://localhost:5000/api/messages', {
        //     to: '+91 8610560986',
        //     body: "Your order has been accepted."
        // })        
    }
 
    handleDecline = (event) => {
// axios.post('http://localhost:5000/api/messages', {
        //     to: '+91 8610560986',
        //     body: "We are sorry, Your order has been declined."
        // }) 
    }

    render(){        
        return (
            <div>
                <AuthenticatedNav /> 
                <div className="container">
                    <div className="py-4">
                        {/* <h1>{catogory}</h1> */}
                        <table className="table border shadow">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Order Id</th>
                                <th scope="col">Student Name</th>
                                {/* <th scope="col">Quantity</th> */}
                                <th scope="col">Phone Number</th>
                                <th>Email</th>
                                <th>Action</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            {
                            this.state.arr.map((user, index) => (
                                <tr key={index +1}>
                                <th scope="row">{user.order_id}</th>
                                <td>{user.client_name}</td>
                                {/* <td>{user.quantity}</td> */}
                                <td>{user.client_phone_no}</td>
                                <td>{user.client_email}</td>

                                <td>                                  
                                    {/* <Link
                                    className="btn btn-outline-primary mr-2"
                                    to={`/business/profile/primary_menu/${catogory}/edit/${user.food_name }`}
                                    >
                                    Edit
                                    </Link> */}
                                    <button
                                        className="btn btn-primary"                            
                                        onClick = {()=>{
                                            const order=this.onSearch(user.order_id)                                        
                                            this.showModal(order)
                                        }}
                                    //   onClick={() =>   
                                        
                                        
                                    //     {
                                        
                                    //       let arr=JSON.parse(localStorage.getItem(catogory))
                                    //       console.log(typeof Object.keys(arr).length)
                                    //       if(Object.keys(arr).length <= 1){
                                    //         localStorage.setItem(catogory,'[]')
                                    //         this.setState({ users:[]})
                                    //       }if(Object.keys(arr).length > 1){
                                    //         const index = arr.findIndex(x => x.food_name === user.food_name && x.price ===user.price);
                
                                    //             if (index !== undefined) arr.splice(index, 1);
                                    //             localStorage.setItem(catogory,JSON.stringify(arr))
                                    //             this.setState({ users:arr})
                
                                    //       }
                                    //  }}
                                    >
                                    View Order
                                    </button>
                                    <Modal
                                        visible = {this.state.visible}                        
                                        onOk = {this.handleOk}
                                        onCancel = {this.handleCancel}
                                        footer = {[
                                            <>
                                            <Button className = "btn-success" key = "back" onClick = {() => {this.handleAccept(user.client_phone_no)}}>
                                                Accept
                                            </Button> 
                                            <Button className = "btn-danger" key = "back" onClick = {() => {this.handleDecline(user.client_phone_no)}}>
                                                Decline
                                            </Button> 
                                            </>                           
                                        ]}
                                    >
                                        <div>                                            
                                            <div class="container">
                                            <h1>Order Details</h1>                                                        
                                            <table class="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th>Food Name</th>
                                                    <th>Price</th>                                                                
                                                </tr>
                                                </thead>
                                                {
                                                    this.state.foodOrder.map((item, index) => {                                                    
                                                        return(
                                                            <tbody>
                                                            <tr>
                                                                <td>{item.foodName}</td>
                                                                <td>{item.foodPrice}</td>                                                                
                                                            </tr>                                                           
                                                            </tbody>
                                                        )})}
                                            </table>
                                            </div>                                                     
                                                                                   
                                        </div>
                                    </Modal>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>               
            </div>
        ) 
    }
}

export default IncomingOrder;