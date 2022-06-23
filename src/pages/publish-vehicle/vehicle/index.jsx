import React, { useState } from 'react'
import VehicleStepOne from './stepOne';
import VehicleStepTwo from './stepTwo';
import VehicleStepThree from './stepThree';
import VehicleStepFour from './stepFour';
import './styles.css'

const Vehicle = ({ formik }) => {
    const [values, setValues] = useState([]);
    const [stepOneReady, setStepOneReady] = useState(false);
    const [stepTwoReady, setStepTwoReady] = useState(false);
    const [stepThreeReady, setStepThreeReady] = useState(false);
    const [stepFourReady, setStepFourReady] = useState(false);
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
            <VehicleStepOne
                formik={formik}
                values={values}
                currentStep={currentStep}
                stepOneReady={stepOneReady}
                removeItem={removeItem}
                onChangeBrand={onChangeBrand}
                onChangeModel={onChangeModel}
                onChangeYear={onChangeYear}
                setStepOneReady={setStepOneReady}
            />

            <VehicleStepTwo
                formik={formik}
                stepOneReady={stepTwoReady}
                setStepOneReady={setStepTwoReady}
            />

            <VehicleStepThree
                formik={formik}
                stepOneReady={stepThreeReady}
                setStepOneReady={setStepThreeReady}
            />

            <VehicleStepFour
                formik={formik}
                stepOneReady={stepFourReady}
                setStepOneReady={setStepFourReady}
            />
        </div>
    )
}

export default Vehicle