import React from 'react';
import { Link } from 'react-router-dom';
import './AuthenticatedNav.css';

const AuthenticatedNav = () => {

    const onLogout = () => {
        localStorage.clear()
    }

    return (
        <div className = "navbar-cont">
            <Link to = '/business/profile'>
                <button>HOME</button>
            </Link>
            <div className = "dropdown-cont">
                <button className = "dropbtn-b">
                    MENU
                </button>
                <div className = "dropdown-content">
                    <Link to = '/business/profile/todays_menu'>
                        <button>Today's Menu</button>
                    </Link>
                    <Link to = '/business/profile/primary_menu'>
                        <button>Primary Menu</button>
                    </Link>
                </div>
            </div>
            <div className = "dropdown-cont">
                <button className = "dropbtn-b">
                    ORDERS
                </button>
                <div className = "dropdown-content">
                    <Link to = '/business/profile/incoming_orders'>
                        <button>Incoming Orders</button>
                    </Link>
                    <Link to = '/business/profile/order_summary'>
                        <button>Order History</button>
                    </Link>
                </div>
            </div>
            <div style = {{marginLeft: "auto", marginRight: "3vw"}} className = "dropdown-cont">
                <button className = "dropbtn-b">
                    SETTINGS
                </button>
                <div className = "dropdown-content">
                    <Link to = '/business/signin'>
                        <button onClick = {onLogout}>Logout</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AuthenticatedNav;