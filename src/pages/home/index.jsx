import React from 'react'
import Image from '../../components/atoms/Image/Image'
import Categories from '../../components/molecules/Categories/Categories'
import RecentCars from '../../components/molecules/RecentCars/RecentCars'
import FilterCars from '../../components/molecules/FilterCars/FilterCars'
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