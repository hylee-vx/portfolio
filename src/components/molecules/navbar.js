import React from 'react';
import { Link } from 'gatsby';
// import NavLink from '../atoms/navlink';
import './navstyles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to={'/'} className="nav-link">HYL</Link>
            <Link to={'/work'} className="nav-link">Work</Link>
            <Link to={'/about'} className="nav-link">About</Link>
            <Link to={'/contact'} className="nav-link">Contact</Link>
        </div>
    );
};

export default NavBar;