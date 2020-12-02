import React, {Component} from 'react';


class EditProfile extends Component { 
    constructor(props) {
        super(props);
    }
    render() {
        const userInfo = JSON.parse(localStorage.getItem('User'));
        const { name, email, phoneNumber, address } = userInfo;
        const { editName, editAddress, editPhoneNumber, editEmail } = this.props;
        return(
            <div>
                {/* <Form>
                    <h3 style = {{textAlign: "center"}} >Edit Profile Information</h3>
                    <Form.Group >
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text"  onChange = {this.onNameChange} placeholder = {`${name}`} />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={this.onEmailChange} placeholder = {email} />
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onChange={this.onPhoneNumberChange} type="tel" placeholder = {phoneNumber} />
                        <Form.Label>Gender</Form.Label>
                            <Form.Group>
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    onChange = {() => {this.onGenderChange("male")}}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    onChange = {() => {this.onGenderChange("female")}}
                                />
                            </Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text"  onChange = {this.onAddressChange} placeholder = {address} />
                    </Form.Group>
                    <Button onClick={this.onUpdate} variant="danger">
                        Update
                    </Button>
                </Form> */}
                <form>
                    <h3 style = {{textAlign: "center"}}>Edit Profile Information</h3>
                    <div>
                        <label>Full Name</label><br />
                        <input 
                            type = "text" 
                            name = "name" 
                            placeholder = {name}
                            onChange = {editName}                                 
                        />
                    </div>
                    <div>
                        <label>Email</label><br />
                        <input 
                            type = "email" 
                            name = "email" 
                            placeholder = {email}
                            onChange = {editEmail}                                 
                        />
                    </div>
                    <div>
                        <label>Phone Number</label><br/>
                        <input 
                            type = "tel" 
                            name = "phoneNumber"
                            placeholder = {phoneNumber} 
                            onChange = {editPhoneNumber}                                 
                        />
                    </div>
                    <div>
                        <label>Address</label><br />
                        <input 
                            type = "text" 
                            name = "address"
                            placeholder = {address} 
                            onChange = {editAddress}                                 
                        />
                    </div>
                </form>
            </div>
        )
    }   
}


export default EditProfile;