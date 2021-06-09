import React from 'react';
import { Link } from 'gatsby';

const NavLinkHome = ({ to, name }) => {
    return (
        <Link to={to} className="home-link">{name}</Link>
    );
};

export default NavLinkHome;