import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import { VscAccount } from 'react-icons/vsc';
import LoginButton from './buttons/Login';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/mens">Men</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/womens">Women</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                            
                        </ul>
                    <NavLink className="navbar-brand mx-auto fw-bold" to="/home">JeanStation</NavLink>
                    <LoginButton />
                    <CartBtn/>
                    <NavLink to="/my-account" className="nav-link">
                    <VscAccount size="1.8rem" />  &nbsp;My Account
                    </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header