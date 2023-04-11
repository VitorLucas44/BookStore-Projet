import React from 'react';
import {NavBar} from '../NavBar';
import {Footer} from '../Footer';

export const MainLayout = ({ children }) => {
    return (
    <>
    <NavBar/>
    {children}
    </>
    )
}

export default MainLayout