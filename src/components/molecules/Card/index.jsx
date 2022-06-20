import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsTagFill } from 'react-icons/bs'
import { HiIdentification } from 'react-icons/hi'
import { TbSteeringWheel } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button'
import './styles.css'

const Card = ({
    id,
    name,
    image,
    price,
    model,
    year,
    transmition
}) => {
    const navigate = useNavigate();
    return (
        <div className='card' onClick={() => navigate(`/details-car/${id}`)}>
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