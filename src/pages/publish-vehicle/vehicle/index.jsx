import React, { useState } from 'react'
import VehicleStepOne from './stepOne';
import StepReady from './stepReady';
import './styles.css'

const Vehicle = ({ formik }) => {
    const [values, setValues] = useState([]);
    const [stepOneReady, setStepOneReady] = useState(false);
    // const [stepTwoReady, setStepTwoReady] = useState(false);
    // const [stepThreeReady, setStepThreeReady] = useState(false);
    // const [stepFourReady, setStepOnFourady] = useState(false);
    // const [stepFiveReady, setStepOneFivedy] = useState(false);

    const [currentStep, setCurrentStep] = useState(0);

    const removeItem = (value) => {
        const newArray = values.filter((item) => item.value !== value.value);
        setValues(newArray);

        if (value.type === 'brand') {
            setCurrentStep(0)
            formik.setValues({
                ...formik.values,
                brand: ''
            })
        }
        if (value.type === 'model') {
            setCurrentStep(1)
            formik.setValues({
                ...formik.values,
                model: ''
            })
        }
        if (value.type === 'year') {
            setCurrentStep(2)
            formik.setValues({
                ...formik.values,
                year: ''
            })
        }

        if (value.type === 'year' && values.length < 2) {
            setCurrentStep(0)
            formik.setValues({
                ...formik.values,
                year: ''
            })
        }

        if (value.type === 'model' && values.length < 2) {
            setCurrentStep(0)
            formik.setValues({
                ...formik.values,
                year: ''
            })
        }

        if (value.type === 'brand' && values.length < 2) {
            setCurrentStep(0)
            formik.setValues({
                ...formik.values,
                year: ''
            })
        }
    }

    const onChangeBrand = (e) => {
        setCurrentStep(1)
        formik.setValues({
            ...formik.values,
            brand: e.target.value
        })
        setValues([...values, { type: 'brand', value: e.target.value }])

    }

    const onChangeModel = (e) => {
        setCurrentStep(2)
        formik.setValues({
            ...formik.values,
            model: e.target.value
        })
        setValues([...values, { type: 'model', value: e.target.value }])
    }

    const onChangeYear = (e) => {
        setCurrentStep(3)
        formik.setValues({
            ...formik.values,
            year: e.target.value
        })
        setValues([...values, { type: 'year', value: e.target.value }])
        setStepOneReady(true)
    }

    return (
        <div className='content-info-vehicle'>

            {!stepOneReady ?
                <VehicleStepOne
                    values={values}
                    currentStep={currentStep}
                    onChangeBrand={onChangeBrand}
                    onChangeModel={onChangeModel}
                    onChangeYear={onChangeYear}
                    removeItem={removeItem}
                />
                :
                <StepReady
                    currentStep={currentStep}
                    values={values}
                    editF={() => setStepOneReady(false)}
                />
            }
        </div>
    )
}

export default Vehicle