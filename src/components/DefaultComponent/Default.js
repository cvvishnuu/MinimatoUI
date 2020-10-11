import React from 'react';
import axios from 'axios';

const DefaultComponent = () => {
    axios.get('http://localhost:5000/', 
        {
            withCredentials: true
        }).then(res => {
            console.log(res);
        })
    return(
        <h1>This is the starting page</h1>
    )
}

export default DefaultComponent