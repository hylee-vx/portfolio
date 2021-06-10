import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({ to, name }) => {
    return (
        <Link to={to} className="nav-link">{name}</Link>
    );
};

export default NavLink;