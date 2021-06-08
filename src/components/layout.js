import React from 'react';
import { Link } from 'gatsby';
import '@fontsource/dm-sans';
import './layout.css';

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
);

export default function Layout({ children }) {
    return (
        <div>
            <ul>
                <ListLink to="/" className="home-link">HYL</ListLink>
                <ListLink to="/work/" className="work-link">Work</ListLink>
                <ListLink to="/about/" className="about-link">About</ListLink>
                <ListLink to="/contact" className="contact-link">Contact</ListLink>
            </ul>
            {children}
        </div>
    );
}