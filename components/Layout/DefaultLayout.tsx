import React from 'react';
import Contact from '../Contact';
import NavBar from '../NavBar';

interface LayoutProps {
    children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Contact />
        </>
    );
};

export default DefaultLayout;
