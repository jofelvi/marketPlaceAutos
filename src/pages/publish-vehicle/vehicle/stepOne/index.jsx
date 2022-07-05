import React from 'react'
import Select from '../../../../components/atoms/Select/Select'
import StepReady from '../stepReady';
import './styles.css'

const VehicleStepOne = ({
    values,
    formik,
    currentStep,
    stepOneReady,
    removeItem,
    onChangeBrand,
    onChangeModel,
    onChangeYear,
    setStepOneReady
}) => {
    const options = [
        {
            value: '',
            name: 'Marca'
        },
        {
            value: 'hyundai',
            name: 'Hyundai'
        },
    ];

    const models = [
        {
            value: '',
            name: 'Modelo'
        },
        {
            value: 'accent',
            name: 'Accent'
        },
    ];

    const years = [
        {
            value: '',
            name: 'Año'
        },
        {
            value: '2005',
            name: '2005'
        },
    ];
    return (
        <>
            {!stepOneReady &&
                <div className='content-step-one'>
                    <div className="content-items">
                        {values.map((item, key) => (
                            <div className="content-item" key={key}>
                                <span>{item.value}</span>
                                <img onClick={() => removeItem(item)} src="/assets/publish-vehicle/remove-item.svg" alt="" />
                            </div>
                        ))}
                    </div>

                    <div className="selector">
                        {currentStep === 0 &&
                            <Select
                                name='brand'
                                options={options}
                                onChange={onChangeBrand}
                                formik={formik}
                            />
                        }

                        {currentStep === 1 &&
                            <Select
                                name='model'
                                options={models}
                                onChange={onChangeModel}
                                formik={formik}
                            />
                        }

                        {currentStep === 2 &&
                            <Select
                                name='year'
                                options={years}
                                onChange={onChangeYear}
                                formik={formik}
                            />
                        }
                    </div>
                </div>
            }

            {stepOneReady &&
                <StepReady
                    currentStep={currentStep}
                    values={values}
                    editF={() => setStepOneReady(false)}
                />
            }
        </>
    )
}

export default VehicleStepOne