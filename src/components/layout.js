import React from 'react';
import { Link } from 'gatsby';
import './Layout.css';

const ListLink = props => (
    <Link to={props.to} className={`${props.parentClass} nav-links`}>{props.children}</Link>
);

export default function Layout({ children }) {
    return (
        <>
            <div className='nav'>
                <ListLink to="/" parentClass="link home-link">HYL</ListLink>
                <ListLink to="/work/" parentClass="link work-link" >Work</ListLink>
                <ListLink to="/about/" parentClass="link about-link">About</ListLink>
                <ListLink to="/contact" parentClass="link contact-link">Contact</ListLink>
            </div>
            <div>
                {children}
            </div>
        </>
    );
}