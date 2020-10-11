import React from 'react';

const Profile = (props) => {
    const { user } = props;
    return (
        <div>
            <h1>home page</h1>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.phoneNumber}</h1>
        </div>
    )
}

export default Profile;