import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsTagFill } from 'react-icons/bs'
import { HiIdentification } from 'react-icons/hi'
import { TbSteeringWheel } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectedVehicle } from '../../../store/vehicles/action'
import Button from '../../atoms/Button/Button'
import './CardStyles.css'

const Card = ({
    id,
    name,
    image,
    price,
    model,
    year,
    vehicle,
    transmition
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeVehicle = (vehicle) => {
        dispatch(selectedVehicle(vehicle))
        navigate(`/details-car/${vehicle.id}`)
        return
    }

    return (
        <div className='card' onClick={() => onChangeVehicle(vehicle)}>
            <div className='header-card'>
                <span>{name}</span> <AiOutlineHeart className='icon' size={22} />
            </div>
            <div className='content-card'>
                <img src={image} alt="" />
            </div>
            <div className='footer-card'>
                <Button label={`$ ${price}`} />
                <div>
                    <div className='info-car'>
                        <BsTagFill size={25} />
                        <span>Modelo</span>
                        <span>{model}</span>
                    </div>
                    <div className='info-car'>
                        <HiIdentification size={25} />
                        <span>Año</span>
                        <span>{year}</span>
                    </div>
                    <div className='info-car'>
                        <TbSteeringWheel size={25} />
                        <span>Tipo</span>
                        <span>{transmition}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card