import React from 'react'
import Select from '../../../../components/atoms/Select/Select'
import StepReady from '../stepReady';

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
                <>
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
                                error={formik.errors.brand}
                                label={formik.errors.brand}
                            />
                        }

                        {currentStep === 1 &&
                            <Select
                                name='model'
                                options={models}
                                onChange={onChangeModel}
                                error={formik.errors.model}
                                label={formik.errors.model}
                            />
                        }

                        {currentStep === 2 &&
                            <Select
                                name='year'
                                options={years}
                                onChange={onChangeYear}
                                error={formik.errors.year}
                                label={formik.errors.year}
                            />
                        }
                    </div>
                </>
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