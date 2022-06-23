import React from 'react'
import { BsTagFill } from 'react-icons/bs'
import Input from '../../../../components/atoms/Input'
import Button from '../../../../components/atoms/Button'
import StepReady from '../stepReady'
import './styles.css'

const VehicleStepTwo = ({
    formik,
    stepOneReady,
    setStepOneReady
}) => {
    return (
        <>
            {!stepOneReady &&
                <div className="content-step-2">
                    <div className="content-title">
                        <img src="http://localhost:3000/assets/publish-vehicle/dontCheck.svg" alt="" />
                        <p>Detalles principales:</p>
                    </div>
                    <div className="content-inputs-2">
                        <Input
                            name='km'
                            type='text'
                            placeholder='Kilometraje'
                            onChange={formik.handleChange}
                            value={formik.values.km}
                            formik={formik}
                            width='250px'
                            left='20px'
                            Icon={BsTagFill}
                        />

                        <Input
                            name='state'
                            type='text'
                            placeholder='Estado'
                            onChange={formik.handleChange}
                            value={formik.values.state}
                            formik={formik}
                            width='250px'
                            left='20px'
                            Icon={BsTagFill}
                        />

                        <Input
                            name='price'
                            type='text'
                            placeholder='Precio'
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            formik={formik}
                            width='250px'
                            left='20px'
                            Icon={BsTagFill}
                        />
                    </div>
                    <Button
                        label='Completar paso'
                        disabled={formik.errors.km || formik.errors.state || formik.errors.price}
                        onClick={() => setStepOneReady(true)}
                    />
                </div>
            }

            {stepOneReady &&
                <StepReady
                    values={[{ value: `${formik.values.km} Kilometros` }, { value: `Estado: ${formik.values.state}` }, { value: `Precio: $${formik.values.price}` }]}
                    editF={() => setStepOneReady(false)}
                />
            }
        </>
    )
}

export default VehicleStepTwo