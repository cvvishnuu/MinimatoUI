import React from 'react';
import AuthenticatedNav from '../AuthenticatedNav/AuthenticatedNav';
import { Link } from 'react-router-dom';
import Home from './Home';
import PMenuNav from './PMenuNav'

const PrimaryMenu = () => {
    return (
        <div>
            <AuthenticatedNav />
            <h1>Primary Menu</h1>
            <Link className="btn btn-outline-dark btn-dark text-light" to="/business/profile/primary_menu/add">Add User</Link>
            <PMenuNav/>
            <Home />
        </div>
    )
}

export default PrimaryMenu;