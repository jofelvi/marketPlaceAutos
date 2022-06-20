import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import StykyButton from '../../atoms/StakyButton'
import Footer from '../../molecules/Footer'
import Navbar from '../../molecules/Navbar'

const Layout = () => {
    const location = useLocation();
    return (
        <>
            <Navbar />
            <Outlet />
            {location.pathname !== '/filter-cars' && <StykyButton/>}
            {location.pathname === '/' && <Footer/>}
        </>
    )
}

export default Layout