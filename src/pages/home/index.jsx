import React from 'react'
import Image from '../../components/atoms/Image'
import Categories from '../../components/molecules/Categories'
import RecentCars from '../../components/molecules/RecentCars'
import FilterCars from '../../components/molecules/FilterCars'
import banner from '../../../assets/las_mercedes.jpeg'
import './styles.css'

const Home = () => {
    return (
        <div className='container'>
            <div className="content-banner">
                <FilterCars />
                <Image src={banner} />
            </div>
            <Categories />
            <RecentCars />
        </div>
    )
}

export default Home