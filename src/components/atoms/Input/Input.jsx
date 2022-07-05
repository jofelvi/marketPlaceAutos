import React from 'react'
import { getFormErrorMessage } from '../../../utils/getFormErrorMessage'
import './InputStyles.css'

const Input = ({
    name,
    value,
    type,
    placeholder,
    width = '100%',
    left = '20px',
    formik,
    onChange,
    Icon,
}) => {
    return (
        <div>
            <div className="content-input" style={{ width: width }}>

                <Icon className={formik?.errors[name] ? 'icon-red ' : 'icon'} size={22} style={{ left: left }} />

                <input
                    name={name}
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={formik?.errors[name] ? 'input-invalid' : 'input'}
                />

            </div>
            {getFormErrorMessage(name, formik)}
        </div>
    )
}

export default Input