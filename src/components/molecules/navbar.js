import React from 'react';
import NavLinkHome from '../atoms/navlinkhome';
import NavLink from '../atoms/navlink';
import './navstyles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLinkHome to={'/'} name='HYL' />
            <NavLink to={'/work'} name='Work' />
            <NavLink to={'/about'} name='About' />
            <NavLink to={'/contact'} name='Contact' />
        </div>
    );
};

export default NavBar;