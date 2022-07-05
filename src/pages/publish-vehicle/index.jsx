import React, { useEffect, useState } from 'react'
import { Steps } from 'antd';
import DataUser from './data-user';
import Photos from './photos';
import Vehicle from './vehicle';
import useOnChange from '../../hooks/useOnChange';
import { initialValuesPublishVehicle, validatePublishVehicleStepOne, validatePublishVehicleStepThree, validatePublishVehicleStepTwo } from '../../utils/publish-vehicle/validatePublishVehicle';
import { getCities } from '../../store/ubications/action';
import { useDispatch } from 'react-redux';
import { successModal } from '../../store/notifications/actions';
import Modal from '../../components/molecules/Modal/Modal';
import './styles.css'

const { Step } = Steps;

const PublishVehicle = () => {
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(0);

    const next = (data) => {        
        if (current === 0) {
            if (!formik.errors.firs_name &&
                !formik.errors.last_name &&
                !formik.errors.email &&
                !formik.errors.ubication &&
                !formik.errors.phone
            ) {
                setCurrent(current + 1);
            }
        } else if (current === 1) {
            if (!formik.errors.model &&
                !formik.errors.brand &&
                !formik.errors.year
            ) {
                setCurrent(current + 1);
            }
        } else if (current === 2) {
            if (!formik.errors.imgFront &&
                !formik.errors.imgLeft &&
                !formik.errors.imgRight
            ) {
                formik.resetForm();
                setCurrent(0);
                setFormData(data);
                dispatch(successModal({
                    title: 'Su vehículo ha sido publicado',
                    image: '/assets/publish-vehicle/publish-car.svg',
                    type: 'success'
                }))
            }
        }
    };

    const checkValidateErrors = current === 0 ? validatePublishVehicleStepOne : current === 1 ? validatePublishVehicleStepTwo : current === 2 ? validatePublishVehicleStepThree : null;

    const { formik, setFormData } = useOnChange(initialValuesPublishVehicle, checkValidateErrors, next);


    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'Datos',
            content: <DataUser formik={formik} />,
        },
        {
            title: 'Autos',
            content: <Vehicle formik={formik} />,
        },
        {
            title: 'Fotos',
            content: <Photos formik={formik} />,
        },
    ];

    useEffect(() => {
        dispatch(getCities())
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <div className='content-steps'>
                <p className='title'>¿Quieres vender tu vehículo?</p>
                <div className="data-user">
                    <div className='step1-info'>
                        <img src="http://localhost:3000/assets/publish-vehicle/step1.svg" alt="" />
                        <p className='mid-title text-blue'>Llena nuestro formulario</p>
                        <p className='jr-title text-blue'>Responde nuestro formulario con tu información y de tu vehículo.</p>
                    </div>
                    <div className='asset flex-end'>
                        <img src="http://localhost:3000/assets/publish-vehicle/info.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className='content-steps blue'>
                <div className="data-user">
                    <div className='asset flex-end'>
                        <img src="http://localhost:3000/assets/publish-vehicle/vehicle.svg" alt="" />
                    </div>
                    <div className='step1-info'>
                        <img src="http://localhost:3000/assets/publish-vehicle/step2.svg" alt="" />
                        <p className='mid-title text-white'>Sube fotos de tu vehículo</p>
                        <p className='jr-title text-white'>Las fotografías de tu vehículo deben tener buena calidad y que tener todos los ángulos.</p>
                    </div>
                </div>
            </div>

            <div className='content-steps'>
                <div className="data-user">
                    <div className='step1-info'>
                        <img src="http://localhost:3000/assets/publish-vehicle/step3.svg" alt="" />
                        <p className='mid-title text-blue'>Verifica a tus compradores</p>
                        <p className='jr-title text-blue'>Verifica quíen está interesado en tu vehículo.</p>
                    </div>
                    <div className='asset'>
                        <img className='max-img' src="http://localhost:3000/assets/publish-vehicle/sell.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className='content-steps blue'>
                <div className="data-user">
                    <div className='asset'>
                        <img className='flex-start' src="http://localhost:3000/assets/publish-vehicle/hands.svg" alt="" />
                    </div>
                    <div className='step1-info'>
                        <img src="http://localhost:3000/assets/publish-vehicle/step4.svg" alt="" />
                        <p className='mid-title text-white'>Haz la venta</p>
                        <p className='jr-title text-white'>Estaremos felices por tu venta, esperamos que haga muchas mas.</p>
                    </div>
                </div>
            </div>

            <div className='content-steps white'>
                <div className="content-forms">
                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                    <div className="steps-content">{steps[current].content}</div>

                    <div className="content-buttons-register">
                        {current < steps.length - 1 && (
                            <button className='login' onClick={formik.handleSubmit}>
                                Siguiente
                            </button>
                        )}
                        {current === steps.length - 1 && (
                            <button className='login' onClick={formik.handleSubmit}>
                                Publicar vehículo
                            </button>
                        )}
                        {current > 0 && (
                            <button className='login' onClick={() => prev()}>
                                Volver
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <Modal/>
        </div>
    )
}

export default PublishVehicle