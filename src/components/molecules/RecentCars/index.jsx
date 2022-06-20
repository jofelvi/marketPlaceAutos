import React from 'react'
import { useLocation } from 'react-router-dom'
import { cars } from '../../../utils/recentCars'
import Card from '../../molecules/Card'
import './styles.css'

const RecentCars = () => {
    const location = useLocation();
    const condition = location.pathname === '/filter-cars';
    return (
        <div className='container'>
            <p>{condition ? '40 Vehículos encontrados' : 'Autos más recientes'}</p>

            <div className={condition ? 'cars-filter' : 'cars'}>
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