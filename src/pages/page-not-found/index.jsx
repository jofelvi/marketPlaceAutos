import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/atoms/Button/Button'
import './styles.css'

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='content-page-not-found'>
            <p className='title'>ERROR 4<img src="/assets/location.svg" alt="Página no encontrada"/>4</p>

            <div className="content-image">
                <img src="/assets/page-not-found.svg" alt="Página no encontrada" />
            </div>

            <p>Esta página no está disponible</p>

            <Button
                label='Ir al inicio'
                onClick={() => navigate('/')}
            />
        </div>
    )
}

export default PageNotFound