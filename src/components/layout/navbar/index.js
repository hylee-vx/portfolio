import React from 'react';
import { Link } from 'gatsby';
import SocialMediaLinks from './socialmedialinks';
import './styles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="nav-links-container">
                <Link to={'/'} className="nav-link">HYL</Link>
                <Link to={'/work'} className="nav-link" activeClassName="active-nav-link">Work</Link>
                <Link to={'/about'} className="nav-link" activeClassName="active-nav-link">About</Link>
                <Link to={'/contact'} className="nav-link" activeClassName="active-nav-link">Contact</Link>
            </div>
            <SocialMediaLinks />
        </div>
    );
};

export default NavBar;