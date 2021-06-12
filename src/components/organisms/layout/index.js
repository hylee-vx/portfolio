import React from 'react';
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import NavBar from '../../molecules/navbar';
import Footer from '../../molecules/footer';
import './styles.css';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <div>
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;