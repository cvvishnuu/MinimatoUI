import React from 'react';
import AuthenticatedNav from '../AuthenticatedNav/AuthenticatedNav';

const TodaysMenu = () => {
    return (
        <div>
            <AuthenticatedNav />
            <h1>Todays Menu</h1>
        </div>
    ) 
}

export default TodaysMenu;