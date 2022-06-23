import React from 'react'

const StepReady = ({
    values,
    currentStep,
    editF
}) => {
    return (
        <div className="step-ready">
            <div className="content-column-70">
                <img src="http://localhost:3000/assets/publish-vehicle/check.svg" alt="" />

                <div className="content-info">
                    {currentStep === 3 && <p>Estás vendiendo:</p>}
                    {values.map((value, key) => (
                        <li key={key}>{value.value}</li>
                    ))}
                </div>
            </div>
            <div className="content-column-30">
                <p onClick={editF}>Editar</p>
            </div>
        </div>
    )
}

export default StepReady