import React from 'react';
import '@fontsource/dm-sans';
import NavBar from '../../molecules/navbar';

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;