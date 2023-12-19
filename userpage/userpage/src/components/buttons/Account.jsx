import React from 'react';
import { NavLink } from 'react-router-dom';

// Import the VscAccount icon from your icon library
import { VscAccount } from 'react-icons/vsc'; // Adjust the import based on your project's structure

const Account = () => {
    return (
        <NavLink to="/my-account" className="nav-link">
            <VscAccount size="1.8rem" />  &nbsp;My Account
        </NavLink>
    );
}

export default Account;

