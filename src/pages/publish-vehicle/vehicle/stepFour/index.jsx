import React from 'react'
import Button from '../../../../components/atoms/Button/Button'
import StepReady from '../stepReady'
import './styles.css'

const VehicleStepFour = ({
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
                        <p>Descripción del auto:</p>
                    </div>
                    <div className="content-textarea">
                        {formik.errors.description && <p>{formik.errors.description}</p>}
                        <textarea className={formik.errors.description ? 'textarea-error' : 'textarea'} name="description" cols={100} onChange={formik.handleChange} value={formik.values.description}></textarea>
                    </div>
                    <Button 
                        label='Completar paso' 
                        disabled={formik.errors.description}
                        onClick={() => setStepOneReady(true)}
                    />
                </div>
            }

            {stepOneReady &&
                <StepReady
                    values={[{ value: `Descripción del vehículo: ${formik.values.description}` }]}
                    editF={() => setStepOneReady(false)}
                />
            }
        </>
    )
}

export default VehicleStepFour