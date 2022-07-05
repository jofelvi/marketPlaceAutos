import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getVehicles } from '../../../store/vehicles/action'
import Card from '../../molecules/Card/Card'
import './RecentCarsStyles.css'

const RecentCars = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { vehicles } = useSelector(state => state.vehicles);
    const condition = location.pathname === '/filter-cars';

    useEffect(() => {
        dispatch(getVehicles());
        //eslint-disable-next-line
    }, []);

    return (
        <div className='container'>
            <p>{condition ? `${vehicles?.length} Vehículos encontrados` : 'Autos más recientes'}</p>

            <div className={condition ? 'cars-filter' : 'cars'}>
                {vehicles.map(car => (
                    <Card
                        key={car.id}
                        id={car.id}
                        name={car.label}
                        model={car.model}
                        transmition={car.transmition}
                        year={car.year}
                        price={car.price}
                        image={car.image}
                        vehicle={car}
                        cars={vehicles}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecentCars