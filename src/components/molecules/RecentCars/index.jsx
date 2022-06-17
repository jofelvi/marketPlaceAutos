import React from 'react'
import { cars } from '../../../utils/recentCars'
import Card from '../../molecules/Card'
import './styles.css'

const RecentCars = () => {
    return (
        <div className='container'>
            <p>Autos más recientes</p>

            <div className='cars'>
                {cars.map(car => (
                    <Card 
                        key={car.id}
                        id={car.id}
                        name={car.label}
                        model={car.model}
                        transmition={car.transmition}
                        year={car.year}
                        price={car.price}
                        image={car.image}
                        cars={cars}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecentCars