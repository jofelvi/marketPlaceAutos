import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import Button from '../../components/atoms/Button/Button'
import { getInfoVehicleById } from '../../store/vehicles/action'
import './styles.css'

const DetailsCars = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedVehicle } = useSelector(state => state.vehicles);



    const redirectWhatsapp = () => {
        let url = `https://wa.me/584120000000`
        window.open(url, '_blank');
    }

    useEffect(() => {
        if (selectedVehicle) return
        dispatch(getInfoVehicleById(id))
        //eslint-disable-next-line
    }, []);

    return (
        <div className='content-details-car'>
            {selectedVehicle &&
                <>
                    <div className="content-images">
                        <div className="img-full">
                            <img src={selectedVehicle?.image} alt="" />
                        </div>

                        <div className="more-images">
                            {selectedVehicle?.moreImages?.map((img, key) => (
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
                                <p>{selectedVehicle?.price}</p>
                            </div>
                            <div className='info'>
                                <p className='label'>Tipo: </p>
                                <p>{selectedVehicle?.type}</p>
                            </div>
                            <div className='info'>
                                <p className='label'>Concesionario: </p>
                                <p>{selectedVehicle?.concessionaire}</p>
                            </div>
                            <div className='info'>
                                <p className='label'>Transmisión: </p>
                                <p>{selectedVehicle.transmition}</p>
                            </div>
                            <div className='info'>
                                <p className='label'>Ubicación: </p>
                                <p>{selectedVehicle?.ubication}</p>
                            </div>
                            <div className='info'>
                                <p className='label'>Color: </p>
                                <p>{selectedVehicle?.color}</p>
                            </div>
                            <div className='info'>
                                <p className='label'>Marca: </p>
                                <p>{selectedVehicle?.brand}</p>
                            </div>
                            <div className='info'>
                                <p className='label'>Año: </p>
                                <p>{selectedVehicle?.year}</p>
                            </div>
                            <div className='info'>
                                <p className='label'>Kilometraje: </p>
                                <p>{selectedVehicle?.km}</p>
                            </div>
                            <div className='info'>
                                <p className='label'>Puertas:</p>
                                <p>{selectedVehicle?.doors}</p>
                            </div>
                            <div className='info'>
                                <p className='label'>Estado: </p>
                                <p>{selectedVehicle?.state}</p>
                            </div>
                        </div>

                        <div className="content-contact-buttons">
                            <button onClick={redirectWhatsapp}><img src="/assets/whatsapp.svg" />Contactar por whatsapp</button>
                            <button><img src="/assets/phone.svg" />Llamada telefónica</button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default DetailsCars