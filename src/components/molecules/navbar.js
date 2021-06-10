import React from 'react';
import NavLink from '../atoms/navlink';
import './navstyles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to={'/'} name='HYL' />
            <NavLink to={'/work'} name='Work' />
            <NavLink to={'/about'} name='About' />
            <NavLink to={'/contact'} name='Contact' />
        </div>
    );
};

export default NavBar;