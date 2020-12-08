import React, {Component} from 'react';
import axios from 'axios';
import AuthenticatedNav from '../AuthenticatedNav/AuthenticatedNav';
import EditProfile from '../EditProfile/EditPtofile';
import { Modal, Button } from 'antd';
import Form from 'react-bootstrap/Form';
import FooterPagePro from '../Footer/Footer';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Profile.css';
import 'antd/dist/antd.css';


class Profile extends Component  {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            email: '',
            phoneNumber: '',
            address: '',
            editName: '',
            editEmail: '',
            editPhoneNumber: '',
            editAddress: '', 
            loading: false,
            visible: false,  
            selectedFile: 'null',
            imageRecieved: false 
        }
    }
    
    componentDidMount(){
        const token = JSON.parse(localStorage.getItem('Authorization'))
        const reqOne = axios.get('http://localhost:5000/business/profile', {headers : {Authorization: token}});
        const reqTwo = axios.get('http://localhost:5000/business/getImage', {headers : {Authorization: token}});
        axios.all([reqOne, reqTwo]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]
            if(responseOne.data.success) {
                this.setState({
                    id: responseOne.data.payload.id,
                    name: responseOne.data.payload.name,
                    email: responseOne.data.payload.email,
                    phoneNumber: responseOne.data.payload.phone_no,
                    address: responseOne.data.payload.address 
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
            if(responseTwo.data.success) {                
                this.setState({
                    imageRecieved: responseTwo.data.payload.url
                })
            }
        }))
        // .catch((err)=>{
        //     console.log(err)
        // })
        }

    // componentDidUpdate(prevState){
    //     if(prevState !==)
    // }

//To show the edit popup
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
 //To handle Submit button   
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

//To handle cancel button
    handleCancel = () => {
        this.setState({ visible: false });
    };

    onEditNameChange = (event) => {
        this.setState({
            editName: event.target.value
        })
    }

    onEditEmailChange = (event) => {
        this.setState({
            editEmail: event.target.value
        })
    }

    onEditPhoneNumberChange = (event) => {
        this.setState({
            editPhoneNumber: event.target.value
        })
    }

    onEditAddressChange = (event) => {
        this.setState({
            editAddress: event.target.value
        })
    }

    profilePicHandler = () => {
        const image = document.getElementById("profileImageInput");
        image.click();
    }

    onInputHandler = (event) => {
        console.log(event.target.files)
        // setSelectedFile(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    
    onUploadHandler = (event) => {
        const userInfo = JSON.parse(localStorage.getItem('User'));
        const { id } = userInfo;
        const token = JSON.parse(localStorage.getItem('Authorization'))
        const fd = new FormData();
        event.preventDefault();
        fd.append('picture', this.state.selectedFile);                
        // axios.post('http://localhost:5000/student/uploadImage', fd)
        // .then(res => {
        //     console.log(res);
        // })
        // setTimeout(function() {
        //     // window.location.reload();
        //     document.location.reload()
        // }, 3000)
        axios({
            method:'post',
            url: 'http://localhost:5000/business/uploadImage',
            data: fd,            
            headers: { 
                'Authorization': token,
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    onUpdate = (event) => {
        const { editName, editEmail, editPhoneNumber, editAddress } = this.state;
        const userInfo = JSON.parse(localStorage.getItem('User'));
        const { id } = userInfo;
        const token = JSON.parse(localStorage.getItem('Authorization'))
        try {
            // if(name === '' || email === '' || phoneNumber === '' || address === '') {
            //     alert("Please fill in all the fields.");
            // } else {
                axios.put('http://localhost:5000/business/editprofile', {
                    id: id,
                    name: editName,
                    email: editEmail,
                    phoneNo: editPhoneNumber,
                    address: editAddress
                }, 
                {
                    headers: {
                        Authorization: token
                    }
                }).then(res => {
                    if(res.data.success) {
                        this.setState({
                            id: res.data.payload.id,
                            name: res.data.payload.name,
                            email: res.data.payload.email,
                            phoneNumber: res.data.payload.phone_no,
                            address: res.data.payload.address 
                        })
                        localStorage.setItem("User", JSON.stringify({
                            id: res.data.payload.id,
                            name: res.data.payload.name,
                            email: res.data.payload.email,
                            phoneNumber: res.data.payload.phone_no,
                            address: res.data.payload.address
                        })) 
                    } else {
                        alert("The server has crashed. Please try again later");
                    }         
                })
            // }
        } catch (error) {
            alert("There has been an erro, please try again later");
        }
    }
    
    render(){
        const { visible, loading } = this.state;
        return (
            <div>
                <AuthenticatedNav />
                <div className="profile-container">
                    <h1 style = {
                            {
                                fontFamily: "Lemonada, cursive",
                                color: "red",
                                display: "flex",
                                justifyContent: "center"
                            }
                        }
                    >
                        Minimato
                    </h1>
                    <div className = "profileImagePosition">
                    {
                        (this.state.imageRecieved)?
                        <img src = {`http://localhost:5000${this.state.imageRecieved}`} alt = "profile picture" style = {{
                            height: "200px",
                            width: "200px",
                            borderRadius: "50%"
                        }}/>
                        :                        
                        <Avatar size={200} icon={<UserOutlined />} onClick = {this.profilePicHandler} id = "antimage"/>
                    }
                        
                        <input 
                            type = 'file' 
                            name = 'picture' 
                            id = "profileImageInput"
                            style = {{display: "none"}}
                            onChange = {this.onInputHandler}
                        />
                        <br />
                        <button 
                            className = "btn btn-danger mt-3" 
                            onClick = {this.onUploadHandler}
                            style = {{paddingLeft: "30px", paddingRight: "30px", marginLeft: "43px"}}
                        >
                                Upload
                        </button>
                    </div>
                    
                    <h3 style = {{display: "flex", justifyContent: "flex-end"}} className = "col-sm-4">Personal Details</h3>
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
                    <Button style = {{position: "fixed!important", left: "19.5vw"}} type = "primary" onClick = {this.showModal}>
                        Edit
                    </Button>
                    <Modal
                        visible = {visible}                        
                        onOk = {this.handleOk}
                        onCancel = {this.handleCancel}
                        footer = {[
                            <Button key = "back" onClick = {this.handleCancel}>
                                cancel
                            </Button>,
                            <Button 
                                key = "submit" 
                                type = "primary" 
                                loading = {loading} 
                                onClick = {() => {
                                    this.handleOk();
                                    this.onUpdate();                                     
                                }}
                            >
                                Update
                            </Button>,
                        ]}
                    >
                        <EditProfile 
                            editName = {this.onEditNameChange} 
                            editAddress = {this.onEditAddressChange} 
                            editPhoneNumber = {this.onEditPhoneNumberChange}
                            editEmail = {this.onEditEmailChange}                                 
                        />
                    </Modal>
                </div>
                <FooterPagePro />
            </div>
        )
    }
}

export default Profile;