import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const LoginButton = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    // Define the URLs for login and logout routes
    const loginUrl = '/login'; 
    const logoutUrl = '/home'; 
    if (isLoggedIn) {
        // User is logged in, display a "Logout" button with NavLink
        return (
            <NavLink to={logoutUrl} className="btn btn-outline-danger">
                Logout
            </NavLink>
        );
    } else {
        // User is not logged in, display a "Login" button with NavLink
        return (
            <NavLink to={loginUrl} className="btn btn-outline-primary">
                Login
            </NavLink>
        );
    }
};

export default LoginButton;