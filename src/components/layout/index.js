import React from 'react';
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import NavBar from './navbar';
import Footer from './footer';
import './styles.css';

const Layout = ({ children }) => {
    return (
        <div className="page-container">
            <NavBar />
            <div className="content-container">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;