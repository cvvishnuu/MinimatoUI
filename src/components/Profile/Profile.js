import React, {Component} from 'react';
import axios from 'axios';
import AuthenticatedNav from '../AuthenticatedNav/AuthenticatedNav';
import EditProfile from '../EditProfile/EditPtofile';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Form from 'react-bootstrap/Form';
import './Profile.css';


class Profile extends Component  {
    constructor() {
        super();
        this.state = {
            open: false,
            id: '',
            name: '',
            email: '',
            phoneNumber: '',
            address: '',    
        }
    }
    
    componentDidMount(){
        const token = JSON.parse(localStorage.getItem('Authorization'))
        axios.get('http://localhost:5000/business/profile', {
            headers : {
                Authorization: token
            },
        })
        .then(res => { 
            if(res.data.success) {
                this.setState({
                    id: res.data.payload.id,
                    name: res.data.payload.name,
                    email: res.data.payload.email,
                    phoneNumber: res.data.payload.phone_no,
                    address: res.data.payload.address 
                })
                localStorage.setItem('User', JSON.stringify({
                    id: this.state.id,
                    name: this.state.name,
                    email: this.state.email,
                    phoneNumber: this.state.phoneNumber,
                    address: this.state.address 
                }))
            } else {
                alert('Sorry there has been an error. Please try again later')
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
//To show the edit popup
    onOpenTrueChange = (event) => {
        this.setState({
            open: true 
        })
    }
 //To close the edit popup   
    onOpenFalseChange = (event) => {
        this.setState({
            open: false
        })
    }
    
    render(){
        const { open } = this.state;
        return (
            <div>
                <AuthenticatedNav />
                <div className="profile-container">
                    <Form style={{display:"flex", justifyContent:"space-around"}}>
                        <div>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>NAME</Form.Label>
                                    <h5>{this.state.name}</h5>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>EMAIL</Form.Label>
                                <h5>{this.state.email}</h5> 
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>PHONE NO</Form.Label>
                                <h5>{this.state.phoneNumber}</h5>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>ADDRESS</Form.Label>
                                <h5>{this.state.address}</h5>
                            </Form.Group>
                        </div>
                    </Form>
                    <button onClick = {this.onOpenTrueChange}>
                            Edit
                    </button>
                    <Modal open = {open} onClose = {this.onOpenFalseChange} center>
                        <EditProfile />
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Profile;