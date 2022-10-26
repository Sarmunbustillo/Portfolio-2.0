import React from 'react';
import Contact from '../Contact';
import NavBar from '../NavBar';

interface LayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Contact />
        </>
    );
};

export default DefaultLayout;
