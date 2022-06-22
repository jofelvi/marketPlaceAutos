import React from 'react'
import Select from '../../../../components/atoms/Select'

const VehicleStepOne = ({
    values,
    currentStep,
    removeItem,
    onChangeBrand,
    onChangeModel,
    onChangeYear
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
            <div className="content-items">
                {values.map((item, key) => (
                    <div className="content-item" key={key}>
                        <span>{item.value}</span>
                        <img onClick={() => removeItem(item)} src="http://localhost:3000/assets/publish-vehicle/remove-item.svg" alt="" />
                    </div>
                ))}

            </div>

            <div className="selector">
                {currentStep === 0 &&
                    <Select
                        name='brand'
                        options={options}
                        onChange={onChangeBrand}
                    />
                }

                {currentStep === 1 &&
                    <Select
                        name='model'
                        options={models}
                        onChange={onChangeModel}
                    />
                }

                {currentStep === 2 &&
                    <Select
                        name='year'
                        options={years}
                        onChange={onChangeYear}
                    />
                }
            </div>
        </>
    )
}

export default VehicleStepOne