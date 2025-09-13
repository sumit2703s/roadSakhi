import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Optional: For additional styling
import Logo from '../../assets/logo.svg';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img className="navbar-logo" src={Logo} alt='logo of website' />
                <ul className="navbar-links">
                    <li>
                        <NavLink
                            exact
                            to="/"
                            className="navbar-link"
                            activeClassName="active"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/vision"
                            className="navbar-link"
                            activeClassName="active"
                        >
                           Vision & Mission
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className="navbar-link"
                            activeClassName="active"
                        >
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="navbar-link"
                            activeClassName="active"
                        >
                            Contact Us
                        </NavLink>
                    </li>
                  
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
