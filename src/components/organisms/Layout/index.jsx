import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../molecules/Footer'
import Navbar from '../../molecules/Navbar'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Layout