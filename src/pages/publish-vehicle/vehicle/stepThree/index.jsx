import React from 'react'
import { BsTagFill } from 'react-icons/bs'
import Input from '../../../../components/atoms/Input/Input'
import Button from '../../../../components/atoms/Button/Button'
import StepReady from '../stepReady'

const VehicleStepThree = ({
    formik,
    stepOneReady,
    setStepOneReady
}) => {
    return (
        <>
            {!stepOneReady &&
                <div className="content-step-2">
                    <div className="content-title">
                        <img src="/assets/publish-vehicle/dontCheck.svg" alt="" />
                        <p>Detalles del auto:</p>
                    </div>
                    <div className="content-inputs-2">
                        <Input
                            name='cylinders'
                            type='text'
                            placeholder='Cilindros'
                            onChange={formik.handleChange}
                            value={formik.values.cylinders}
                            formik={formik}
                            width='250px'
                            left='20px'
                            Icon={BsTagFill}
                        />

                        <Input
                            name='owners'
                            type='text'
                            placeholder='Dueños'
                            onChange={formik.handleChange}
                            value={formik.values.owners}
                            formik={formik}
                            width='250px'
                            left='20px'
                            Icon={BsTagFill}
                        />

                        <Input
                            name='outside_color'
                            type='text'
                            placeholder='Color'
                            onChange={formik.handleChange}
                            value={formik.values.outside_color}
                            formik={formik}
                            width='250px'
                            left='20px'
                            Icon={BsTagFill}
                        />
                    </div>
                    <Button
                        label='Completar paso'
                        disabled={formik.errors.cylinders || formik.errors.owners || formik.errors.inside_color || formik.errors.outside_color}
                        onClick={() => setStepOneReady(true)}
                    />
                </div>
            }

            {stepOneReady &&
                <StepReady
                    values={[{ value: `${formik.values.cylinders} Cilindros` }, { value: `Dueños: ${formik.values.owners}` }, { value: `Color interior: ${formik.values.inside_color}` }, { value: `Color exterior: ${formik.values.outside_color}` }]}
                    editF={() => setStepOneReady(false)}
                />
            }
        </>
    )
}

export default VehicleStepThree