import React from 'react'
import Navbar from '../../components/molecules/Navbar'
import Image from '../../components/atoms/Image'
import Categories from '../../components/molecules/Categories'
import RecentCars from '../../components/molecules/RecentCars'
import Footer from '../../components/molecules/Footer'
import banner from '../../../assets/las_mercedes.jpeg'
import './styles.css'

const Home = () => {
    return (
        <div className='container'>
            {/* <Navbar /> */}
            <Image src={banner} />
            <Categories />
            <RecentCars/>
            {/* <Footer/> */}
        </div>
    )
}

export default Home