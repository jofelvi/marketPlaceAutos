import React from 'react'
import Button from '../../components/atoms/Button/Button'
import { dummyImages, dummyInfoCar } from '../../utils/dummyImages'
import './styles.css'

const DetailsCars = () => {
    return (
        <div className='content-details-car'>
            <div className="content-images">
                <div className="img-full">
                    <img src="/assets/motos/fullscreen.jpg" alt="" />
                </div>

                <div className="more-images">
                    {dummyImages.map((img, key) => (
                        <img key={key} src={img.url} />
                    ))}
                </div>

                <div className="content-detail-buttons">
                    <Button label='Datos del vendedor' />
                    <Button label='Hacer pregunta' />
                </div>
            </div>
            <div className="content-info-car">
                <div className="content-info">
                    <div className='header-info'>
                        <p>Detalles del vehículo</p>
                    </div>
                    <div className='info'>
                        <p className='label'>Precio: </p>
                        <p>{dummyInfoCar.price}</p>
                    </div>
                    <div className='info'>
                        <p className='label'>Tipo: </p>
                        <p>{dummyInfoCar.type}</p>
                    </div>
                    <div className='info'>
                        <p className='label'>Concesionario: </p>
                        <p>{dummyInfoCar.concessionaire}</p>
                    </div>
                    <div className='info'>
                        <p className='label'>Transmisión: </p>
                        <p>{dummyInfoCar.transmition}</p>
                    </div>
                    <div className='info'>
                        <p className='label'>Ubicación: </p>
                        <p>{dummyInfoCar.ubication}</p>
                    </div>
                    <div className='info'>
                        <p className='label'>Color: </p>
                        <p>{dummyInfoCar.color}</p>
                    </div>
                    <div className='info'>
                        <p className='label'>Marca: </p>
                        <p>{dummyInfoCar.brand}</p>
                    </div>
                    <div className='info'>
                        <p className='label'>Dirección: </p>
                        <p>{dummyInfoCar.direction}</p>
                    </div>
                    <div className='info'>
                        <p className='label'>Año: </p>
                        <p>{dummyInfoCar.year}</p>
                    </div>
                    <div className='info'>
                        <p className='label'>Kilometraje: </p>
                        <p>{dummyInfoCar.km}</p>
                    </div>
                    <div className='info'>
                        <p className='label'>Puertas:</p>
                        <p>{dummyInfoCar.doors}</p>
                    </div>
                    <div className='info'>
                        <p className='label'>Estado: </p>
                        <p>{dummyInfoCar.state}</p>
                    </div>
                </div>

                <div className="content-contact-buttons">
                    <button><img src="/assets/whatsapp.svg" />Contactar por whatsapp</button>
                    <button><img src="/assets/phone.svg" />Llamada telefónica</button>
                </div>
            </div>
        </div>
    )
}

export default DetailsCars