import React from 'react';
import Nav from '../Bars/LaunchNavbar';
import Footer from '../Bars/Footer';
export default function Launch({ children }) {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
}