import React from 'react'
import { Outlet } from 'react-router-dom'
import StykyButton from '../../atoms/StakyButton'
import Footer from '../../molecules/Footer'
import Navbar from '../../molecules/Navbar'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <StykyButton/>
            <Footer/>
        </>
    )
}

export default Layout