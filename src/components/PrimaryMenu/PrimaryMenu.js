import React from 'react';
import AuthenticatedNav from '../AuthenticatedNav/AuthenticatedNav';

const PrimaryMenu = () => {
    return (
        <div>
            <AuthenticatedNav />
            <h1>Primary Menu</h1>
        </div>
    ) 
}

export default PrimaryMenu;